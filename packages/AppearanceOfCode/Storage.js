/**
 * @scope Storage
 * Types should use the following scope. Examples include int, bool and char.
 * you can be changed to you love the color
 */

function getConfig(color) {
  return [
    {
      "name": "Storage",
      "scope": [
        "storage"
      ],
      "settings": {
        "foreground": color['syntax.storage']
      }
    },
    {
      "name": "Storage: Type for c#",
      "scope": [
        "storage.type.cs"
      ],
      "settings": {
        "foreground": color['syntax.type']
      }
    }
  ]
}

module.exports = getConfig