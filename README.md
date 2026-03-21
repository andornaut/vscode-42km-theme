# 42km theme for Visual Studio Code

A [Marathon](https://marathonthegame.com/) inspired dark color theme for [Visual Studio Code](https://code.visualstudio.com).

Download and install from the [Extension Marketplace](https://marketplace.visualstudio.com/items?itemName=Andornaut.vscode-42km-theme), or launch VS Code *Quick Open* (Ctrl+P), paste the following command, and press enter: `ext install Andornaut.vscode-42km-theme`

![screenshot](./screenshots/42km.png)

## Primary Colors

| Color | Hex | Usage |
| ----- | --- | ----- |
| ![#c0fe04](swatches/c0fe04.svg) Lime Green | `#c0fe04` | Primary accent — strings, keywords, cursor, links, tags |
| ![#8db803](swatches/8db803.svg) Dark Green | `#8db803` | Function names |
| ![#f24723](swatches/f24723.svg) Red | `#f24723` | Errors, numbers, regexp, constants, invalid |
| ![#ff9500](swatches/ff9500.svg) Orange | `#ff9500` | Warnings |
| ![#ff6b3d](swatches/ff6b3d.svg) Light Orange | `#ff6b3d` | Diff changed |
| ![#4fc3f7](swatches/4fc3f7.svg) Light Blue | `#4fc3f7` | Info |
| ![#ffffff](swatches/ffffff.svg) White | `#ffffff` | Class names, headings, menu foreground |
| ![#cccccc](swatches/cccccc.svg) Light Gray | `#cccccc` | Default foreground, variables, arguments |
| ![#717171](swatches/717171.svg) Mid Gray | `#717171` | Storage, built-in constants, inherited classes |
| ![#555555](swatches/555555.svg) Dark Gray | `#555555` | Comments, inactive elements |
| ![#1c1c1c](swatches/1c1c1c.svg) Charcoal | `#1c1c1c` | Surface backgrounds, panels, inputs |
| ![#0a0a0a](swatches/0a0a0a.svg) Near Black | `#0a0a0a` | Editor background |
| ![#000000](swatches/000000.svg) Black | `#000000` | Base backgrounds — sidebar, title bar, terminal |

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
