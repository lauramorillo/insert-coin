import asyncio
import sys
import pyautogui
from bleak import BleakScanner, BleakClient

pyautogui.PAUSE = 0.02

last_top_button = False
last_stick_button = False

def handle_input(sender, data: bytearray):
    global last_top_button, last_stick_button
    raw = list(data)

    if len(raw) >= 2:
        btn_byte = raw[1]

        top_pressed = bool(btn_byte & 0x01)      # Botón rojo superior
        stick_pressed = bool(btn_byte & 0x02)    # Click del joystick

        # Siguiente diapositiva (Right)
        if top_pressed and not last_top_button:
            print(">> Siguiente diapositiva (Right)")
            pyautogui.press("right")

        # Diapositiva anterior (Left)
        if stick_pressed and not last_stick_button:
            print("<< Diapositiva anterior (Left)")
            pyautogui.press("left")

        last_top_button = top_pressed
        last_stick_button = stick_pressed

async def main():
    print("Buscando Poké Ball Plus...")
    device = await BleakScanner.find_device_by_filter(
        lambda d, adv: d.name and any(x in d.name.lower() for x in ["pokemon", "pbp", "pokeball"])
    )

    if not device:
        print("No se encontró la Poké Ball Plus. Pulsa el botón superior para ponerla en modo búsqueda.")
        return

    print(f"Conectando a {device.name}...")
    async with BleakClient(device) as client:
        print("¡Conectada!")

        target_char = None
        for service in client.services:
            for char in service.characteristics:
                if "notify" in char.properties:
                    target_char = char
                    break
            if target_char:
                break

        if not target_char:
            print("No se encontró la característica de notificación.")
            return

        await client.start_notify(target_char.uuid, handle_input)
        print("Listo. Haz clic en la ventana del navegador con las slides y pulsa los botones.")
        print("Pulsa Ctrl + C en cualquier momento para salir.\n")

        try:
            while client.is_connected:
                await asyncio.sleep(1)
        except asyncio.CancelledError:
            pass
        finally:
            try:
                await client.stop_notify(target_char.uuid)
            except Exception:
                pass
            print("\nDesconectando Poké Ball Plus...")

if __name__ == "__main__":
    try:
        asyncio.run(main())
    except KeyboardInterrupt:
        print("Desconectado y cerrado correctamente.")
        sys.exit(0)