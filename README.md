# 42km theme for Visual Studio Code

A [Marathon](https://marathonthegame.com/) inspired dark color theme for [Visual Studio Code](https://code.visualstudio.com).

Download and install from the [Extension Marketplace](https://marketplace.visualstudio.com/items?itemName=Andornaut.42km), or launch VS Code *Quick Open* (Ctrl+P), paste the following command, and press enter: `ext install Andornaut.42km`

![screenshot](./screenshots/42km.png)

This color theme uses [Solarized Dark `tokenColors`](https://github.com/microsoft/vscode/blob/main/extensions/theme-solarized-dark/themes/solarized-dark-color-theme.json).

## Primary Colors

### UI

| Color | Hex | Usage |
| ----- | --- | ----- |
| ![#c0fe04](swatches/c0fe04.svg) Lime Green | `#c0fe04` | Primary accent — cursor, links, active line number, focus border |
| ![#4fc3f7](swatches/4fc3f7.svg) Light Blue | `#4fc3f7` | Info |
| ![#f24723](swatches/f24723.svg) Red | `#f24723` | Errors, breakpoints, debugging |
| ![#ff9500](swatches/ff9500.svg) Orange | `#ff9500` | Warnings |
| ![#ffffff](swatches/ffffff.svg) White | `#ffffff` | Menu foreground, title bar |
| ![#555555](swatches/555555.svg) Dark Gray | `#555555` | Inactive elements |
| ![#333333](swatches/333333.svg) Gray | `#333333` | Line numbers, scrollbar |
| ![#1c1c1c](swatches/1c1c1c.svg) Charcoal | `#1c1c1c` | Surface backgrounds, panels, inputs |
| ![#0a0a0a](swatches/0a0a0a.svg) Near Black | `#0a0a0a` | Editor background |
| ![#000000](swatches/000000.svg) Black | `#000000` | Base backgrounds — sidebar, title bar, terminal |

### Syntax (Solarized Dark)

| Color | Hex | Usage |
| ----- | --- | ----- |
| ![#859900](swatches/859900.svg) Green | `#859900` | Keywords, variable start, library class/type |
| ![#2AA198](swatches/2aa198.svg) Cyan | `#2AA198` | Strings, markup inline |
| ![#268BD2](swatches/268bd2.svg) Blue | `#268BD2` | Variables, functions, tags, headings |
| ![#6C71C4](swatches/6c71c4.svg) Violet | `#6C71C4` | Inherited class |
| ![#D33682](swatches/d33682.svg) Magenta | `#D33682` | Numbers, markup styling |
| ![#CB4B16](swatches/cb4b16.svg) Orange | `#CB4B16` | Class names, constants, exceptions |
| ![#B58900](swatches/b58900.svg) Yellow | `#B58900` | Built-in constants, markup lists |
| ![#D30102](swatches/d30102.svg) Red | `#D30102` | Errors, regexp, invalid |
| ![#93A1A1](swatches/93a1a1.svg) Light Gray | `#93A1A1` | Default foreground, storage, arguments |
| ![#657B83](swatches/657b83.svg) Gray | `#657B83` | Comments, tag delimiters |

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
