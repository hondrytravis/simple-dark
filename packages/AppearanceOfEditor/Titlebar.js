function getConfig(color) {
  return {
    // title bar
    "titleBar.activeBackground": color['ui.bg.titleBar'],
    "titleBar.inactiveBackground": color['ui.bg.sidebar'],
    "titleBar.border": color['ui.border'],
  }
}
module.exports = getConfig