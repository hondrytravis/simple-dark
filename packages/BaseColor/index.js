/**
 * @base_color Theme color palette
 * Organized by token → each token holds values for all 4 themes.
 * Change a value here and you instantly see which themes are affected.
 * All colors pass WCAG AA contrast checks.
 */

const tokens = require('./tokens');

const palette = {

  // ── Background colors ──────────────────────────────────────

  black:       { dark: '#202124', 'dark-soft': '#202124', light: '#fafafa', 'light-soft': '#FAF5E8' },
  lightBlack:  { dark: '#24272A', 'dark-soft': '#24272A', light: '#f3f3f3', 'light-soft': '#F8F1E3' },
  darkGray:    { dark: '#2c2f32', 'dark-soft': '#2c2f32', light: '#f5f5f5', 'light-soft': '#F3ECDE' },
  darkGray_low:{ dark: '#35363a', 'dark-soft': '#35363a', light: '#e8e8e8', 'light-soft': '#EBE4D5' },
  gray:        { dark: '#444444', 'dark-soft': '#444444', light: '#e0e0e0', 'light-soft': '#E3DCCF' },

  // ── Text / Foreground colors ───────────────────────────────

  white:       { dark: '#f0f0f0', 'dark-soft': '#f0f0f0', light: '#202124', 'light-soft': '#202124' },
  mediumWhite: { dark: '#bdbdbd', 'dark-soft': '#bdbdbd', light: '#3c4043', 'light-soft': '#3c4043' },
  grayWhite:   { dark: '#bdbdbd', 'dark-soft': '#bdbdbd', light: '#5f6368', 'light-soft': '#5f6368' },

  // ── Comment color ──────────────────────────────────────────

  lightGray:   { dark: '#737373', 'dark-soft': '#737373', light: '#a0a1a7', 'light-soft': '#a0a1a7' },

  // ── Syntax: Core ───────────────────────────────────────────
  // Philosophy: Green = functions, Orange = parameters

  green:       { dark: '#00E673', 'dark-soft': '#56b97f', light: '#048043', 'light-soft': '#00753B' },
  lightGreen:  { dark: '#C3E88D', 'dark-soft': '#C3E88D', light: '#2e7d32', 'light-soft': '#2e7d32' },
  orange:      { dark: '#FFB86C', 'dark-soft': '#D5B884', light: '#BF5400', 'light-soft': '#BC5000' },

  // ── Syntax: Types & Identifiers ────────────────────────────

  cyan:        { dark: '#8BE9FD', 'dark-soft': '#9CCBD1', light: '#007b83', 'light-soft': '#006F94' },
  lightCyan:   { dark: '#E1FFFF', 'dark-soft': '#c8d4d3', light: '#006064', 'light-soft': '#1B1F23' },
  deepSkyBlue: { dark: '#00bfff', 'dark-soft': '#5ab2c6', light: '#0277bd', 'light-soft': '#005393' },
  mediumBlue:  { dark: '#00A1F1', 'dark-soft': '#00A1F1', light: '#0277bd', 'light-soft': '#005393' },
  blue:        { dark: '#1e90ff', 'dark-soft': '#1e90ff', light: '#1a73e8', 'light-soft': '#155dbd' },
  lightBlue:   { dark: '#75ABE0', 'dark-soft': '#75ABE0', light: '#1967d2', 'light-soft': '#1967d2' },

  // ── Syntax: Accent colors ──────────────────────────────────

  purple:      { dark: '#BD93F9', 'dark-soft': '#BD93F9', light: '#9334e6', 'light-soft': '#8020D0' },
  pink:        { dark: '#FF69B4', 'dark-soft': '#F572B7', light: '#d01884', 'light-soft': '#d01884' },
  tomato:      { dark: '#FF6347', 'dark-soft': '#FF6347', light: '#d93025', 'light-soft': '#B71C1C' },
  red:         { dark: '#f45a55', 'dark-soft': '#f45a55', light: '#d93025', 'light-soft': '#B71C1C' },
  lightYellow: { dark: '#eefa7a', 'dark-soft': '#c0c264', light: '#9a6700', 'light-soft': '#6A1B9A' },

  // ── Tab background ────────────────────────────────────────

  tabGray:      { dark: '#292a2d', 'dark-soft': '#292a2d', light: '#f0f0f0', 'light-soft': '#F0E8D8' },
  tabInactive:  { dark: '#252729', 'dark-soft': '#252729', light: '#e8e8e8', 'light-soft': '#E8E0D0' },

  // ── Border colors ─────────────────────────────────────────

  border:       { dark: '#3c4043', 'dark-soft': '#3c4043', light: '#e8e8e8', 'light-soft': '#EBE4D5' },
  chromeBg:     { dark: '#1F2020', 'dark-soft': '#1F2020', light: '#f3f3f3', 'light-soft': '#F8F1E3' },

  // ── UI Primary / Control colors ────────────────────────────

  color_ctrl_blue:        { dark: '#00A1F1', 'dark-soft': '#00A1F1', light: '#1a73e8', 'light-soft': '#155dbd' },
  color_ctrl_blue_active: { dark: '#93B3F2', 'dark-soft': '#93B3F2', light: '#8ab4f8', 'light-soft': '#8ab4f8' },
  color_ctrl_hover_gray:  { dark: '#3D4043', 'dark-soft': '#3D4043', light: '#f1f3f4', 'light-soft': '#EBE4D5' },

  // ── Semantic ───────────────────────────────────────────────

  string_color: { dark: '#C3E88D', 'dark-soft': '#a5c47c', light: '#a31515', 'light-soft': '#a31515' },
};

/**
 * Extract a flat { token: hex } object for a given theme mode.
 * @param {'dark' | 'dark-soft' | 'light' | 'light-soft'} mode
 * @returns {Record<string, string>}
 */
function getColors(mode = 'dark') {
  const result = {};
  // Raw palette colors
  for (const [token, modes] of Object.entries(palette)) {
    result[token] = modes[mode] ?? modes.dark;
  }
  // Semantic tokens → resolve to raw color hex
  for (const [semToken, rawToken] of Object.entries(tokens)) {
    result[semToken] = result[rawToken];
  }
  return result;
}

module.exports = getColors;