function getConfig(color) {
  return {
    // top tab goup settings
    "editorGroupHeader.tabsBackground": color['ui.bg.sidebar'],

    "tab.activeBorder": color['ui.border.active'],
    "tab.activeBackground": color['ui.bg.editor'],
    "tab.inactiveBackground": color['ui.bg.input'],
  }
}
module.exports = getConfig