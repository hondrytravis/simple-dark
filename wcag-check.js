const Color = require("color");
const getColors = require("./packages/BaseColor/index.js");

function checkTheme(name, colors, background) {
    console.log(`\n=== Checking Theme: ${name} (Background: ${background}) ===`);
    console.log("WCAG AA requires 4.5:1 for normal text");
    console.log("----------------------------------------------------------------");
    console.log(`${"Color Name".padEnd(20)} ${"Hex".padEnd(10)} ${"Ratio".padEnd(8)} ${"AA".padEnd(6)} ${"AAA".padEnd(6)}`);
    console.log("----------------------------------------------------------------");

    let passCount = 0;
    let totalCount = 0;

    Object.entries(colors).forEach(([key, hex]) => {
        // Skip background colors themselves and non-color values
        if (['black', 'lightBlack', 'gray', 'darkGray', 'darkGray_low', 'ui_bg', 'ui_border'].includes(key)) return;
        if (typeof hex !== 'string' || !hex.startsWith('#')) return;

        try {
            const contrast = Color(hex).contrast(Color(background));
            const passAA = contrast >= 4.5;
            const passAAA = contrast >= 7;

            if (passAA) passCount++;
            totalCount++;

            const status = passAA ? "PASS" : "FAIL";
            // Highlight FAILs
            const statusStr = passAA ? "PASS" : "FAIL <<";

            console.log(`${key.padEnd(20)} ${hex.padEnd(10)} ${contrast.toFixed(2).padEnd(8)} ${statusStr.padEnd(6)} ${passAAA ? 'PASS' : 'FAIL'}`);
        } catch (e) {
            // Ignore invalid colors
        }
    });

    console.log("----------------------------------------------------------------");
    console.log(`Summary: ${passCount}/${totalCount} colors passed WCAG AA`);
}

// 1. Check Dark Theme
const darkColors = getColors('dark');
checkTheme('Simple Dark', darkColors, darkColors.black);

// 2. Check Soft Dark Theme
const softColors = getColors('dark-soft');
checkTheme('Simple Dark Soft', softColors, softColors.black);

// 3. Check Light Theme
const lightColors = getColors('light');
checkTheme('Simple Light', lightColors, lightColors.black);

// 4. Check Light Soft Theme
const lightSoftColors = getColors('light-soft');
checkTheme('Simple Light Soft', lightSoftColors, lightSoftColors.lightBlack);


