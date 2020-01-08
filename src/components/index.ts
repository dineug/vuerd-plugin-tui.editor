import TuiEditor from "./TuiEditor.vue";
import { Command, Editor } from "vuerd-core";
import { Option } from "@/types";

export default {
  install(command: Command, option?: Option) {
    const editor: Editor = {
      name: "tui.editor",
      component: TuiEditor,
      scope: ["md"],
      option: {
        readme: {
          owner: "vuerd",
          repo: "vuerd-plugin-tui.editor"
        }
      }
    };
    if (option) {
      if (option.scope !== undefined) {
        editor.scope = option.scope;
      }
      if (option.exclude !== undefined) {
        editor.exclude = option.exclude;
      }
      if (typeof option.imageUpload === "function") {
        TuiEditor.prototype.imageUpload = option.imageUpload;
      }
      if (option.editorOption) {
        if (option.editorOption.previewStyle) {
          TuiEditor.prototype.preview = option.editorOption.previewStyle;
        }
        TuiEditor.prototype.option = option.editorOption;
      }
    }
    command.editorAdd(editor);
  }
};
