import { Command } from "vuerd-core";

export interface Option {
  imageUpload?: (blob: Blob, callback: (url: string) => void) => void;
  scope?: string[] | RegExp[];
  exclude?: string[] | RegExp[];
  editorOption?: EditorOption;
}

export interface EditorOption {
  previewStyle?: PreviewStyle;
  exts?: Exts[];
  minHeight?: string;
  language?: string;
  useCommandShortcut?: boolean;
  useDefaultHTMLSanitizer?: boolean;
  usageStatistics?: boolean;
  hideModeSwitch?: boolean;
  toolbarItems?: ToolbarItems[];
}

export type PreviewStyle = "vertical";
export type Exts = "chart" | "uml" | "table" | "scrollSync";
export type ToolbarItems =
  | "heading"
  | "bold"
  | "italic"
  | "strike"
  | "divider"
  | "hr"
  | "quote"
  | "ul"
  | "ol"
  | "task"
  | "indent"
  | "outdent"
  | "table"
  | "image"
  | "link"
  | "code"
  | "codeblock";

export declare function install(command: Command, option?: Option): void;
declare const _default: {
  install: typeof install;
};

export default _default;
