declare module '*.module.css';
declare module '*.module.scss';

declare module '*.svg' {
  import React from 'react'
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export default content
}

declare module '*.jpg' {
  const content: string
  export default content
}

declare module '*.png' {
  const content: string
  export default content
}

type DeepPartial<T> = T extends object ? {
  [P in keyof T]?: DeepPartial<T[P]>;
} : T;

/* eslint-disable  @typescript-eslint/no-explicit-any */
type OptionalRecord<K extends keyof any, T> = {
  [P in K]?: T;
};

declare const IS_DEV: boolean
declare const API_URL: string
declare const PROJECT_NAME: 'storybook' | 'frontend' | 'jest'

