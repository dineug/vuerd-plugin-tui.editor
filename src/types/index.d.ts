import { Command } from "vuerd-core";

export interface Option {
  imageUpload?: (blob: Blob, callback: (url: string) => void) => void;
}

export declare function install(command: Command, option?: Option): void;
declare const _default: {
  install: typeof install;
};

export default _default;
