// EE自学指南（代号 EEDIY）· VitePress 站点配置
// 说明：当前目录先以 Markdown 骨架为主；待 Node 18+ 环境就绪后，
// 在仓库根执行 `npm install`，再用 `npm run docs:dev` 本地预览。
// 文档：https://vitepress.dev/zh/guide/getting-started

import { defineConfig } from 'vitepress'
import { mermaidMarkdown, mermaidPlugin } from 'vitepress-plugin-mermaid-viewer'

export default defineConfig({
  // 站点根路径：按 GitHub Pages 子路径 /eediy_wiki/ 占位；若改为根路径部署则置 '/'
  base: '/eediy_wiki/',
  title: 'EE自学指南',
  description: 'EE（电气电子工程）自学路线与笔记归档',
  lang: 'zh-CN',
  markdown: {
    config(md) {
      mermaidMarkdown(md)
    }
  },
  vite: {
    plugins: [mermaidPlugin()]
  },
  themeConfig: {
    nav: [
      { text: '路线地图', link: '/roadmap' },
      { text: '路线总览', link: '/README' },
      { text: '附录', link: '/appendix/README' },
      { text: '数理与编程基础', link: '/01-math-programming/README' }
    ],
    sidebar: [
      {
        text: '总览',
        items: [
          { text: '路线地图（依赖图 · 架构图）', link: '/roadmap' },
          { text: '路线总览（板块索引）', link: '/README' },
          { text: '附录总览', link: '/appendix/README' }
        ]
      },
      {
        text: '八大板块',
        items: [
          { text: '01 数理与编程基础', link: '/01-math-programming/README' },
          { text: '02 电路与电子学', link: '/02-circuit-electronics/README' },
          { text: '03 嵌入式与单片机', link: '/03-embedded-mcu/README' },
          { text: '04 电机与运动控制', link: '/04-motor-control/README' },
          { text: '05 电力系统', link: '/05-power-system/README' },
          { text: '06 信号与通信', link: '/06-signal-communication/README' },
          { text: '07 数字逻辑与 FPGA', link: '/07-digital-fpga/README' },
          { text: '08 硬件工具链', link: '/08-hardware-toolchain/README' }
        ]
      },
      {
        text: '附录资源',
        items: [
          { text: '电子书与经典教材', link: '/appendix/books' },
          { text: '公开课与慕课平台', link: '/appendix/courses' },
          { text: '资源与参考网站', link: '/appendix/resources' },
          { text: '软件与工具清单', link: '/appendix/tools' }
        ]
      }
    ],
    outline: { level: [2, 3] },
    socialLinks: [{ icon: 'github', link: 'https://github.com/Duckweed-yhb/eediy_wiki' }]
  }
})
