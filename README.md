# vuerd-plugin-tui.editor

> [vuerd-core](https://github.com/vuerd/vuerd-core) plugin [tui.editor](https://github.com/nhn/tui.editor)

[![npm version](https://img.shields.io/npm/v/vuerd-plugin-tui.editor.svg)](https://www.npmjs.com/package/vuerd-plugin-tui.editor) [![Build Status](https://travis-ci.com/vuerd/vuerd-plugin-tui.editor.svg?branch=master)](https://travis-ci.com/vuerd/vuerd-plugin-tui.editor)

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

VuerdCore.use(
  TuiEditor,
/*
  {
    imageUpload(blob, callback) {
      // upload
      callback("URL");
    }
  }
*/
);

Vue.use(VuerdCore);
```
```html
<vuerd-core />
```
## CDN Quick Start
```html
<!DOCTYPE html>
<html>
<head>
  <title>vuerd-core demo</title>
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/vuerd-core/dist/vuerd-core.css">
  <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/vuerd-plugin-tui.editor/dist/vuerd-plugin-tui.editor.css">
</head>
<body>
  <div id="app">
    <vuerd-core />
  </div>
  <script src="https://cdn.jsdelivr.net/npm/vue"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuerd-core/dist/vuerd-core.umd.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/vuerd-plugin-tui.editor/dist/vuerd-plugin-tui.editor.umd.min.js"></script>
  <script>
    const VuerdCore = window['vuerd-core'].default
    const TuiEditor = window['vuerd-plugin-tui.editor'].default
    VuerdCore.use(TuiEditor)
    Vue.use(VuerdCore)
    new Vue({
      el: '#app'
    })
  </script>
</body>
</html>
```
## Option interface
```typescript
export interface Option {
  imageUpload?: (blob: Blob, callback: (url: string) => void) => void;
  scope?: string[] | RegExp[];
  exclude?: string[] | RegExp[];
}
```
## Option
| Name | Type | Default | Describe |
| --- | --- | --- | --- |
| imageUpload | function | base64 | image upload |
| scope | [String \| RegExp] | ["md"] | file designation(string extension) |
| exclude | [String \| RegExp] |  | exception file designation(string extension) |

## License
[MIT](https://github.com/vuerd/vuerd-plugin-tui.editor/blob/master/LICENSE)
