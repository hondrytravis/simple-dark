/**
 * Build iTerm2 .itermcolors theme from BaseColor dark-soft palette.
 * Generates XML plist format compatible with modern iTerm2.
 */

const fs = require('fs');
const path = require('path');
const getColors = require('../packages/BaseColor/index.js');

const c = getColors('dark-soft');

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
  "Ansi 0 Color": c.black,
  "Ansi 1 Color": c.red,
  "Ansi 2 Color": c.green,
  "Ansi 3 Color": c.lightYellow,
  "Ansi 4 Color": c.deepSkyBlue,
  "Ansi 5 Color": c.pink,
  "Ansi 6 Color": c.cyan,
  "Ansi 7 Color": c.mediumWhite,
  "Ansi 8 Color": c.lightGray,
  "Ansi 9 Color": c.tomato,
  "Ansi 10 Color": c.lightGreen,
  "Ansi 11 Color": c.string_color,
  "Ansi 12 Color": c.lightBlue,
  "Ansi 13 Color": c.purple,
  "Ansi 14 Color": c.deepSkyBlue,    // bright cyan → deepSkyBlue (folder color)
  "Ansi 15 Color": c.white,
  "Background Color": c.black,
  "Foreground Color": c.mediumWhite,
  "Bold Color": c.white,
  "Cursor Color": c.deepSkyBlue,
  "Cursor Text Color": c.black,
  "Selection Color": c.darkGray,
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
  const xml = header + '\n' + entries.join('\n') + '\n' + footer + '\n';

  const out = path.join(__dirname, '../themes-iterm2/SimpleDarkSoft.itermcolors');
  fs.writeFileSync(out, xml, 'utf8');
  console.log(`Created: ${out}`);
}

build();
