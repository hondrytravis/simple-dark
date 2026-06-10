function getConfig(color) {
  return {
    // panel
    "panel.border": color['ui.border'],
    "panelTitle.activeBorder": color['ui.border.active']
  }
}

module.exports = getConfig