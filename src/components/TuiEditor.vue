<template>
  <div class="vuerd-plugin-tui-editor">
    <Editor :value="value" height="100%" @input="onInput" ref="tuiEditor" />
  </div>
</template>

<script lang="ts">
import "tui-editor/dist/tui-editor.css";
import "tui-editor/dist/tui-editor-contents.css";
import "codemirror/lib/codemirror.css";
import { Editor } from "@toast-ui/vue-editor";
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component({
  components: {
    Editor
  }
})
export default class TuiEditor extends Vue {
  @Prop({ type: String, default: "" })
  private value!: string;
  @Prop({ type: Boolean, default: false })
  private focus!: boolean;

  @Watch("focus")
  private watchFocus(focus: boolean) {
    const editor = this.$refs.tuiEditor as any;
    if (focus) {
      editor.invoke("focus");
    } else {
      editor.invoke("blur");
    }
  }

  private onInput(value: string) {
    this.$emit("input", value);
  }
}
</script>

<style scoped>
.vuerd-plugin-tui-editor {
  width: 100%;
  height: 100%;
  background-color: white;
}
</style>
