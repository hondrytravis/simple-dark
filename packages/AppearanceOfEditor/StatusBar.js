function getConfig(color) {
  return {
    // status bgcolor
    "statusBar.background": color['ui.bg.statusBar'],
    "statusBar.foreground": color['ui.fg.primary'],
    "statusBar.noFolderBackground": color['ui.bg.statusBar'],
  }
}
module.exports = getConfig