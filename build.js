const fs = require('fs');

const color = require('./packages/BaseColor')
const Editor = require('./packages/AppearanceOfEditor');
const Code = require('./packages/AppearanceOfCode');
const AboutMyself = require('./packages/AboutMyself')
const Semantic = require('./packages/Semantic')


const _path = {
  dark: './themes/dark.json',
  softDark: './themes/dark-soft.json',
  light: './themes/light.json',
  softLight: './themes/light-soft.json'
}

function buildDarkTheme() {
  const opts = { name: 'Simple Dark' }
  const result = Object.assign({}, AboutMyself(opts), Semantic, Editor(color()), Code(color()))
  return JSON.stringify(result)
}

function buildDarkSoftTheme() {
  const opts = { name: 'Simple Dark Soft' }
  const mode = 'dark-soft'
  const result = Object.assign({}, AboutMyself(opts), Semantic, Editor(color(mode)), Code(color(mode)))
  return JSON.stringify(result)
}

function buildLightTheme() {
  const opts = { name: 'Simple Light' }
  const mode = 'light'
  const result = Object.assign({}, AboutMyself(opts), Semantic, Editor(color(mode)), Code(color(mode)))
  return JSON.stringify(result)
}

function buildLightSoftTheme() {
  const opts = { name: 'Simple Light Soft' }
  const mode = 'light-soft'
  const result = Object.assign({}, AboutMyself(opts), Semantic, Editor(color(mode)), Code(color(mode)))
  return JSON.stringify(result)
}


async function build() {
  await fs.writeFileSync(_path.dark, buildDarkTheme())
  await fs.writeFileSync(_path.softDark, buildDarkSoftTheme())
  await fs.writeFileSync(_path.light, buildLightTheme())
  await fs.writeFileSync(_path.softLight, buildLightSoftTheme())
}

build()