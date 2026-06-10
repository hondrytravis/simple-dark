function getConfig(color) {
  return {
    // Tab strip — Dark Modern style
    "editorGroupHeader.tabsBackground": color['ui.bg.tab'],
    // Visible bottom border under the tab strip
    "editorGroupHeader.tabsBorder": color['ui.border'],
    // Remove breadcrumb bottom border
    "editorGroupHeader.border": color['ui.bg.editor'],

    // Active tab: top accent + same bg as editor
    "tab.activeBorderTop": color['ui.border.active'],
    "tab.activeBorder": color['ui.bg.editor'],
    "tab.activeBackground": color['ui.bg.editor'],
    // Inactive tab: same bg as tab strip (Dark Modern style)
    "tab.inactiveBackground": color['ui.bg.tab'],
    "tab.border": color['ui.border'],

    // Editor group border
    "editorGroup.border": color['ui.border'],
  }
}
module.exports = getConfig