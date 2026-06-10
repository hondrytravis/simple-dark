function getConfig(color) {
  return {
    // active bar
    "activityBar.background": color['ui.bg.input'],
    "activityBar.foreground": color['ui.fg.primary'],
    "activityBar.border": color['ui.border'],
    "activityBarBadge.background": color['ui.border.active'],
  }
}

module.exports = getConfig