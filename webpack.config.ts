import webpack from 'webpack';
import {BuildWebPackConfig} from "./config/build/buildWebPackConfig";
import {IBuildEnv, IBuildPaths} from "./config/build/types/config";
import buildPathFromRoot from "./utils/buildPathFromRoot";

export default (env: IBuildEnv): webpack.Configuration => {
  const paths: IBuildPaths = {
    build: buildPathFromRoot('build'),
    entry: buildPathFromRoot('src', 'index.tsx'),
    html: buildPathFromRoot('public', 'index.html'),
    src: buildPathFromRoot('src'),
  }
  const mode = env.mode || 'development';
  const isDev = mode === 'development';
  const PORT = env.port || 3000;
  return BuildWebPackConfig(
    {
      mode,
      paths,
      isDev,
      port: PORT,
    }
  )

};

