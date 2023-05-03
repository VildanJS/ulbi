type BuildMode = 'production' | 'development';

export interface IBuildPaths {
  entry: string,
  build: string,
  html: string,
  src: string,
}
export interface IBuildOptions {
  mode: BuildMode,
  paths: IBuildPaths,
  isDev: boolean,
  port: number,
  apiUrl: string,
  projectName: 'storybook' | 'frontend' | 'jest'

}

export interface IBuildEnv {
  mode: BuildMode,
  port: number,
  apiUrl: string
}
