/**
 * @scope Entity
 * The entity scopes are generally assigned to the names of data structures, types and other uniquely-identifiable constructs in code and markup. The notable exceptions are entity.name.tag and entity.other.attribute-name, which are used in HTML and XML tags.
 * you can be changed to you love the color
 */
function getConfig(color) {
  return [
    {
      "name": "Entity: Attribute Name",
      "scope": [
        "entity.name.type",
        "entity.other.inherited-class",
        "entity.other.attribute-name"
      ],
      "settings": {
        "foreground": color['syntax.type']
      }
    },
    {
      "name": "Entity: Css[hover...] ...",
      "scope": [
        "entity.other.attribute-name.pseudo-element",
      ],
      "settings": {
        "foreground": color['syntax.pseudo']
      }
    },
    {
      "name": "Entity: TagName",
      "scope": [
        "entity.name.tag"
      ],
      "settings": {
        "foreground": color['syntax.tag']
      }
    },
    {
      "name": "Entity: Native-Object[Array,Object]",
      "scope": [
        "entity.name.type.class",
      ],
      "settings": {
        "foreground": color['syntax.native']
      }
    },
    {
      "name": "Entity: use for C++/C",
      "scope": [
        "entity.name.namespace.cpp",
        "entity.name.namespace.c"
      ],
      "settings": {
        "foreground": color['syntax.namespace']
      }
    }
  ]
}

module.exports = getConfig