/**
 * @scope Invalid
 * stuff which is “invalid”.
 */

function getConfig(color) {
  return [
    {
      "name": "Invalid",
      "scope": [
        "invalid",
        "invalid.illegal"
      ],
      "settings": {
        "foreground": color['syntax.invalid']
      }
    },
    {
      "name": "Invalid: HTML[attribute-name]",
      "scope": [
        "invalid.deprecated.entity.other.attribute-name"
      ],
      "settings": {
        "foreground": color['syntax.attribute']
      }
    },
    {
      "name": "Invalid: Style[attribute-name]",
      "scope": [
        "invalid.deprecated.media"
      ],
      "settings": {
        "foreground": color['syntax.function']
      }
    }
  ]
}

module.exports = getConfig