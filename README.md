# 42km theme for Visual Studio Code

A [Marathon](https://marathonthegame.com/) inspired dark color theme for [Visual Studio Code](https://code.visualstudio.com).

Download and install from the [Extension Marketplace](https://marketplace.visualstudio.com/items?itemName=Andornaut.vscode-42km-theme), or launch VS Code *Quick Open* (Ctrl+P), paste the following command, and press enter: `ext install Andornaut.vscode-42km-theme`

![screenshot](./screenshots/42km.png)

## Primary Colors

| Color | Hex | Usage |
| ----- | --- | ----- |
| ![#c0fe04](https://via.placeholder.com/16/c0fe04/c0fe04.png) Lime Green | `#c0fe04` | Primary accent — strings, keywords, cursor, links, tags |
| ![#8db803](https://via.placeholder.com/16/8db803/8db803.png) Dark Green | `#8db803` | Function names |
| ![#f24723](https://via.placeholder.com/16/f24723/f24723.png) Red | `#f24723` | Errors, numbers, regexp, constants, invalid |
| ![#ff9500](https://via.placeholder.com/16/ff9500/ff9500.png) Orange | `#ff9500` | Warnings |
| ![#ff6b3d](https://via.placeholder.com/16/ff6b3d/ff6b3d.png) Light Orange | `#ff6b3d` | Diff changed |
| ![#4fc3f7](https://via.placeholder.com/16/4fc3f7/4fc3f7.png) Light Blue | `#4fc3f7` | Info |
| ![#ffffff](https://via.placeholder.com/16/ffffff/ffffff.png) White | `#ffffff` | Class names, headings, menu foreground |
| ![#cccccc](https://via.placeholder.com/16/cccccc/cccccc.png) Light Gray | `#cccccc` | Default foreground, variables, arguments |
| ![#717171](https://via.placeholder.com/16/717171/717171.png) Mid Gray | `#717171` | Storage, built-in constants, inherited classes |
| ![#555555](https://via.placeholder.com/16/555555/555555.png) Dark Gray | `#555555` | Comments, inactive elements |
| ![#1c1c1c](https://via.placeholder.com/16/1c1c1c/1c1c1c.png) Charcoal | `#1c1c1c` | Surface backgrounds, panels, inputs |
| ![#0a0a0a](https://via.placeholder.com/16/0a0a0a/0a0a0a.png) Near Black | `#0a0a0a` | Editor background |
| ![#000000](https://via.placeholder.com/16/000000/000000.png) Black | `#000000` | Base backgrounds — sidebar, title bar, terminal |

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
