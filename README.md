# 42km theme for Visual Studio Code

A [Marathon](https://marathonthegame.com/) inspired dark color theme for [Visual Studio Code](https://code.visualstudio.com).

Download and install from the [Extension Marketplace](https://marketplace.visualstudio.com/items?itemName=Andornaut.vscode-42km-theme), or launch VS Code *Quick Open* (Ctrl+P), paste the following command, and press enter: `ext install Andornaut.vscode-42km-theme`

![screenshot](./screenshots/42km.png)

## Primary Colors

| Color | Hex | Usage |
| ----- | --- | ----- |
| Lime Green | `#c0fe04` | Primary accent — strings, keywords, cursor, links, tags |
| Dark Green | `#8db803` | Function names |
| Red | `#f24723` | Errors, numbers, regexp, constants, invalid |
| Orange | `#ff9500` | Warnings |
| Light Orange | `#ff6b3d` | Diff changed |
| Light Blue | `#4fc3f7` | Info |
| White | `#ffffff` | Class names, headings, menu foreground |
| Light Gray | `#cccccc` | Default foreground, variables, arguments |
| Mid Gray | `#717171` | Storage, built-in constants, inherited classes |
| Dark Gray | `#555555` | Comments, inactive elements |
| Charcoal | `#1c1c1c` | Surface backgrounds, panels, inputs |
| Near Black | `#0a0a0a` | Editor background |
| Black | `#000000` | Base backgrounds — sidebar, title bar, terminal |

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
