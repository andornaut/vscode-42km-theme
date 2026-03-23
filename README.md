# 42km theme for Visual Studio Code

A [Marathon](https://marathonthegame.com/) inspired dark color theme for [Visual Studio Code](https://code.visualstudio.com).

Download and install from the [Extension Marketplace](https://marketplace.visualstudio.com/items?itemName=Andornaut.42km), or launch VS Code *Quick Open* (Ctrl+P), paste the following command, and press enter: `ext install Andornaut.42km`

![screenshot](./screenshots/42km.png)

This color theme uses [Solarized Dark](https://ethanschoonover.com/solarized/) [`tokenColors`](https://github.com/microsoft/vscode/blob/main/extensions/theme-solarized-dark/themes/solarized-dark-color-theme.json).

## Primary Colors

### UI

| Color | Hex | Usage |
| ----- | --- | ----- |
| ![#c0fe04](swatches/c0fe04.svg) Lime Green | `#c0fe04` | Primary accent — cursor, links, active line number, focus border |
| ![#7c48e2](swatches/7c48e2.svg) Purple | `#7c48e2` | Active highlights — tabs, activity bar active |
| ![#ffff00](swatches/ffff00.svg) Yellow | `#ffff00` | Active foreground, git modified |
| ![#01e17d](swatches/01e17d.svg) Green | `#01e17d` | Find matches, git added |
| ![#7289da](swatches/7289da.svg) Periwinkle | `#7289da` | Title bar |
| ![#41a0eb](swatches/41a0eb.svg) Blue | `#41a0eb` | Info |
| ![#305090](swatches/305090.svg) Dark Blue | `#305090` | Selection background |
| ![#ff5c00](swatches/ff5c00.svg) Orange | `#ff5c00` | Warnings, breakpoints, debugging |
| ![#c4071c](swatches/c4071c.svg) Red | `#c4071c` | Errors, git deleted |
| ![#f1f1f1](swatches/f1f1f1.svg) Near White | `#f1f1f1` | Foreground text |
| ![#c1c7c7](swatches/c1c7c7.svg) Silver | `#c1c7c7` | Breadcrumb background |
| ![#93ada0](swatches/93ada0.svg) Sage | `#93ada0` | Activity bar, scrollbar, inactive tabs |
| ![#728083](swatches/728083.svg) Slate | `#728083` | Borders, ignored files |
| ![#585a60](swatches/585a60.svg) Dark Gray | `#585a60` | Inactive elements, gutter, tab headers |
| ![#414247](swatches/414247.svg) Charcoal Gray | `#414247` | Hover backgrounds, panel |
| ![#353b3d](swatches/353b3d.svg) Dark Teal | `#353b3d` | Editor background, sidebar |
| ![#26292e](swatches/26292e.svg) Near Black | `#26292e` | Inputs, lists, menus, line highlight |
| ![#1b1a1d](swatches/1b1a1d.svg) Black | `#1b1a1d` | Drop backgrounds, cursor background |

### Syntax (Solarized Dark)

| Color | Hex | Usage |
| ----- | --- | ----- |
| ![#859900](swatches/859900.svg) Green | `#859900` | Keywords, variable start, library class/type, diff inserted |
| ![#2AA198](swatches/2aa198.svg) Cyan | `#2AA198` | Strings, markup inline |
| ![#268BD2](swatches/268bd2.svg) Blue | `#268BD2` | Variables, functions, tags, headings, diff header |
| ![#6C71C4](swatches/6c71c4.svg) Violet | `#6C71C4` | Inherited class |
| ![#D33682](swatches/d33682.svg) Magenta | `#D33682` | Numbers, markup styling |
| ![#CB4B16](swatches/cb4b16.svg) Orange | `#CB4B16` | Class names, constants, exceptions, diff changed |
| ![#B58900](swatches/b58900.svg) Yellow | `#B58900` | Built-in constants, markup lists |
| ![#DC322F](swatches/dc322f.svg) Red | `#DC322F` | Errors, regexp, invalid, diff deleted |
| ![#93A1A1](swatches/93a1a1.svg) Light Gray | `#93A1A1` | Storage, tag attributes |
| ![#839496](swatches/839496.svg) Base0 | `#839496` | Default foreground |
| ![#586E75](swatches/586e75.svg) Dark Gray | `#586E75` | Comments, tag delimiters |

## Developing

### Testing

1. Press F5 to launch an Extension Development Host window.
1. Select: File > Preferences > Color Theme > 42km Dark

### Publishing

* [Publishing extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
* [Get a Personal Access Token](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#get-a-personal-access-token)

```bash
npm install @vscode/vsce
npx vsce login Andornaut

npx vsce package
npx vsce publish
npx vsce publish patch
npx vsce publish minor
npx vsce publish major
```

### Guides

* [Extension guide: color theme](https://code.visualstudio.com/api/extension-guides/color-theme)
* [Theme color documentation](https://code.visualstudio.com/api/references/theme-color)
