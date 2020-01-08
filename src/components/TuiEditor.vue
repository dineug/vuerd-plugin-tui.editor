<template>
  <div class="vuerd-plugin-tui-editor">
    <Editor
      :value="value"
      height="100%"
      :previewStyle="previewStyle"
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
import { EditorOption, PreviewStyle } from "@/types";
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

interface Option extends EditorOption {
  hooks: any;
}

const optionKeys = [
  "exts",
  "minHeight",
  "language",
  "useCommandShortcut",
  "useDefaultHTMLSanitizer",
  "usageStatistics",
  "hideModeSwitch",
  "toolbarItems"
];

@Component({
  name: "TuiEditor",
  components: {
    Editor
  }
})
export default class TuiEditor extends Vue {
  @Prop({ type: String, default: "" })
  private value!: string;
  @Prop({ type: Boolean, default: false })
  private focus!: boolean;

  private editorOption: Option = {
    hooks: {},
    exts: ["chart", "uml", "table", "scrollSync"],
    minHeight: "200px",
    language: "en_US",
    useCommandShortcut: true,
    useDefaultHTMLSanitizer: true,
    usageStatistics: false,
    hideModeSwitch: false,
    toolbarItems: [
      "heading",
      "bold",
      "italic",
      "strike",
      "divider",
      "hr",
      "quote",
      "divider",
      "ul",
      "ol",
      "task",
      "indent",
      "outdent",
      "divider",
      "table",
      "image",
      "link",
      "divider",
      "code",
      "codeblock"
    ]
  };
  private previewStyle?: PreviewStyle | null = null;
  public preview?: PreviewStyle;
  public imageUpload?: (blob: Blob, callback: (url: string) => void) => void;
  public option?: EditorOption;

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
    if (this.preview) {
      this.previewStyle = this.preview;
    }
    if (this.option) {
      optionKeys.forEach(key => {
        const option = this.option as any;
        if (option[key] !== undefined) {
          const editorOption = this.editorOption as any;
          editorOption[key] = option[key];
        }
      });
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
