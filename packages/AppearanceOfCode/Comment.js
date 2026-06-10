/**
 * @scope Comment
 * Single and multi-line comments
 * you can be changed to you love the color
 */
function getConfig(color) {
  return [
    {
      name: "Comment",
      scope: [
        "comment",
        "punctuation.definition.comment"
      ],
      settings: {
        "foreground": color['syntax.comment']
      }
    }
  ]
}

module.exports = getConfig

