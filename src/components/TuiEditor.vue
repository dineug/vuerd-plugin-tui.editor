<template>
  <div class="vuerd-plugin-tui-editor">
    <Editor
      :value="value"
      height="100%"
      previewStyle="vertical"
      :options="editorOption"
      ref="tuiEditor"
      @input="onInput"
    />
  </div>
</template>

<script lang="ts">
import "tui-editor/dist/tui-editor.css";
import "tui-editor/dist/tui-editor-contents.css";
import "codemirror/lib/codemirror.css";
import "tui-editor/dist/tui-editor-extChart";
import "tui-editor/dist/tui-editor-extUML";
import "tui-editor/dist/tui-editor-extTable";
import "tui-editor/dist/tui-editor-extScrollSync";
import { Editor } from "@toast-ui/vue-editor";
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

interface EditorOption {
  exts: string[];
  hooks: any;
}

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

  private editorOption: EditorOption = {
    exts: ["chart", "uml", "table", "scrollSync"],
    hooks: {}
  };

  public imageUpload?: (blob: Blob, callback: (url: string) => void) => void;

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

  private created() {
    if (this.imageUpload && typeof this.imageUpload === "function") {
      this.editorOption.hooks.addImageBlobHook = this.imageUpload;
    }
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
