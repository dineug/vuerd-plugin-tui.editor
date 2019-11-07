# vuerd-plugin-tui.editor
[vuerd-core](https://github.com/vuerd/vuerd-core) plugin [tui.editor](https://github.com/nhn/tui.editor)

## Document
[Storybook](https://vuerd.github.io/vuerd-docs/)   
[Live Demo](https://vuerd.github.io/vuerd-docs/iframe.html?id=demo-live--vuerd-core)

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
// Option
/*
VuerdCore.use(TuiEditor, {
  imageUpload(blob, callback) {
    // upload
    callback("URL");
  }
});
*/

Vue.use(VuerdCore);
```
```html
<VuerdCore/>
```

## License
[MIT](https://github.com/vuerd/vuerd-plugin-tui.editor/blob/master/LICENSE)
