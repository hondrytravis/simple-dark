/**
 * @scope Punctuation
 * The following scopes are punctuation scopes that are not embedded within other scopes. For instance, the string. section includes documentation about scopes for string punctuation.
 * you can be changed to you love the color
 */

function getConfig(color) {
  return [
    {
      "name": "Punctuation",
      "scope": [
        "punctuation",
        "punctuation.separator",
        "punctuation.terminator",
        "punctuation.separator.continuation",
        "punctuation.accessor"
      ],
      "settings": {
        "foreground": color['syntax.variable']
      }
    },
    {
      "name": "Punctuation: color at the start and end of string",
      "scope": [
        "punctuation.definition.string.begin",
        "punctuation.definition.string.end",
        "punctuation.definition.string.template.begin",
        "punctuation.definition.string.template.end"
      ],
      "settings": {
        "foreground": color['syntax.string']
      }
    },
    {
      "name": "Punctuation: JSON color",
      "scope": [
        "string.json",
        "punctuation.support.type.property-name.begin",
        "punctuation.support.type.property-name.end",
        "variable.other.jsdoc"
      ],
      "settings": {
        "foreground": color['syntax.json']
      }
    },
    {
      "name": "Punctuation: Escape character",
      "scope": [
        "punctuation.definition.entity"
      ],
      "settings": {
        "foreground": color['syntax.constant']
      }
    },
    {
      "name": "Punctuation: Use for jsdoc comment",
      "scope": [
        "punctuation.definition.block.tag.jsdoc",
        "punctuation.definition.template-expression.begin",
        "punctuation.definition.template-expression.end"
      ],
      "settings": {
        "foreground": color['syntax.punctuation']
      }
    },
    {
      "name": "Punctuation: Use for jsdoc comment",
      "scope": [
        "punctuation.definition.bracket.curly.begin.jsdoc",
        "punctuation.definition.bracket.curly.end.jsdoc"
      ],
      "settings": {
        "foreground": color['syntax.punctuationBracket']
      }
    },
    {
      "name": "Punctuation: use for less,css,sass,html",
      "scope": [
        "punctuation.separator.key-value",
        "punctuation.definition.variable",
        "punctuation.definition.keyword",
        "punctuation.definition.entity.css",
        "punctuation.definition.constant.css",
        "punctuation.definition.interpolation",
        "keyword.control.at-rule.import",
        "variable.other.less"
      ],
      "settings": {
        "foreground": color['syntax.punctuation']
      }
    },
    {
      "name": "Punctuation: use for React tsx/jsx/ts [?.] ...",
      "scope": [
        "punctuation.accessor.optional"
      ],
      "settings": {
        "foreground": color['syntax.punctuation']
      }
    },
    {
      "name": "Punctuation: use for C++/C",
      "scope": [
        "punctuation.definition.directive.cpp",
        "punctuation.definition.directive.c"
      ],
      "settings": {
        "foreground": color['syntax.punctuation']
      }
    },
    {
      "name": "Punctuation: use for markdown [] symbol",
      "scope": [
        "punctuation.definition.string.end.markdown",
        "punctuation.definition.string.begin.markdown",
        "punctuation.definition.metadata.markdown"
      ],
      "settings": {
        "foreground": color['syntax.punctuation']
      }
    }
  ]
}

module.exports = getConfig