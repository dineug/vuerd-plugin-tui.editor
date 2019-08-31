<template>
  <Editor
          :value="value"
          :height="'100%'"
          @input="onInput"
  />
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

</style>
