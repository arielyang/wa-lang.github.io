---
title: 版本日志
---

# 版本日志

::: info v0.3.1 (2022-11-16)
  - 完善 WAT 后端, 支持多包
  - LLVM 后端支持基本数值运算 (依赖 clang 和 llc)
  - wazero 更新到 [v1.0.0-pre.3](https://github.com/wa-lang/wa/pull/37)
:::

::: info v0.3.0 (2022-10-28)
  - 启用 AGPLv3 开源协议
  - 增加 如何贡献代码 机制
  - 语言: 实现字符串类型
  - 启动 LLVM 后端
:::

::: info v0.2.3 (2022-10-18)
  - 支持 [JetBrains Fleet](https://github.com/wa-lang/fleet-wa) 语法高亮
  - Wat 后端改善对 [Slice](https://github.com/wa-lang/wa/blob/master/slice.wa) 支持
:::

::: info v0.2.2 (2022-10-11)
  - Windows 增加 exe 图标
  - Playground 改进异步加载wasm资源, 支持多个例子
  - Wat 后端改善全局变量支持
  - 增加 `#wa:xxx` 模式注释, 支持通过凹语言实现底层的 runtime 函数
  - 实验特性: 简化无参数和返回值函数定义
:::

::: info v0.2.1 (2022-09-16)
  - 支持纯浏览器编译执行: [https://wa-lang.org/playground](https://wa-lang.org/playground)
  - 命令行增加打印 logo 子命令
  - 本地支持被嵌入脚本模式执行
  - 修复格式化问题
:::

::: info v0.2.0 (2022-09-07)
  - 全面切换到 WAT 后端, 支持 Linux/macOS/Windows 平台
  - 简化命令行字命令, 不依赖任何第三方工具
  - 暂时去掉对字符串和浮点数的例子
:::

::: info v0.1.3 (2022-08-27)
  - 去掉 CGO 依赖
  - 去掉 `opa/wasm` 依赖
  - `#` 改为单行注释 
  - 简化命令行, 命令行支持执行单个文件
:::

::: info v0.1.2 (2022-08-15)
  - 增加 `#` 作为空格等价字符
:::

::: info v0.1.1 (2022-08-12)
  - LET 改成 VAR
:::

::: info v0.1.0 (2022-07-24)
  - 开源, 包含 LLVM 后端, 可运行简单例子
:::

::: info v0.0.0 (2018-00-00)
  - 凹名字诞生
:::