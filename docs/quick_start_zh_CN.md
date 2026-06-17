# 快速上手

## 如何查看代码 Scope

按下 `Ctrl/Cmd + Shift + P`，输入 **Developer: Inspect Editor Tokens and Scopes**，然后点击代码中的任意位置，即可看到该位置的 TextMate scope 和语义 token 信息。

## 参考资料

- [Sublime Text — Scope Naming](https://www.sublimetext.com/docs/scope_naming.html)
- [TextMate — Language Grammars](https://macromates.com/manual/en/language_grammars)
- [VS Code 主题色完整参考](https://code.visualstudio.com/api/references/theme-color)

## 本地开发

修改 `packages/` 下的任意 `.js` 文件后，运行以下命令重新生成主题 JSON：

```bash
npm run build
```

> 提示：也可以使用 `npm start` 启动 watch 模式，文件变更后自动重新构建。

## 安装打包工具

主题扩展使用 `@vscode/vsce` 打包发布。

```bash
npm install -g @vscode/vsce
```

## 打包与发布

```bash
# 打包为 .vsix 文件
vsce package

# 发布到 VS Code Marketplace
vsce publish
```
