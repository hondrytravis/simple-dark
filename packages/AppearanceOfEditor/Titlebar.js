function getConfig(color) {
  return {
    // active bar
    "titleBar.activeBackground": color['ui.bg.titleBar'],
    "titleBar.inactiveBackground": color['ui.bg.sidebar'],
  }
}
module.exports = getConfig