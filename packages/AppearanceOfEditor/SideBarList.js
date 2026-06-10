function getConfig(color) {
  return {
    "sideBar.background": color['ui.bg.sidebar'],
    "sideBar.border": color['ui.border'],
    "sideBarTitle.foreground": color['ui.fg.primary'],

    "sideBarSectionHeader.background": color['ui.bg.input'],
    "list.errorForeground": color['list.error'],
    "list.warningForeground": color['list.warning'],

    "list.activeSelectionBackground": color['ui.selection.active'],
    "list.activeSelectionForeground": color['ui.fg.primary'],
    "list.inactiveSelectionBackground": color['ui.selection.active'],
    "list.hoverBackground": color['ui.hover'],
    "list.focusAndSelectionOutline": color['ui.border.active'],
  }
}

module.exports = getConfig