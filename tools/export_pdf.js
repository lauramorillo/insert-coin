const puppeteer = require('puppeteer-core');
const { PDFDocument, PDFString } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const HTML_PATH = 'file://' + path.resolve(__dirname, '..', 'index.html');
const OUTPUT_PDF = path.resolve(__dirname, '..', 'insert_coin_presentation.pdf');

const VIEWPORT_WIDTH = 1512;
const VIEWPORT_HEIGHT = 850;
const PDF_PAGE_WIDTH = 1920;
const PDF_PAGE_HEIGHT = 1080;

async function exportToPdf() {
  console.log('🚀 Iniciando exportación de la presentación a PDF interactivo...');
  
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: 'new',
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--font-render-hinting=none'
    ],
    defaultViewport: {
      width: VIEWPORT_WIDTH,
      height: VIEWPORT_HEIGHT,
      deviceScaleFactor: 2.5 // Alta definición proporcional para llenar la diapositiva sin márgenes muertos
    }
  });

  const page = await browser.newPage();
  await page.goto(HTML_PATH, { waitUntil: 'networkidle0' });

  // Inyectar CSS estricto para evitar transiciones superpuestas y maximizar el aprovechamiento de pantalla
  await page.addStyleTag({
    content: `
      *, *::before, *::after {
        transition: none !important;
        animation-duration: 0s !important;
      }
      #nav-controls, #key-hint {
        display: none !important;
      }
      body {
        overflow: hidden !important;
        background: #0b0c1c !important;
      }
      .slide {
        display: none !important;
        opacity: 0 !important;
        visibility: hidden !important;
        z-index: -1 !important;
        position: absolute !important;
        inset: 0 !important;
      }
      .slide.active {
        display: flex !important;
        opacity: 1 !important;
        visibility: visible !important;
        z-index: 100 !important;
      }
    `
  });

  // Obtener el número total de diapositivas
  const totalSlides = await page.evaluate(() => {
    return window.totalSlides || (typeof SLIDES !== 'undefined' ? SLIDES.length : 44);
  });

  console.log(`📊 Generando ${totalSlides} diapositivas con enlaces interactivos clickeables...`);

  const pdfDoc = await PDFDocument.create();

  for (let i = 0; i < totalSlides; i++) {
    process.stdout.write(`  📸 Procesando slide ${i + 1} de ${totalSlides}... `);
    
    // Cambiar a la diapositiva i y forzar activación síncrona
    await page.evaluate((slideIdx) => {
      if (typeof goTo === 'function') {
        goTo(slideIdx);
      }
      const slides = document.querySelectorAll('.slide');
      slides.forEach((s, idx) => {
        if (idx === slideIdx) {
          s.classList.add('active');
          s.style.display = 'flex';
          s.style.visibility = 'visible';
          s.style.opacity = '1';
        } else {
          s.classList.remove('active');
          s.style.display = 'none';
          s.style.visibility = 'hidden';
          s.style.opacity = '0';
        }
      });
    }, i);

    // Breve pausa para asegurar renderizado completo del DOM
    await new Promise(r => setTimeout(r, 80));

    // Extraer coordenadas de todos los enlaces interactivos en la diapositiva activa
    const links = await page.evaluate(() => {
      const activeSlide = document.querySelector('.slide.active');
      if (!activeSlide) return [];
      const anchorElements = activeSlide.querySelectorAll('a[href]');
      return Array.from(anchorElements).map(a => {
        const rect = a.getBoundingClientRect();
        return {
          href: a.href,
          x: rect.left,
          y: rect.top,
          width: rect.width,
          height: rect.height
        };
      }).filter(l => l.width > 0 && l.height > 0 && l.href && !l.href.startsWith('javascript:'));
    });

    // Capturar screenshot nítido
    const screenshotBuffer = await page.screenshot({
      type: 'png',
      fullPage: false
    });

    const pngImage = await pdfDoc.embedPng(screenshotBuffer);
    const pdfPage = pdfDoc.addPage([PDF_PAGE_WIDTH, PDF_PAGE_HEIGHT]);
    pdfPage.drawImage(pngImage, {
      x: 0,
      y: 0,
      width: PDF_PAGE_WIDTH,
      height: PDF_PAGE_HEIGHT
    });

    // Mapear y añadir anotaciones de enlaces clickeables al PDF
    if (links && links.length > 0) {
      const scaleX = PDF_PAGE_WIDTH / VIEWPORT_WIDTH;
      const scaleY = PDF_PAGE_HEIGHT / VIEWPORT_HEIGHT;

      for (const link of links) {
        const x1 = link.x * scaleX;
        const x2 = (link.x + link.width) * scaleX;
        // En PDF el eje Y comienza abajo (0,0 en esquina inferior izquierda)
        const y1 = PDF_PAGE_HEIGHT - ((link.y + link.height) * scaleY);
        const y2 = PDF_PAGE_HEIGHT - (link.y * scaleY);

        const linkAnnotation = pdfDoc.context.obj({
          Type: 'Annot',
          Subtype: 'Link',
          Rect: [x1, y1, x2, y2],
          Border: [0, 0, 0],
          A: {
            Type: 'Action',
            S: 'URI',
            URI: PDFString.of(link.href)
          }
        });

        const linkRef = pdfDoc.context.register(linkAnnotation);
        pdfPage.node.addAnnot(linkRef);
      }
      process.stdout.write(`[🔗 ${links.length} enlaces activos] `);
    }

    console.log('✓');
  }

  const pdfBytes = await pdfDoc.save();
  fs.writeFileSync(OUTPUT_PDF, pdfBytes);

  console.log(`\n🎉 PDF interactivo generado con éxito en:`);
  console.log(`📁 ${OUTPUT_PDF}`);
  console.log(`📦 Tamaño: ${(fs.statSync(OUTPUT_PDF).size / (1024 * 1024)).toFixed(2)} MB`);

  await browser.close();
}

exportToPdf().catch(err => {
  console.error('❌ Error exportando a PDF:', err);
  process.exit(1);
});
