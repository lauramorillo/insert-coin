const fs = require('fs');

// 1. Update style.css
let css = fs.readFileSync('style.css', 'utf8');

const cssMap = {
  'font-size: 22px;': 'font-size: 24px;',
  '#slide-counter {\n  position: fixed;\n  top: 18px;\n  right: 28px;\n  z-index: 9999;\n  font-family: var(--font-mono);\n  font-size: 16px;': '#slide-counter {\n  position: fixed;\n  top: 18px;\n  right: 28px;\n  z-index: 9999;\n  font-family: var(--font-mono);\n  font-size: 18px;',
  '#key-hint {\n  position: fixed;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 9999;\n  font-family: var(--font-mono);\n  font-size: 14px;': '#key-hint {\n  position: fixed;\n  bottom: 18px;\n  left: 50%;\n  transform: translateX(-50%);\n  z-index: 9999;\n  font-family: var(--font-mono);\n  font-size: 16px;',
  '.corner-deco {\n  position: absolute;\n  font-family: var(--font-pixel);\n  font-size: 13px;': '.corner-deco {\n  position: absolute;\n  font-family: var(--font-pixel);\n  font-size: 15px;',
  '.agenda-sub {\n  font-size: 22px;': '.agenda-sub {\n  font-size: 24px;',
  '.agenda-card .num-badge {\n  display: inline-block;\n  font-family: var(--font-pixel);\n  font-size: 14px;': '.agenda-card .num-badge {\n  display: inline-block;\n  font-family: var(--font-pixel);\n  font-size: 16px;',
  '.agenda-card .game-name {\n  font-family: var(--font-pixel);\n  font-size: 15px;': '.agenda-card .game-name {\n  font-family: var(--font-pixel);\n  font-size: 18px;',
  '.agenda-card .game-q {\n  font-size: 19px;': '.agenda-card .game-q {\n  font-size: 21px;',
  '.agenda-card .game-tech {\n  font-family: var(--font-mono);\n  font-size: 15px;': '.agenda-card .game-tech {\n  font-family: var(--font-mono);\n  font-size: 17px;',
  '.world-badge {\n  font-family: var(--font-pixel);\n  font-size: 15px;': '.world-badge {\n  font-family: var(--font-pixel);\n  font-size: 17px;',
  '.hero-world-num {\n  font-family: var(--font-pixel);\n  font-size: 15px;': '.hero-world-num {\n  font-family: var(--font-pixel);\n  font-size: 17px;',
  '.hero-dev {\n  font-family: var(--font-mono);\n  font-size: 20px;': '.hero-dev {\n  font-family: var(--font-mono);\n  font-size: 22px;',
  '.hero-question {\n  font-size: 23px;': '.hero-question {\n  font-size: 26px;',
  '.slide-tag {\n  font-family: var(--font-pixel);\n  font-size: 14px;': '.slide-tag {\n  font-family: var(--font-pixel);\n  font-size: 16px;',
  '.slide-subtitle {\n  font-family: var(--font-pixel);\n  font-size: 18px;': '.slide-subtitle {\n  font-family: var(--font-pixel);\n  font-size: 20px;',
  '.profile-tag-p1 {\n  font-family: var(--font-pixel);\n  font-size: 13px;': '.profile-tag-p1 {\n  font-family: var(--font-pixel);\n  font-size: 16px;',
  '.profile-badge-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  font-size: 21px;': '.profile-badge-item {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  font-size: 24px;',
  '.profile-badge-icon {\n  font-size: 24px;': '.profile-badge-icon {\n  font-size: 28px;',
  '.profile-qr-box .qr-label {\n  font-size: 13px;': '.profile-qr-box .qr-label {\n  font-size: 16px;',
  '.card-label {\n  font-family: var(--font-pixel);\n  font-size: 14px;': '.card-label {\n  font-family: var(--font-pixel);\n  font-size: 16px;',
  '.card-body {\n  font-size: 21px;': '.card-body {\n  font-size: 24px;',
  '.apply-box {\n  border: 2px solid;\n  border-radius: 12px;\n  padding: 20px 26px;\n  font-size: 20px;': '.apply-box {\n  border: 2px solid;\n  border-radius: 12px;\n  padding: 22px 28px;\n  font-size: 23px;',
  '.apply-label {\n  font-family: var(--font-pixel);\n  font-size: 14px;': '.apply-label {\n  font-family: var(--font-pixel);\n  font-size: 16px;',
  '.mini-note {\n  background: rgba(0, 240, 255, 0.08);\n  border-left: 5px solid var(--cyan);\n  padding: 16px 20px;\n  font-size: 20px;': '.mini-note {\n  background: rgba(0, 240, 255, 0.08);\n  border-left: 5px solid var(--cyan);\n  padding: 16px 20px;\n  font-size: 23px;',
  '.feature-list li {\n  font-size: 21px;': '.feature-list li {\n  font-size: 24px;',
  '.feature-list li::before {\n  content: \'▶\';\n  position: absolute;\n  left: 0;\n  color: var(--cyan);\n  font-size: 16px;': '.feature-list li::before {\n  content: \'▶\';\n  position: absolute;\n  left: 0;\n  color: var(--cyan);\n  font-size: 18px;',
  '.k8s-cp-tag {\n  font-family: var(--font-pixel);\n  font-size: 15px;': '.k8s-cp-tag {\n  font-family: var(--font-pixel);\n  font-size: 17px;',
  '.k8s-badge {\n  font-family: var(--font-mono);\n  font-size: 16px;': '.k8s-badge {\n  font-family: var(--font-mono);\n  font-size: 18px;',
  '.k8s-node-header {\n  font-family: var(--font-pixel);\n  font-size: 13px;': '.k8s-node-header {\n  font-family: var(--font-pixel);\n  font-size: 15px;',
  '.k8s-pod-box {\n  background: rgba(57, 255, 20, 0.12);\n  border: 2px solid var(--green);\n  border-radius: 8px;\n  padding: 10px 8px;\n  text-align: center;\n  font-family: var(--font-pixel);\n  font-size: 13px;': '.k8s-pod-box {\n  background: rgba(57, 255, 20, 0.12);\n  border: 2px solid var(--green);\n  border-radius: 8px;\n  padding: 10px 8px;\n  text-align: center;\n  font-family: var(--font-pixel);\n  font-size: 15px;',
  '.region-name { font-family: var(--font-pixel); font-size: 13px; color: var(--yellow); }': '.region-name { font-family: var(--font-pixel); font-size: 16px; color: var(--yellow); }',
  '.region-status { font-family: var(--font-mono); font-size: 15px; color: var(--green); }': '.region-status { font-family: var(--font-mono); font-size: 18px; color: var(--green); }',
  '.sync-beam {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  color: var(--cyan);\n  font-family: var(--font-pixel);\n  font-size: 12px;': '.sync-beam {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  color: var(--cyan);\n  font-family: var(--font-pixel);\n  font-size: 14px;',
  '.speed-badge {\n  font-family: var(--font-pixel);\n  font-size: 14px;': '.speed-badge {\n  font-family: var(--font-pixel);\n  font-size: 16px;',
  '.speed-val {\n  font-family: var(--font-mono);\n  font-size: 28px;': '.speed-val {\n  font-family: var(--font-mono);\n  font-size: 32px;',
  '.client-pill {\n  font-family: var(--font-pixel);\n  font-size: 14px;': '.client-pill {\n  font-family: var(--font-pixel);\n  font-size: 16px;',
  '.flywheel-title { font-family: var(--font-pixel); font-size: 14px; margin-bottom: 4px; }': '.flywheel-title { font-family: var(--font-pixel); font-size: 16px; margin-bottom: 4px; }',
  '.flywheel-desc { font-size: 17px; color: var(--dim); }': '.flywheel-desc { font-size: 20px; color: var(--dim); }',
  '.player-ticket {\n  font-family: var(--font-mono);\n  font-size: 16px;': '.player-ticket {\n  font-family: var(--font-mono);\n  font-size: 18px;',
  '.match-engine-core {\n  background: rgba(0, 240, 255, 0.1);\n  border: 2px solid var(--cyan);\n  border-radius: 12px;\n  padding: 20px 24px;\n  text-align: center;\n  font-family: var(--font-pixel);\n  font-size: 14px;': '.match-engine-core {\n  background: rgba(0, 240, 255, 0.1);\n  border: 2px solid var(--cyan);\n  border-radius: 12px;\n  padding: 20px 24px;\n  text-align: center;\n  font-family: var(--font-pixel);\n  font-size: 16px;',
  '.match-result-room {\n  background: rgba(255, 215, 0, 0.1);\n  border: 2px solid var(--yellow);\n  border-radius: 12px;\n  padding: 20px 24px;\n  text-align: center;\n  font-family: var(--font-pixel);\n  font-size: 14px;': '.match-result-room {\n  background: rgba(255, 215, 0, 0.1);\n  border: 2px solid var(--yellow);\n  border-radius: 12px;\n  padding: 20px 24px;\n  text-align: center;\n  font-family: var(--font-pixel);\n  font-size: 16px;',
  '.server-node-card {\n  border: 2px solid;\n  border-radius: 10px;\n  padding: 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-family: var(--font-pixel);\n  font-size: 13px;': '.server-node-card {\n  border: 2px solid;\n  border-radius: 10px;\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  font-family: var(--font-pixel);\n  font-size: 15px;',
  '.tech-tile-name {\n  font-family: var(--font-pixel);\n  font-size: 13px;': '.tech-tile-name {\n  font-family: var(--font-pixel);\n  font-size: 16px;',
  '.tech-tile-q {\n  font-size: 16px;': '.tech-tile-q {\n  font-size: 18px;',
  '.galaxy-center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: var(--surface);\n  border: 3px solid var(--cyan);\n  border-radius: 50%;\n  width: 140px;\n  height: 140px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-family: var(--font-pixel);\n  font-size: 15px;': '.galaxy-center {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: var(--surface);\n  border: 3px solid var(--cyan);\n  border-radius: 50%;\n  width: 150px;\n  height: 150px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  font-family: var(--font-pixel);\n  font-size: 17px;',
  '.galaxy-planet {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  font-family: var(--font-pixel);\n  font-size: 11px;': '.galaxy-planet {\n  position: absolute;\n  transform: translate(-50%, -50%);\n  font-family: var(--font-pixel);\n  font-size: 14px;\n  font-weight: 700;',
  '.pill {\n  font-family: var(--font-pixel);\n  font-size: 14px;\n  padding: 10px 22px;': '.pill {\n  font-family: var(--font-pixel);\n  font-size: 16px;\n  padding: 12px 24px;',
  '.dialog-speaker {\n  font-family: var(--font-pixel);\n  font-size: 14px;': '.dialog-speaker {\n  font-family: var(--font-pixel);\n  font-size: 16px;',
  '.dialog-text {\n  font-size: 22px;': '.dialog-text {\n  font-size: 24px;',
  '.meme-footer {\n  font-family: var(--font-pixel);\n  font-size: 16px;': '.meme-footer {\n  font-family: var(--font-pixel);\n  font-size: 18px;',
  '.ref-title {\n  font-family: var(--font-pixel);\n  font-size: 14px;': '.ref-title {\n  font-family: var(--font-pixel);\n  font-size: 16px;',
  '.ref-group a {\n  font-family: var(--font-mono);\n  font-size: 15px;': '.ref-group a {\n  font-family: var(--font-mono);\n  font-size: 18px;'
};

for (const [k, v] of Object.entries(cssMap)) {
  css = css.replace(k, v);
}
fs.writeFileSync('style.css', css, 'utf8');
console.log('style.css typography upgraded successfully!');

// 2. Upgrade inline font-sizes in slides.js
let js = fs.readFileSync('slides.js', 'utf8');

const jsInlineMap = [
  [/font-size:12px/g, 'font-size:15px'],
  [/font-size:13px/g, 'font-size:15px'],
  [/font-size:14px/g, 'font-size:16px'],
  [/font-size:15px/g, 'font-size:18px'],
  [/font-size:16px/g, 'font-size:18px'],
  [/font-size:17px/g, 'font-size:20px'],
  [/font-size:18px/g, 'font-size:21px'],
  [/font-size:19px/g, 'font-size:22px'],
  [/font-size:20px/g, 'font-size:23px']
];

for (const [rgx, rep] of jsInlineMap) {
  js = js.replace(rgx, rep);
}
fs.writeFileSync('slides.js', js, 'utf8');
console.log('slides.js inline font-sizes upgraded successfully!');
