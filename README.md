# eediy_wiki

EE（电气电子工程）自学路线与笔记归档。参照 csdiy.wiki 的组织方式，把课程、教材、习题、项目和自己的笔记按成长路线分板块整理；站点基于 VitePress，内容全部以 Markdown 维护。

## 目录结构

```text
eediy_wiki/
├── docs/                          VitePress 站点根目录
│   ├── index.md                  站点首页（板块卡片导航）
│   ├── README.md                 EE 自学路线总览（板块关系与推荐顺序）
│   ├── .vitepress/config.mjs      站点配置（导航、侧边栏，占位骨架）
│   ├── templates/
│   │   └── course-template.md    单门课程 / 笔记模板
│   ├── 01-math-programming/      数理与编程基础
│   ├── 02-circuit-electronics/   电路与电子学
│   ├── 03-embedded-mcu/           嵌入式与单片机
│   ├── 04-motor-control/          电机与运动控制
│   ├── 05-power-system/          电力系统
│   ├── 06-signal-communication/  信号与通信
│   ├── 07-digital-fpga/          数字逻辑与 FPGA
│   └── 08-hardware-toolchain/     硬件工具链
├── assets/                        笔记配图与 PDF 等静态资源
│   ├── images/
│   └── pdf/
├── package.json                   VitePress 依赖与脚本（占位）
└── LICENSE                        MIT License
```

## 路线总览

完整板块关系、前置依赖与推荐学习顺序见 [docs/README.md](docs/README.md)。

| 板块 | 页面 | 一句话定位 |
|---|---|---|
| 01 数理与编程基础 | [docs/01-math-programming/](docs/01-math-programming/README.md) | 高数、线代、概率、大学物理、C 语言 |
| 02 电路与电子学 | [docs/02-circuit-electronics/](docs/02-circuit-electronics/README.md) | 电路原理、模电、数电 |
| 03 嵌入式与单片机 | [docs/03-embedded-mcu/](docs/03-embedded-mcu/README.md) | MCU 外设驱动、裸机与 RTOS |
| 04 电机与运动控制 | [docs/04-motor-control/](docs/04-motor-control/README.md) | 电机模型、FOC、闭环控制 |
| 05 电力系统 | [docs/05-power-system/](docs/05-power-system/README.md) | 潮流、机组组合、经济调度 |
| 06 信号与通信 | [docs/06-signal-communication/](docs/06-signal-communication/README.md) | 信号与系统、通信原理、DSP |
| 07 数字逻辑与 FPGA | [docs/07-digital-fpga/](docs/07-digital-fpga/README.md) | 数字逻辑、状态机、Verilog |
| 08 硬件工具链 | [docs/08-hardware-toolchain/](docs/08-hardware-toolchain/README.md) | PCB、仿真、测量、版本管理 |

## 本地预览

> 当前为 Markdown 骨架，VitePress 依赖尚未安装；需要 Node.js 18+ 环境。

```bash
npm install
npm run docs:dev       # 本地预览
npm run docs:build     # 构建静态站点（可部署到 GitHub Pages）
```

## 新增内容约定

- 新增课程或笔记：复制 [`docs/templates/course-template.md`](docs/templates/course-template.md)，放进对应板块目录，再回到该板块 README 的「我的笔记」补一行链接。
- 外部课程、教材、习题登记在板块 README 对应分区，写清名称、链接与一句话说明；自己写的笔记放在「我的笔记」。
- 尚未收集到的内容保留「（待补充）」占位，不凭印象填写课程名或链接。

## 许可证

代码与文档以 [MIT License](LICENSE) 发布。
