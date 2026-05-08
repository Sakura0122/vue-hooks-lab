# vue-hooks-lab

一个用于学习和实现 Vue hooks 的实验项目。

项目会参考 VueUse 中常见 hooks 的设计思路，逐步实现简化版本，用来理解组合式 API、响应式依赖收集和异步状态管理等核心机制。

## 当前内容

- `computedAsync`：基于 `watchEffect` 实现异步计算值，并处理过期异步结果。

## 目录结构

```txt
src/hooks/
└── core/
    └── computedAsync/
        ├── index.ts
        └── demo.vue
```

## 开发命令

```sh
pnpm install
pnpm dev
pnpm run type-check
pnpm lint
```
