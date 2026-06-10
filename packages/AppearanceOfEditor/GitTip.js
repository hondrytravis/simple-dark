function getConfig(color) {
  return {
    // git
    "gitDecoration.modifiedResourceForeground": color['git.modified'],
    "gitDecoration.addedResourceForeground": color['git.added'],
    "gitDecoration.deletedResourceForeground": color['git.deleted'],
  }
}
module.exports = getConfig