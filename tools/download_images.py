import urllib.request
import json
import os
import ssl
import re

os.makedirs('/Users/laura_morillo/.gemini/antigravity/scratch/insert-coin-play-gcp/images', exist_ok=True)
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def get_image(query, filename):
    try:
        url = f"https://duckduckgo.com/html/?q={urllib.parse.quote(query)}"
        req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
        with urllib.request.urlopen(req, context=ctx) as response:
            html = response.read().decode('utf-8')
            # Look for vqd
            vqd_match = re.search(r'vqd=([\d-]+)', html)
            if not vqd_match:
                return False
            vqd = vqd_match.group(1)
            
            search_url = f"https://duckduckgo.com/i.js?q={urllib.parse.quote(query)}&vqd={vqd}"
            req2 = urllib.request.Request(search_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req2, context=ctx) as response2:
                data = json.loads(response2.read().decode())
                if 'results' in data and len(data['results']) > 0:
                    img_url = data['results'][0]['image']
                    print(f"Found {img_url} for {query}")
                    img_req = urllib.request.Request(img_url, headers={'User-Agent': 'Mozilla/5.0'})
                    with urllib.request.urlopen(img_req, context=ctx) as img_resp:
                        with open(f"/Users/laura_morillo/.gemini/antigravity/scratch/insert-coin-play-gcp/images/{filename}", 'wb') as f:
                            f.write(img_resp.read())
                    return True
    except Exception as e:
        print(f"Failed {query}: {e}")
    return False

get_image("Street Fighter 6 cover art jpg", "sf6.jpg")
get_image("Fruit Ninja game screenshot jpg", "fruitninja.jpg")
get_image("Pokemon Go gameplay screenshot", "pokemongo.jpg")
get_image("Rainbow Six Mobile screenshot", "r6mobile.jpg")
get_image("Great Ghoul Duel gameplay", "halloween.jpg")
get_image("Overdrive City gameloft screenshot", "gameloft.jpg")

print("Done")
