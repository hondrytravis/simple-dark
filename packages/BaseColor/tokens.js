/**
 * Semantic token mapping
 * Maps semantic role identifiers to raw palette color names.
 * Change a mapping here to reassign a semantic role to a different color.
 */

const tokens = {
  // ── Syntax: Code highlighting ────────────────────────────

  'syntax.comment':           'lightGray',
  'syntax.function':          'green',
  'syntax.parameter':         'orange',
  'syntax.keyword':           'pink',
  'syntax.keywordType':       'cyan',
  'syntax.storage':           'pink',
  'syntax.variable':          'mediumWhite',
  'syntax.variableConstant':  'lightCyan',
  'syntax.constant':          'purple',
  'syntax.string':            'string_color',
  'syntax.regexp':            'green',
  'syntax.type':              'deepSkyBlue',
  'syntax.native':            'deepSkyBlue',
  'syntax.support':           'cyan',
  'syntax.namespace':         'cyan',
  'syntax.tag':               'pink',
  'syntax.pseudo':            'pink',
  'syntax.attribute':         'deepSkyBlue',
  'syntax.attributeId':       'lightGreen',
  'syntax.invalid':           'red',
  'syntax.json':              'cyan',
  'syntax.cssValue':          'purple',
  'syntax.punctuation':       'pink',
  'syntax.punctuationBracket':'orange',
  'syntax.markupText':        'grayWhite',
  'syntax.markupCode':        'lightBlue',
  'syntax.markupHeading':     'pink',
  'syntax.markupHeadingContent': 'deepSkyBlue',
  'syntax.markupEmphasis':    'orange',
  'syntax.markupImage':       'lightYellow',

  // ── UI: Editor chrome ─────────────────────────────────────

  'ui.focusBorder':        'color_ctrl_blue',
  'ui.bg.sidebar':         'black',
  'ui.bg.editor':          'black',
  'ui.bg.tab':             'tabGray',
  'ui.bg.tabInactive':     'tabInactive',
  'ui.bg.input':           'darkGray',
  'ui.bg.titleBar':        'chromeBg',
  'ui.bg.statusBar':       'black',
  'ui.bg.widget':          'black',
  'ui.bg.selection':       'gray',
  'ui.fg.primary':         'white',
  'ui.fg.secondary':       'mediumWhite',
  'ui.border':             'border',
  'ui.border.active':      'deepSkyBlue',
  'ui.hover':              'color_ctrl_hover_gray',
  'ui.selection.active':   'darkGray_low',
  'ui.accent.info':        'green',
  'ui.accent.warning':     'red',

  // ── Git: SCM decorations ──────────────────────────────────

  'git.added':    'green',
  'git.modified': 'cyan',
  'git.deleted':  'tomato',

  // ── List: Tree/List decorations ───────────────────────────

  'list.error':   'tomato',
  'list.warning': 'tomato',
};

module.exports = tokens;
