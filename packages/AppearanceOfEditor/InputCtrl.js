function getConfig(color) {
  return {
    // input control
    "input.background": color['ui.bg.input'],
    "input.border": color['ui.border'],
    "agentsChatInput.border": color['ui.border'],
  }
}
module.exports = getConfig