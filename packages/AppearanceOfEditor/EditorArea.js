function getConfig(color) {
  return {
    // code main
    "editor.background": color['ui.bg.editor'],
    "editor.foreground": color['ui.fg.secondary'],

    // editor group borders
    "editorGroup.border": color['ui.border'],

    // find Match string attr
    "editor.findMatchHighlightBackground": color['ui.bg.selection'],

    // mouse hover color
    "editor.hoverHighlightBackground": color['ui.bg.selection'],

    // editor selected attr
    "editor.selectionBackground": color['ui.bg.selection'],
    "editor.selectionForeground": color['ui.fg.primary'],
    "editor.selectionHighlightBackground": color['ui.bg.selection'],
    "editor.wordHighlightBackground": color['ui.bg.selection'],
    "editor.wordHighlightStrongBackground": color['ui.bg.selection'],

    // bugs
    "editorWarning.foreground": color['ui.accent.warning'],
    "editorInfo.foreground": color['ui.accent.info'],
  }
}

module.exports = getConfig