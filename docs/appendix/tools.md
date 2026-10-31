# 软件与工具清单

跨板块的硬件 / 工程工具索引。**上手教程、安装踩坑与配置笔记统一写在 [08 硬件工具链](../08-hardware-toolchain/README.md)**，本页只做分类导航，避免两边重复维护。

## 原理图与 PCB 设计

| 工具 | 平台 | 用途 | 官方链接 | 对应板块 | 上手笔记 |
|---|---|---|---|---|---|
| KiCad | 跨平台 · 开源 | 原理图与 PCB 全流程设计 | <https://www.kicad.org/> | 02、03 | [08 · 原理图与 PCB](../08-hardware-toolchain/README.md#原理图与-pcb) |
| 立创 EDA | 网页 / 客户端 | 国产快速画板、与立创商城物料打通 | <https://lceda.cn/> | 02、03 | [08 · 原理图与 PCB](../08-hardware-toolchain/README.md#原理图与-pcb) |
| Altium Designer | Windows | 专业级多层 PCB 设计 | <https://www.altium.com/altium-designer> | 02、03 | [08 · 原理图与 PCB](../08-hardware-toolchain/README.md#原理图与-pcb) |
| EasyEDA | 网页 / 客户端 | 在线原理图与 PCB | <https://easyeda.com/> | 02、03 | [08 · 原理图与 PCB](../08-hardware-toolchain/README.md#原理图与-pcb) |
| Proteus | Windows | 原理图 + 单片机仿真与联调 | <https://www.labcenter.com/> | 03 | [08 · 原理图与 PCB](../08-hardware-toolchain/README.md#原理图与-pcb) |

## 电路与系统仿真

| 工具 | 平台 | 用途 | 官方链接 | 对应板块 | 上手笔记 |
|---|---|---|---|---|---|
| LTspice | Windows / macOS | 模拟电路与电源电路仿真 | <https://www.analog.com/resources/design-tools-and-calculators/ltspice-simulator.html> | 02、05 | [08 · 仿真与计算](../08-hardware-toolchain/README.md#仿真与计算) |
| MATLAB / Simulink | Windows / macOS | 控制系统、电机建模与闭环仿真 | <https://www.mathworks.com/> | 04、05、06 | [08 · 仿真与计算](../08-hardware-toolchain/README.md#仿真与计算) |
| PLECS | Windows / macOS | 电力电子与电机系统时域仿真 | <https://www.plexim.com/products/plecs> | 04、05 | [08 · 仿真与计算](../08-hardware-toolchain/README.md#仿真与计算) |
| Multisim | Windows | 图形化 SPICE 教学与电路仿真 | <https://www.ni.com/en-us/shop/product/multisim.html> | 02 | [08 · 仿真与计算](../08-hardware-toolchain/README.md#仿真与计算) |
| Python（NumPy / SciPy / Matplotlib） | 跨平台 | 数值计算、数据处理与绘图 | <https://www.python.org/> | 01、06 | [08 · 仿真与计算](../08-hardware-toolchain/README.md#仿真与计算) |

## 嵌入式 IDE 与编译器

| 工具 | 平台 | 用途 | 官方链接 | 对应板块 | 上手笔记 |
|---|---|---|---|---|---|
| VS Code | 跨平台 | 通用编辑器，配合 C/C++ 插件 | <https://code.visualstudio.com/> | 03、07、08 | [08 · 开发与版本管理](../08-hardware-toolchain/README.md#开发与版本管理) |
| STM32CubeIDE | 跨平台 | STM32 工程创建、编译与调试 | <https://www.st.com/en/development-tools/stm32cubeide.html> | 03 | [08 · 开发与版本管理](../08-hardware-toolchain/README.md#开发与版本管理) |
| PlatformIO | 跨平台 | 多 MCU 平台统一开发环境 | <https://platformio.org/> | 03 | [08 · 开发与版本管理](../08-hardware-toolchain/README.md#开发与版本管理) |
| Arduino IDE | 跨平台 | AVR / ESP 系列快速入门 | <https://www.arduino.cc/en/software> | 03 | [08 · 开发与版本管理](../08-hardware-toolchain/README.md#开发与版本管理) |
| Keil MDK / IAR Embedded Workbench | Windows | 商用嵌入式编译与调试环境 | <https://www.keil.com/> | 03 | [08 · 开发与版本管理](../08-hardware-toolchain/README.md#开发与版本管理) |
| GCC / arm-none-eabi-gcc | 跨平台 | 命令行交叉编译工具链 | <https://gcc.gnu.org/> | 03、08 | [08 · 开发与版本管理](../08-hardware-toolchain/README.md#开发与版本管理) |

## 数字逻辑与 FPGA

| 工具 | 平台 | 用途 | 官方链接 | 对应板块 | 上手笔记 |
|---|---|---|---|---|---|
| Vivado | Windows / Linux | Xilinx / AMD FPGA 综合、布局布线与仿真 | <https://docs.amd.com/> | 07 | [08 · 开发与版本管理](../08-hardware-toolchain/README.md#开发与版本管理) |
| Intel Quartus Prime | Windows / Linux | Intel（Altera）FPGA 开发 | <https://www.intel.com/content/www/us/en/products/programmable.html> | 07 | [08 · 开发与版本管理](../08-hardware-toolchain/README.md#开发与版本管理) |
| ModelSim / Questa | Windows / Linux | 数字逻辑功能仿真与波形查看 | <https://www.intel.com/content/www/us/en/software/programmable/quartus-prime/model-sim.html> | 07 | [08 · 开发与版本管理](../08-hardware-toolchain/README.md#开发与版本管理) |

## 测量、调试与上位机

| 工具 | 平台 | 用途 | 官方链接 | 对应板块 | 上手笔记 |
|---|---|---|---|---|---|
| 串口调试助手 / PuTTY | 跨平台 | MCU 串口收发与日志查看 | <https://www.putty.org/> | 03、08 | [08 · 测量与调试](../08-hardware-toolchain/README.md#测量与调试) |
| 逻辑分析仪上位机（sigrok / PulseView） | 跨平台 | 数字信号时序抓取与解码 | <https://sigrok.org/> | 03、07、08 | [08 · 测量与调试](../08-hardware-toolchain/README.md#测量与调试) |
| 示波器 / 电源上位机 | 厂商配套 | 波形采集与电源参数读取 | Rigol <https://www.rigol.com/> | 02、04、08 | [08 · 测量与调试](../08-hardware-toolchain/README.md#测量与调试) |

## 绘图、文档与版本管理

| 工具 | 平台 | 用途 | 官方链接 | 对应板块 | 上手笔记 |
|---|---|---|---|---|---|
| diagrams.net（draw.io） | 网页 / 桌面 | 架构图、框图与流程图 | <https://app.diagrams.net/> | 全部 | [08 · 开发与版本管理](../08-hardware-toolchain/README.md#开发与版本管理) |
| Git | 跨平台 | 代码与文档版本管理 | <https://git-scm.com/> | 08 | [08 · 开发与版本管理](../08-hardware-toolchain/README.md#开发与版本管理) |
| VS Code + Markdown | 跨平台 | 笔记与文档编辑 | <https://code.visualstudio.com/> | 01、08 | [08 · 开发与版本管理](../08-hardware-toolchain/README.md#开发与版本管理) |

---

- 返回 [附录总览](./README.md)
- 工具安装与使用记录：[08 硬件工具链](../08-hardware-toolchain/README.md)
