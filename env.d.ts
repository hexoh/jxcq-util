/// <reference types="vite/client" />

/** 声明 vite 环境变量的类型（如果未声明则默认是 any） */
declare interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
}