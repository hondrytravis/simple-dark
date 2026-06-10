/**
 * @scope Constant
 * Numeric literals, including integers, floats, etc.
 * you can be changed to you love the color
 */

function getConfig(color) {
  return [
    {
      "name": "Constant",
      "scope": [
        "constant",
        "constant.numeric"
      ],
      "settings": {
        "foreground": color['syntax.constant']
      }
    },
  ]
}

module.exports = getConfig


