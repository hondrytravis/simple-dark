/**
 * Build iTerm2 color theme from BaseColor dark-soft palette.
 * Reads themes-iterm2/SimpleDarkSoft.json as a template and replaces
 * color fields while preserving all other settings.
 */

const fs = require('fs');
const path = require('path');
const getColors = require('../packages/BaseColor/index.js');

const SRC = path.join(__dirname, '../themes-iterm2/SimpleDarkSoft.json');

const c = getColors('dark-soft');

// sRGB hex -> iTerm2 component object
function comp(hex, space = 'sRGB') {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;
  return {
    'Red Component': r,
    'Green Component': g,
    'Blue Component': b,
    'Alpha Component': 1,
    'Color Space': space,
  };
}

// Dark-soft palette mapping for iTerm2
const palette = {
  ansi: [
    c.black,        // 0 black
    c.red,          // 1 red
    c.green,        // 2 green
    c.lightYellow,  // 3 yellow
    c.deepSkyBlue,  // 4 blue
    c.pink,         // 5 magenta
    c.cyan,         // 6 cyan
    c.mediumWhite,  // 7 white
    c.lightGray,    // 8 bright black
    c.tomato,       // 9 bright red
    c.lightGreen,   // 10 bright green
    c.string_color, // 11 bright yellow
    c.lightBlue,    // 12 bright blue
    c.purple,       // 13 bright magenta
    c.lightCyan,    // 14 bright cyan
    c.white,        // 15 bright white
  ],
  bg: c.black,
  fg: c.mediumWhite,
  bold: c.white,
  cursor: c.deepSkyBlue,
  cursorText: c.black,
  selection: c.darkGray,
  selectedText: c.white,
  link: c.lightBlue,
  badge: c.deepSkyBlue,
  cursorGuide: c.border,
  tab: c.lightBlack,
};

function applyColors(theme) {
  // ANSI 0-7 and 8-15
  palette.ansi.forEach((hex, i) => {
    theme[`Ansi ${i} Color`] = comp(hex);
    theme[`Ansi ${i} Color (Dark)`] = comp(hex);
    theme[`Ansi ${i} Color (Light)`] = comp(hex);
  });

  const ui = {
    'Background Color': palette.bg,
    'Foreground Color': palette.fg,
    'Bold Color': palette.bold,
    'Cursor Color': palette.cursor,
    'Cursor Text Color': palette.cursorText,
    'Selection Color': palette.selection,
    'Selected Text Color': palette.selectedText,
    'Link Color': palette.link,
    'Badge Color': palette.badge,
    'Cursor Guide Color': palette.cursorGuide,
    'Tab Color': palette.tab,
  };

  for (const [key, hex] of Object.entries(ui)) {
    theme[`${key}`] = comp(hex);
    theme[`${key} (Dark)`] = comp(hex);
    theme[`${key} (Light)`] = comp(hex);
  }

  return theme;
}

function main() {
  const raw = fs.readFileSync(SRC, 'utf8');
  const theme = JSON.parse(raw);
  const updated = applyColors(theme);
  fs.writeFileSync(SRC, JSON.stringify(updated, null, 2) + '\n', 'utf8');
  console.log(`Updated ${SRC} with dark-soft palette.`);
}

main();
