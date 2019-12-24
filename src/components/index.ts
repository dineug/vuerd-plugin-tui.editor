import TuiEditor from "./TuiEditor.vue";
import { Command, Editor } from "vuerd-core";
import { Option } from "@/types";

export default {
  install(command: Command, option?: Option) {
    const editor: Editor = {
      name: "TuiEditor",
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
      if (typeof option.imageUpload === "function") {
        TuiEditor.prototype.imageUpload = option.imageUpload;
      }
      if (option.scope !== undefined) {
        editor.scope = option.scope;
      }
      if (option.exclude !== undefined) {
        editor.exclude = option.exclude;
      }
    }
    command.editorAdd(editor);
  }
};
