/**
 * Build iTerm2 .itermcolors theme from BaseColor light-soft palette.
 * Mirrors scripts/build-itermcolors.js (dark-soft) slot-for-slot.
 * A few ANSI slots use terminal-adapted colors instead of raw palette
 * values — same precedent as build-zsh.js, whose light palette is
 * hand-tuned because raw VS Code light-soft values map poorly onto
 * ANSI semantics (lightYellow is purple and markup-only; black token
 * is the background, invisible as text).
 */

const fs = require('fs');
const path = require('path');
const getColors = require('../packages/BaseColor/index.js');

const c = getColors('light-soft');

// Terminal-only colors absent from BaseColor light-soft.
// amber/tomato sourced from the zsh light palette (build-zsh.js).
const term = {
  amber: '#9E6A03',
  brightAmber: '#B8860B',
  tomato: '#D84315',
};

function hexToFloat(hex) {
  return {
    r: parseInt(hex.slice(1, 3), 16) / 255,
    g: parseInt(hex.slice(3, 5), 16) / 255,
    b: parseInt(hex.slice(5, 7), 16) / 255,
  };
}

function colorXML(name, hex) {
  const { r, g, b } = hexToFloat(hex);
  return [
    `\t<key>${name}</key>`,
    `\t<dict>`,
    `\t\t<key>Alpha Component</key>`,
    `\t\t<real>1</real>`,
    `\t\t<key>Blue Component</key>`,
    `\t\t<real>${b}</real>`,
    `\t\t<key>Color Space</key>`,
    `\t\t<string>sRGB</string>`,
    `\t\t<key>Green Component</key>`,
    `\t\t<real>${g}</real>`,
    `\t\t<key>Red Component</key>`,
    `\t\t<real>${r}</real>`,
    `\t</dict>`,
  ].join('\n');
}

const palette = {
  // 0: light terminals keep "black" dark so black text stays visible
  "Ansi 0 Color": c.white,
  "Ansi 1 Color": c.red,
  "Ansi 2 Color": c.green,
  // 3: palette lightYellow (#6A1B9A) is purple, markup-only — yellow slot gets amber
  "Ansi 3 Color": term.amber,
  "Ansi 4 Color": c.deepSkyBlue,
  "Ansi 5 Color": c.pink,
  "Ansi 6 Color": c.cyan,
  // 7: mid gray, visible on light bg (GitHub Light convention)
  "Ansi 7 Color": c.grayWhite,
  "Ansi 8 Color": c.lightGray,
  // 9: palette tomato == red (#B71C1C) — distinct bright red per zsh light palette
  "Ansi 9 Color": term.tomato,
  "Ansi 10 Color": c.lightGreen,
  // 11: palette string_color (#a31515) is red — keep bright-yellow slot yellow
  "Ansi 11 Color": term.brightAmber,
  "Ansi 12 Color": c.lightBlue,
  "Ansi 13 Color": c.purple,
  "Ansi 14 Color": c.deepSkyBlue,    // bright cyan → deepSkyBlue (folder color), same as dark-soft
  // 15: bright white → background color (GitHub Light maps 15 to its bg too)
  "Ansi 15 Color": c.black,
  "Background Color": c.black,
  "Foreground Color": c.mediumWhite,
  "Bold Color": c.white,
  "Cursor Color": c.deepSkyBlue,
  "Cursor Text Color": c.black,
  // gray token = ui.bg.selection semantic in VS Code light-soft (darkGray is too close to bg here)
  "Selection Color": c.gray,
  "Selected Text Color": c.white,
  "Link Color": c.lightBlue,
  "Badge Color": c.deepSkyBlue,
  "Cursor Guide Color": c.border,
};

function build() {
  const header = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>`;

  const footer = `</dict>
</plist>`;

  const entries = Object.entries(palette).map(([k, v]) => colorXML(k, v));
  const xml = `${header}\n${entries.join('\n')}\n${footer}\n`;

  const out = path.join(__dirname, '../themes-iterm2/SimpleLightSoft.itermcolors');
  fs.writeFileSync(out, xml, 'utf8');
  console.log(`Created: ${out}`);
}

build();
