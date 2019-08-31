# vuerd-plugin-tui.editor
[vuerd-core](https://github.com/vuerd/vuerd-core) plugin [tui.editor](https://github.com/nhn/tui.editor)

## Storybook 
[Live Demo](https://vuerd.github.io/vuerd-docs/)

## Install
```bash
$ yarn add vuerd-core
$ yarn add vuerd-plugin-tui.editor
or
$ npm install vuerd-core
$ npm install vuerd-plugin-tui.editor
```
## Usage
```js
// main.js or main.ts
import Vue from 'vue';
import VuerdCore from 'vuerd-core';
import TuiEditor from 'vuerd-plugin-tui.editor';
import 'vuerd-core/dist/vuerd-core.css';
import 'vuerd-plugin-tui.editor/dist/vuerd-plugin-tui.editor.css';
VuerdCore.use(TuiEditor);
Vue.use(VuerdCore);
```
```html
<VuerdCore/>
```
