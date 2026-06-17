const Color = require("color");
const getColors = require("./packages/BaseColor/index.js");

// BaseColor 中的 black token 对应 editor.background
const BG_TOKEN = "black";

// 需要满足 WCAG AA（4.5:1）的核心前景色/语法色
const FOREGROUND_TOKENS = [
  "white",        // 主前景
  "mediumWhite",  // 次前景
  "grayWhite",    // 辅助文字
  "green",        // 函数
  "lightGreen",   // 字符串属性 / HTML id
  "orange",       // 参数
  "cyan",         // 类型 / 命名空间
  "lightCyan",    // 常量
  "deepSkyBlue",  // 原生类型
  "mediumBlue",   // 控件蓝
  "blue",         // 链接
  "lightBlue",    // Markdown code / link
  "purple",       // 常量
  "pink",         // 关键字
  "tomato",       // 删除 / 错误
  "red",          // 无效
  "lightYellow",  // Markdown image
  "string_color", // 字符串
];

// 注释色允许低于 AA，单独显示不纳入统计
const COMMENT_TOKENS = ["lightGray"];

function getContrast(hex, bgHex) {
  return Color(hex).contrast(Color(bgHex));
}

function checkTheme(name, mode) {
  const colors = getColors(mode);
  const background = colors[BG_TOKEN];

  console.log(`\n=== ${name} (editor.background: ${background}) ===`);
  console.log(`Token                Hex        Ratio    AA       AAA`);
  console.log("-".repeat(62));

  let pass = 0;
  let total = 0;

  for (const token of FOREGROUND_TOKENS) {
    const hex = colors[token];
    if (!hex || typeof hex !== "string" || !hex.startsWith("#")) continue;

    const ratio = getContrast(hex, background);
    const passAA = ratio >= 4.5;
    const passAAA = ratio >= 7;

    total++;
    if (passAA) pass++;

    const aaStr = passAA ? "PASS" : "FAIL <<";
    const aaaStr = passAAA ? "PASS" : "FAIL";

    console.log(
      `${token.padEnd(20)} ${hex.padEnd(10)} ${ratio.toFixed(2).padEnd(8)} ${aaStr.padEnd(8)} ${aaaStr}`
    );
  }

  console.log("-".repeat(62));
  console.log(`Core foreground: ${pass}/${total} passed WCAG AA`);

  for (const token of COMMENT_TOKENS) {
    const hex = colors[token];
    if (!hex || typeof hex !== "string" || !hex.startsWith("#")) continue;

    const ratio = getContrast(hex, background);
    console.log(
      `${token.padEnd(20)} ${hex.padEnd(10)} ${ratio.toFixed(2).padEnd(8)} (comment, AA not required)`
    );
  }
}

checkTheme("Simple Dark", "dark");
checkTheme("Simple Dark Soft", "dark-soft");
checkTheme("Simple Light", "light");
checkTheme("Simple Light Soft", "light-soft");
