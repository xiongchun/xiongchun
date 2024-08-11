// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: '程序员老熊的博客网站®',
	tagline: '一个爱生活爱编程的程序员',
	url: 'https://xiongchun.github.io',
	//onBrokenLinks: 'throw',
	onBrokenLinks: 'ignore',
	//onBrokenMarkdownLinks: 'throw',
	onBrokenMarkdownLinks: 'ignore',
	favicon: 'img/favicon.ico',
	organizationName: '程序员老熊 熊春', // Usually your GitHub org/user name.
	projectName: '程序员老熊 熊春', // Usually your repo name.
	baseUrl: '/',
	//baseUrl: '/home',
	scripts: [
		//https://xiongchun.pulanit.com
		//{ src: 'https://hm.baidu.com/hm.js?a3851aa1c0b2c77a661cda32561aad26', async: true },
	],
	i18n: {
		defaultLocale: "zh-Hans",
		locales: ["zh-Hans"],
	  },
	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: 'docs',
					sidebarPath: require.resolve('./sidebars.js'),
					showLastUpdateAuthor: true,
					showLastUpdateTime: true,
					breadcrumbs: true,
				},
				blog: {
					blogTitle: '博客',
					showReadingTime: true,
					blogSidebarCount: 0,
					blogSidebarTitle: '最新发布博客',
					postsPerPage: 10,
					// Please change this to your repo.
					//editUrl: 'https://gitee.com/xiong-chun/pangu-framework/tree/master/pangu-website/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			}),
		],
	],
	plugins: [
		require.resolve('docusaurus-plugin-image-zoom')
	],
	themes:[
		[
			require.resolve("@easyops-cn/docusaurus-search-local"),
			({
				hashed: true,
				language: ["en", "zh"],
				highlightSearchTermsOnTargetPage:true,
				indexPages:true,
				searchResultLimits:10
			})
		]
	],
	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			zoom: {
				selector: '.markdown :not(em) > img,.markdown > img, article img[loading]',
				background: {
					light: 'rgb(255, 255, 255)',
					dark: 'rgb(50, 50, 50)'
				},
				// options you can specify via https://github.com/francoischalifour/medium-zoom#usage
				config: {}
			},
			docs: {
				sidebar: {
					hideable: true,
				}
			},
			navbar: {
				title: '程序员老熊博客®',
				hideOnScroll: true,
				logo: {
					alt: '程序员老熊博客网站',
					src: 'img/logo.svg',
				},
				items: [
				{
					to: 'blog/',
					label: '文章',
					position: 'right'
				},
				/* {
					position: "right",
					label: "分类",
					items: [
					  {
						label: "服务端开发（Java | Go | 数据库）",
						to: "blog/tags/服务端开发",
					  },
					  {
						label: "客户端开发（APP | Web | 桌面）",
						to: "blog/tags/前端开发",
					  },
					//   {
					// 	label: "移动端开发",
					// 	to: "/blog/tags/移动端开发",
					//   },
					  {
						label: "技术杂文（架构 | 中间件 | 运维 | 等）",
						to: "blog/tags/技术杂文",
					  },
					//   {
					// 	label: "人生杂文",
					// 	to: "/blog/tags/人生杂文",
					//   }
					// {
					// 	label: "查看所有标签",
					// 	to: "/blog/tags/",
					//   },
					]
				  }, */
				{
					to: 'blog/archive/',
					label: '归档',
					position: 'right'
				},
				{
					position: "right",
					label: "开源作品",
					items: [
					  {
						label: "盘古开发框架",
						to: "https://xiongchun.github.io/pangu-framework/",
					  },
					  {
						label: "AOSuite 开发平台 [EOL]",
						to: "blog/aosuite-eol/",
					  }
					]
				  },
				{
					href: '/about',
					label: '关于',
					position: 'right',
				},
				// {
				// 	to: 'https://space.bilibili.com/1517598861',
				// 	label: '我的 VLog',
				// 	position: 'right',
				// },
				{
					href: 'https://github.com/xiongchun',
					position: 'right',
					className: 'header-github-link'
				},
				{
					href: 'https://gitee.com/xiong-chun',
					position: 'right',
					className: 'header-gitee-link'
				}
				]
			},
			footer: {
				style: 'dark',
				copyright: `Copyright © ${new Date().getFullYear()} 程序员老熊博客网站® &nbsp; <a class="ghostwhite" href="https://beian.miit.gov.cn/" target="_blank">滇ICP备2022001611号-1</a>`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
			metadata: [
				{ name: 'author', content: '程序员老熊 熊春' },
				{ name: 'keywords', content: '程序员老熊 Xiong Chun 熊春 一个爱生活爱编程的程序员 盘古开发框架 Datacollie Java JavaFX Python' },
				// 百度站点收录验证
				{ name: 'baidu-site-verification', content: 'code-umYMvMmkhO' }
			]
		}),
};

module.exports = config;
