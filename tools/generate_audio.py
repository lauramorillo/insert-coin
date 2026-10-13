import asyncio
import os
import re
import edge_tts

GUION_PATH = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'guion_charla.md'))
OUTPUT_AUDIO = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'insert_coin_guion_audio.mp3'))
AUDIO_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', 'audio'))

# Voz neuronal de alta fidelidad en español de España
VOICE = "es-ES-ElviraNeural"

def parse_guion(file_path):
    """
    Lee guion_charla.md y extrae el texto hablado limpio por diapositiva.
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        lines = f.readlines()
    
    spoken_sections = []
    current_title = ""
    current_text = []
    
    in_header = True
    
    for line in lines:
        stripped = line.strip()
        
        # Ignorar encabezado introductorio del documento
        if in_header:
            if stripped.startswith("## 01. COVER") or stripped.startswith("## 1. COVER"):
                in_header = False
            else:
                continue
                
        # Detectar títulos de sección / diapositivas
        if stripped.startswith("## ") or stripped.startswith("### "):
            if current_text:
                full_text = " ".join(current_text).strip()
                if full_text:
                    spoken_sections.append((current_title, full_text))
                current_text = []
            
            # Limpiar nombre del título
            raw_title = re.sub(r'^[#\s\d\.]+', '', stripped).strip()
            raw_title = re.sub(r'\([^\)]*\)', '', raw_title).strip()
            current_title = raw_title
            continue
            
        # Omitir acotaciones de diapositiva entre corchetes **[...]**
        if re.match(r'^\*\*\[.*\]\*\*$', stripped):
            continue
            
        # Omitir separadores
        if stripped == "---" or not stripped:
            continue
            
        # Limpiar texto
        cleaned = stripped
        # Eliminar comillas iniciales/finales de discurso
        cleaned = re.sub(r'^["“”]+|["“”]+$', '', cleaned)
        # Eliminar indicaciones entre paréntesis en cursiva _(...)_ o *(...)*
        cleaned = re.sub(r'[\*_]\([^)]*\)[\*_]', '', cleaned)
        # Eliminar viñetas de markdown (- **GKE**: -> GKE:)
        cleaned = re.sub(r'^-\s+\*\*([^*]+)\*\*:\s*', r'\1: ', cleaned)
        cleaned = re.sub(r'^\d+\.\s+\*\*([^*]+)\*\*:\s*', r'\1: ', cleaned)
        # Eliminar marcas de negrita/cursiva restantes
        cleaned = cleaned.replace('**', '').replace('*', '').replace('_', '')
        
        cleaned = cleaned.strip()
        if cleaned:
            current_text.append(cleaned)
            
    if current_text:
        full_text = " ".join(current_text).strip()
        if full_text:
            spoken_sections.append((current_title, full_text))
            
    return spoken_sections

async def generate_audio():
    print(f"📖 Leyendo y limpiando guion desde: {GUION_PATH}", flush=True)
    sections = parse_guion(GUION_PATH)
    
    os.makedirs(AUDIO_DIR, exist_ok=True)
    
    full_speech_paragraphs = []
    print(f"🎙️ Voz neuronal seleccionada: {VOICE}", flush=True)
    print(f"📑 Secciones detectadas: {len(sections)} diapositivas", flush=True)
    
    for idx, (title, text) in enumerate(sections, 1):
        full_speech_paragraphs.append(text)
        
    full_text_to_speak = "\n\n".join(full_speech_paragraphs)
    
    print(f"🔊 Generando archivo de audio completo: {OUTPUT_AUDIO}", flush=True)
    print("⏳ Procesando síntesis neuronal de toda la charla...", flush=True)
    
    communicate = edge_tts.Communicate(full_text_to_speak, VOICE, rate="+2%", pitch="+0Hz")
    await communicate.save(OUTPUT_AUDIO)
    
    size_mb = os.path.getsize(OUTPUT_AUDIO) / (1024 * 1024)
    print(f"\n🎉 ¡Audio completo generado con éxito!", flush=True)
    print(f"📁 Archivo: {OUTPUT_AUDIO}", flush=True)
    print(f"📦 Tamaño: {size_mb:.2f} MB", flush=True)
    print(f"🎧 Reproducir en terminal: afplay \"{OUTPUT_AUDIO}\"", flush=True)

if __name__ == "__main__":
    asyncio.run(generate_audio())
