import re

with open('/Users/laura_morillo/.gemini/antigravity/scratch/insert-coin-play-gcp/slides.js', 'r') as f:
    content = f.read()

# Replace SF6
content = content.replace(
    '<div class="hero-art">🥋<br>VS<br>🥊</div>',
    '<div class="hero-art"><img src="images/sf6.jpg" style="max-width: 90%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);"></div>'
)

# Replace Fruit Ninja
content = content.replace(
    '<div class="hero-art">🍉<br>🍊<br>🍋<br>⚔️</div>',
    '<div class="hero-art"><img src="images/fruitninja.jpg" style="max-width: 280px; border-radius: 22%; box-shadow: 0 10px 30px rgba(0,0,0,0.5);"></div>'
)

# Replace Pokemon GO
content = content.replace(
    '<div class="hero-art">⚡<br>🔴<br>⚪</div>',
    '<div class="hero-art"><img src="images/pokemongo.jpg" style="max-width: 280px; border-radius: 22%; box-shadow: 0 10px 30px rgba(0,0,0,0.5);"></div>'
)

# Replace Halloween Doodle
content = content.replace(
    '<div class="hero-art">🎃<br>👻<br>🕷️</div>',
    '<div class="hero-art"><img src="images/halloween.gif" style="max-width: 100%; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.5);"></div>'
)

# Replace R6 Mobile
content = content.replace(
    '<div class="hero-art">🔫<br>🛡️<br>💥</div>',
    '<div class="hero-art"><img src="images/r6mobile.jpg" style="max-width: 280px; border-radius: 22%; box-shadow: 0 10px 30px rgba(0,0,0,0.5);"></div>'
)

# Replace Overdrive City
content = content.replace(
    '<div class="hero-art">🏎️<br>🏁<br>🏙️</div>',
    '<div class="hero-art"><img src="images/gameloft.jpg" style="max-width: 280px; border-radius: 22%; box-shadow: 0 10px 30px rgba(0,0,0,0.5);"></div>'
)

with open('/Users/laura_morillo/.gemini/antigravity/scratch/insert-coin-play-gcp/slides.js', 'w') as f:
    f.write(content)

print("Images inserted in slides.js")
