/**
 * @scope Variables
 * code Variables style in this file
 * you can be changed to you love the color
 */

function getConfig(color) {
  return [
    {
      "name": "Variables",
      "scope": [
        "variable",
      ],
      "settings": {
        "foreground": color['syntax.variable']
      }
    },
    {
      "name": "Variables this ...",
      "scope": [
        "variable.language",
      ],
      "settings": {
        "foreground": color['syntax.constant']
      }
    },
    {
      "name": "Variables parameter ...",
      "scope": [
        "variable.parameter",
      ],
      "settings": {
        "foreground": color['syntax.parameter']
      }
    },
    {
      "name": "Variables constant ...",
      "scope": [
        "variable.other.constant",
      ],
      "settings": {
        "foreground": color['syntax.variableConstant']
      }
    },
    {
      "name": "Variables Less Sass ...",
      "scope": [
        "variable.scss",
        "variable.other.interpolation.less",
      ],
      "settings": {
        "foreground": color['syntax.variableConstant']
      }
    },
    {
      "name": "Variables parameter for C#",
      "scope": [
        "entity.name.variable.parameter.cs"
      ],
      "settings": {
        "foreground": color['syntax.parameter']
      }
    }
  ]
}
module.exports = getConfig