/*
 * Author  rhys.zhao
 * Date  2023-03-02 14:02:43
 * LastEditors  rhys.zhao
 * LastEditTime  2023-06-20 14:12:27
 * Description
 */

module.exports = {
  base: '/react-learn/',
  lang: 'zh-CN',
  head: [['link', { rel: 'icon', href: '/imgs/favicon.ico' }]],
  title: '重学React',
  description: 'React官方文档学习总结',

  port: '8899',
  open: true,

  // 主题和它的配置
  theme: '@vuepress/theme-default',
  themeConfig: {
    logo: '/imgs/react-logo.png',
    repo: 'RhysZhao/react-learn',
    repoLabel: '点亮⭐收藏',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '为该章节纠错',
    lastUpdated: '上次更新',
    search: true,
    navbar: [
      {
        text: '😶‍🌫️ 基础篇',
        link: '/base/'
      },
      {
        text: '😶‍🌫️ 进阶篇',
        link: '/senior/'
      },
      {
        text: '🤔 原理篇',
        link: '/origin/'
      }
    ],
    sidebar: {
      '/base/': [
        {
          text: '基础篇',
          children: [
            '/base/README.md',
            '/base/pure-function.md',
            '/base/render-commit.md',
            '/base/use-state.md',
            '/base/use-ref.md',
            '/base/use-effect.md',
            '/base/use-layout-effect.md',
            '/base/custom-hook.md'
          ]
        }
      ],
      '/senior/': [
        {
          text: '进阶篇',
          children: [
            '/senior/README.md',
            '/senior/memo.md',
            '/senior/use-memo.md',
            '/senior/use-callback.md',
            '/senior/use-transition.md'
          ]
        }
      ],
      '/origin/': [
        {
          text: '原理篇',
          children: [
            '/origin/README.md',
            '/origin/prepare.md',
            '/origin/jsx.md',
            '/origin/render.md',
            '/origin/concurrency.md',
            '/origin/fiber.md',
            '/origin/render-commit.md',
            '/origin/reconciler.md',
            '/origin/func.md',
            '/origin/hooks.md'
          ]
        }
      ]
    }
  },
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search'
          },
          '/zh/': {
            placeholder: '搜索'
          }
        }
      }
    ]
  ]
};
