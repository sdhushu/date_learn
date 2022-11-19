import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '每天学习打卡',
  description: '当你焦虑的时候，行动起来！',
  themeConfig: {
    logo: '/logo.jpeg',
    siteTitle: '每天学习打卡',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sdhushu' }
    ],
    nav: [
      { text: '首页', link: '/index' }
    ],
    sidebar: [
      {
        text: '学习笔记',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '测试', link: '/guide/'}
        ]
      }
    ]
  }
})