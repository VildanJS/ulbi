import {ResolveOptions} from "webpack";
import path from "path";
import {IBuildOptions} from "./types/config";

export const buildResolvers = (options: IBuildOptions): ResolveOptions => {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
  }
}
