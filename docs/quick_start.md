# Quick Start

## Inspecting Code Scopes

Press `Ctrl/Cmd + Shift + P`, type **Developer: Inspect Editor Tokens and Scopes**, then click on any code to see its TextMate scope and semantic token information.

## References

- [Sublime Text — Scope Naming](https://www.sublimetext.com/docs/scope_naming.html)
- [TextMate — Language Grammars](https://macromates.com/manual/en/language_grammars)
- [VS Code Theme Color Reference](https://code.visualstudio.com/api/references/theme-color)

## Local Development

After modifying any `.js` file under `packages/`, rebuild the theme JSON files:

```bash
npm run build
```

> Tip: Use `npm start` to enable watch mode and auto-rebuild on changes.

## Install Packaging Tool

This theme extension uses `@vscode/vsce` for packaging and publishing.

```bash
npm install -g @vscode/vsce
```

## Packaging & Publishing

```bash
# Package into a .vsix file
vsce package

# Publish to the VS Code Marketplace
vsce publish
```
