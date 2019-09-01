<template>
  <div class="vuerd-plugin-tui-editor">
    <Editor
            :value="value"
            :height="'100%'"
            @input="onInput"
    />
  </div>
</template>

<script lang="ts">
  import 'tui-editor/dist/tui-editor.css';
  import 'tui-editor/dist/tui-editor-contents.css';
  import 'codemirror/lib/codemirror.css';
  import {Editor} from '@toast-ui/vue-editor';
  import {Component, Vue} from 'vue-property-decorator';

  @Component({
    components: {
      Editor,
    },
  })
  export default class TuiEditor extends Vue {
    private value: string = '';

    private onInput(value: string) {
      this.$emit('input', value);
    }

  }
</script>

<style scoped lang="scss">
  .vuerd-plugin-tui-editor {
    width: 100%;
    height: 100%;
    background-color: white;
  }
</style>
