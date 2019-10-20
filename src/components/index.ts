import TuiEditor from "./TuiEditor.vue";
import { Command } from "vuerd-core";

export default {
  install(command: Command) {
    command.editorAdd({
      component: TuiEditor,
      scope: ["md"],
      option: {
        readme: {
          owner: "vuerd",
          repo: "vuerd-plugin-tui.editor"
        }
      }
    });
  }
};
