# Release notes for Simple Dark Theme

## [released 1.5.0]

- **Dark Modern Tab Styling**:
  - Active tab now matches editor background for seamless visual flow.
  - Inactive tabs blend with the tab strip (Dark Modern style).
  - Tab active indicator moved to top edge (`tab.activeBorderTop`).
- **Borders & Separation**:
  - Added subtle borders to activity bar, side bar, panel, status bar, title bar, and editor groups.
  - Tab strip bottom border separates tabs from breadcrumb area.
- **Chrome Dark Mode Palette**:
  - Editor background unified to Google Chrome dark (`#202124`).
  - Tab strip and inactive tabs use Chrome surface colors (`#292a2d`).
  - Border colors follow Chrome's outline palette (`#3c4043`).
- **Light Mode Refinements**:
  - Borders use softer, lighter tones (`#e8e8e8`) matching VS Code Light Modern.
  - Activity bar and title bar get subtle depth via `chromeBg` color.
- **Sidebar**: Dark mode sidebar now slightly deeper for visual separation.
- **Palette**: Added `tabGray`, `tabInactive`, `border`, `chromeBg` color tokens.

## [released 1.4.3]

- **Simple Light Soft (Refined Ink & Paper)**:
  - Major color palette update simulation physical writing experience on paper.
  - **Secondary Text**: Explicitly set to Cool Gray (`#3c4043`) for AAA clarity.
  - **Variables**: Changed to Deep Ink Black (`#1B1F23`) for crisp definition.
  - **Keywords**: Updated to bright purple (`#8020D0`, AA) for clear syntax structure.
  - **Types**: Optimized to Petrol Blue (`#006F94`, AA) to distinguish from functions.
  - **Markdown Links**: Kept distinct Blue (`#1967d2`) for interactive feel.
  - **Consistency**: Unified blue shades for Native Objects to Deep Ink Blue (`#005393`).

## [released 1.4.2]

- **Metadata**: Updated description and keywords to highlight support for Light and Soft modes.
- **Brand**: Updated extension logo.

## [released 1.4.1]

- Minor adjustments to Simple Light Soft theme colors.
- Code style cleanup.

## [released 1.4.0]

### Major Update: Simple Light Soft Refactoring

We have completely redesigned the **Simple Light Soft** theme to provide a true "Reader Mode" experience, focusing on eye comfort and accessibility.

- **New Background**: Adopted the classic Safari Reader Mode color (`#F8F1E3`) for a paper-like reading experience.
- **Cool-on-Warm Color Strategy**:
  - Replaced "hot" colors (Yellow, Bright Red, Orange) with "cool" complementary colors (Purple, Crimson, Burnt Orange) to reduce visual fatigue on the warm background.
  - **Yellow** -> **Deep Purple** (`#6A1B9A`): Provides excellent contrast and a refreshing look.
  - **Tomato/Red** -> **Crimson** (`#B71C1C`): A cooler, deeper red that is less alarming.
  - **Orange** -> **Burnt Orange** (`#A05A00`): Retains the "Parameter" identity but with a comfortable autumn tone.
- **Enhanced Accessibility (WCAG AA)**:
  - All syntax highlighting colors have been calibrated to pass WCAG AA contrast standards (> 4.5:1) on the new soft background.
  - **Functions**: Optimized to **Forest Green** (`#00753B`) for perfect clarity.
  - **Variables**: Adjusted to **Deep Teal** (`#005A65`) to distinguish from functions.
  - **Types**: Tuned to **Blue-Teal** (`#00788A`) for clear semantic distinction.
- **UI Consistency**:
  - Sidebar and Activity Bar colors are now perfectly harmonized with the editor background, creating a unified "physical desk" visual hierarchy.

### Improvements

- **String Color**: Unified string color to **Crimson** (`#B71C1C`) in Soft Light mode for better consistency and readability.
- **General**: Codebase cleanup and better color definitions for easier maintenance.

## [released 1.3.0]
- feature: New theme added! **Simple Light Soft**
- feature: Eye-friendly "Safari Reader Mode" background color (`#F8F1E3`)
- feature: WCAG AA compliant syntax highlighting for Light Soft theme
- perf: Improved visual hierarchy for Activity Bar and Sidebar in Light Soft theme

## [released 1.2.0]
- feature: New theme added! **Simple Light**
- feature: WCAG AA compliant syntax highlighting for Light theme
- feature: Semantic distinction: Red strings vs Green functions in Light theme
- perf: Optimized sidebar visibility and contrast
- docs: Updated README with design philosophy and screenshots

## [released 1.1.4]
- chore: perf logo

## [released 1.1.3]
- perf: item background color

## [released 1.1.2]
- fix suggestions item background color

## [released 1.1.1]
- chore: change logs

## [released 1.1.0]
- improved sidebar list background and hover colors

## [released 1.0.1]
- fix: in markdown text code scope color

## [released 1.0.0]
- feature: new theme list - simple dark soft

## [released 0.3.11]
- fix python import object color

## [released 0.3.10]
- improved python import object color

## [released 0.3.9]
- improved link and inline code color where in markdown file

## [released 0.3.8]
- improved uniform identifier

## [released 0.3.7]
- fix markdown [] symbol color


## [released 0.3.6]

- Variables parameter for C#

## [released 0.3.5]

- Improved Widget background color
- Improved default focusBorder color

## [released 0.3.4]

- Improve rpx unit color

## [released 0.3.3]

- Improved color scheme, do better theme

## [released 0.3.2]

- Improved Titlebar color

## [released 0.2.9]

- fixed C++ / C [namespace and #] theme color

## [released 0.2.8]

- fixed React tsx/jsx/ts [?.] ...

## [released 0.2.7]

- fixed sass/less variable color and rename something config property value

## [released 0.2.6]

- fixed more questions, do better theme, :D

## [released 0.2.5]

- new features, add a new semantic highlight style!!!
- fixed some questions

## [released 0.2.4]

- fixed some questions

## [released 0.2.3]

- fixed pink color repeat

## [released 0.2.2]

- changed resource manager list error background color
- add statusbar no folder background color
- changed git history deleted resource foreground color
- add someone default color

## [released 0.2.1]

- Fixed search word/string background, Is easier to see

## [released 0.2.0]

- updated main code color to #dddddd

## [released 0.1.9]

- updated main code colors so that they are no longer too dazzling

## [released 0.1.7]

- update in c# file new class color

## [released 0.1.6]

- update CHANGELOG file

## [released 0.1.5]

- Fixed c# function parameter variable color
- Fixed c# keyword type color

## [released 0.1.4]

- changed logo

## [released 0.1.3]

- update readme.md and then add local Images file to make this theme explain look clearer

## [released 0.1.2]

- update in template string parameter color style

## [released 0.1.1]

- restore code block code，in function variable parameter code color,white

## [released 0.1.0]

- update Style attribute color

## [released 0.0.9]

- change some settings
- Fiexd Markdown color

## [released 0.0.8]

- Initial release
