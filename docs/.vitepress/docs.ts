import {defineConfig} from 'vitepress'

export const docs = defineConfig({
  lang: 'zh-CN',
  description: 'LLTwoBot',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': {base: '/', items: sidebarGuide()},
      '/develop/': {base: '/', items: sidebarDevelop()},
      '/zh-CN/guide/': {base: '/zh-CN/', items: sidebarGuide()},
      '/zh-CN/develop/': {base: '/zh-CN/', items: sidebarDevelop()}
    },

    editLink: {
      pattern: 'https://github.com/LLOneBot/LLOneBotDoc/tree/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '页面导航'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式'
  }
})

function nav() {
  return [
    {text: '指南', link: '/guide/getting-started'},
    {text: '开发', link: '/develop/quick-start'}
  ];
}

function sidebarGuide() {
  return [
    {
      text: '基础配置',
      collapsed: false,
      items: [
        {text: '快速开始', link: 'guide/getting-started', activeMatch: '/guide/'},
        {text: '对接配置', link: 'guide/configuration', activeMatch: '/guide/'},
        {text: '开发对接', link: 'develop/quick-start', activeMatch: '/develop/quick-start'},
        {text: 'API 示例', link: 'develop/api', activeMatch: '/develop/api'},
        {text: '常见问题', link: 'guide/faq', activeMatch: '/guide/'},
        {text: '从零安装 NoneBot2', link: 'guide/nonebot2', activeMatch: '/guide/'}
      ]
    }, {
      text: '进阶配置',
      collapsed: false,
      items: [
        {text: '配置 FFmpeg', link: 'guide/ffmpeg', activeMatch: '/guide/'}
      ]

    }
  ];
}

function sidebarDevelop() {
  return [
    {
      text: '开发信息',
      collapsed: false,
      items: [
        {text: '快速开始', link: 'develop/quick-start', activeMatch: '/develop/'},
        {text: 'API 列表', link: 'develop/api', activeMatch: '/develop/api'},
        {text: '上报事件', link: 'develop/event', activeMatch: '/develop/event'},
        {text: '消息类型', link: 'develop/msg', activeMatch: '/develop/msg'},
        {text: '扩展 API', link: 'develop/extends_api', activeMatch: '/develop/extends_api'},
      ]
    }
  ];
}
