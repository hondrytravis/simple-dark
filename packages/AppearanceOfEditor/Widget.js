function getConfig(color) {
  return {
    // find/replace
    "editorWidget.background": color['ui.bg.widget'],
    "editorWidget.border": color['ui.border'],
    "editor.findWidgetBorder": color['ui.border'],
    "widget.border": color['ui.border'],
  }
}

module.exports = getConfig