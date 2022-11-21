import { defineConfig } from 'vitepress'

export default defineConfig({
  title: '每天学习打卡',
  base: '/date_learn/',
  description: '当你焦虑的时候，行动起来！',
  themeConfig: {
    logo: '/book.jpeg',
    siteTitle: '每天学习打卡',
    socialLinks: [
      { icon: 'github', link: 'https://github.com/sdhushu' }
    ],
    sidebar:{
      '/ding': [
        {
          text:'每日打卡',
          collapsible: true,
          collapsed: true,
          items: [{ text: '2022打卡详情', link: '/ding/'}]
        },
        {
          text: '跟着大佬学知识',
          items: [
            { text: 'day01', link: '/ding/day/01' },
            { text: 'day02', link: '/ding/day/02' }
          ]
        }

      ],
    }
  }
})
