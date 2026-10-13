const puppeteer = require('puppeteer-core');
const pptxgen = require('pptxgenjs');
const fs = require('fs');
const path = require('path');

const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const HTML_PATH = 'file://' + path.resolve(__dirname, '..', 'index.html');
const OUTPUT_PPTX = path.resolve(__dirname, '..', 'insert_coin_presentation.pptx');

const VIEWPORT_WIDTH = 1512;
const VIEWPORT_HEIGHT = 850;
const SLIDE_WIDTH_INCHES = 10;
const SLIDE_HEIGHT_INCHES = 5.625;

async function exportToPptx() {
  console.log('🚀 Iniciando exportación de la presentación a PowerPoint (PPTX)...');
  
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
      deviceScaleFactor: 2.5 // Alta resolución para diapositivas nítidas
    }
  });

  const page = await browser.newPage();
  await page.goto(HTML_PATH, { waitUntil: 'networkidle0' });

  // Inyectar CSS estricto para ocultar controles de navegación y transiciones en la captura
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

  console.log(`📊 Generando ${totalSlides} diapositivas 16:9 en PPTX...`);

  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.title = 'Insert Coin - Play Google Cloud';
  pptx.author = 'Laura Morillo';
  pptx.company = 'Google Cloud';

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

    // Extraer enlaces interactivos si los hay
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

    // Capturar screenshot base64
    const screenshotBase64 = await page.screenshot({
      type: 'png',
      encoding: 'base64',
      fullPage: false
    });

    const pptxSlide = pptx.addSlide();
    pptxSlide.background = { color: '0B0C1C' };
    
    // Añadir imagen en pantalla completa
    pptxSlide.addImage({
      data: `data:image/png;base64,${screenshotBase64}`,
      x: 0,
      y: 0,
      w: SLIDE_WIDTH_INCHES,
      h: SLIDE_HEIGHT_INCHES
    });

    // Añadir hipervínculos interactivos encima de los enlaces
    if (links && links.length > 0) {
      const scaleX = SLIDE_WIDTH_INCHES / VIEWPORT_WIDTH;
      const scaleY = SLIDE_HEIGHT_INCHES / VIEWPORT_HEIGHT;

      for (const link of links) {
        pptxSlide.addShape(pptx.ShapeType.rect, {
          x: link.x * scaleX,
          y: link.y * scaleY,
          w: link.width * scaleX,
          h: link.height * scaleY,
          fill: { color: 'FFFFFF', transparency: 100 },
          line: { color: 'FFFFFF', transparency: 100 },
          hyperlink: { url: link.href, tooltip: link.href }
        });
      }
      process.stdout.write(`[🔗 ${links.length} enlaces activos] `);
    }

    console.log('✓');
  }

  console.log(`\n💾 Guardando archivo PowerPoint...`);
  await pptx.writeFile({ fileName: OUTPUT_PPTX });

  console.log(`🎉 Presentación PPTX generada con éxito en:`);
  console.log(`📁 ${OUTPUT_PPTX}`);
  console.log(`📦 Tamaño: ${(fs.statSync(OUTPUT_PPTX).size / (1024 * 1024)).toFixed(2)} MB`);

  await browser.close();
}

exportToPptx().catch(err => {
  console.error('❌ Error exportando a PPTX:', err);
  process.exit(1);
});
