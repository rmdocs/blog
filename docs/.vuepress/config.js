module.exports = {
  title: "快乐的Recode小站",
  theme: "antdocs",
  description: "icbugcoder的个人开发日记！Recode it now!",
  head: [
    ["link", { rel: "icon", href: "/assets/icon.png" }],
    ["script", { type: "text/javascript", src: "/assets/js/push.js" }],
    // ['link', { rel: 'stylesheet', href: '/assets/css/prism-tomorrow.css' }],
    ["meta", { name: "referrer", content: "never" }],
    [
      "meta",
      {
        name: "keywords",
        content:
          "前端编程,前端开发,后端开发,Java,Go,Linux,Python,数据分析,PPT职场技能,antdocs,antdeisgn,vuepress,vuepress-theme,blog,vuepress-blog"
      }
    ]
  ],
  plugins: [
    [
      "sitemap",
      {
        hostname: "https://www.recode.fun/"
      }
    ]
  ],
  markdown: {
    lineNumbers: false,
    anchor: {
      permalinkBefore: false
    }
  },
  themeConfig: {
    isDarkMode: true,
    backToTop: true,
    smoothScroll: true,
    logo: "/assets/svg/logo.svg",
    nav: require("./config/nav"),
    sidebar: require("./config/sidebar"),
    sidebarDepth: 0,
    lastUpdated: "上次更新",
    repo: "https://github.com/rmdocs",
    editLinks: false,
    ads: {
      style: 2,
      items: [
        {
          text: "「阿里云盘」不限速就是快，点击就赠送你 500GB 快来试试吧！",
          image: "https://img.recode.fun/img-2022/20220821173912.png",
          link:
            "https://pages.aliyundrive.com/mobile-page/web/beinvited.html?code=68ea659"
        },
        {
          text:
            "流程图好工具一定要分享给最好的朋友，ProcessOn助您和好友一起高效学习办公！",
          image: "https://img.recode.fun/img-2022/20220821173929.png",
          link:
            "https://www.processon.com/i/5e3fb015e4b0cffec6dd1c40"
        },
        {
          text: "【腾讯云】多款云产品1折起，买云服务器送免费机器，最长免费续3个月",
          image: "https://img.recode.fun/img-2022/20220821173955.png",
          link: "https://curl.qcloud.com/axPJxlkW"
        }
      ]
    }
  }
  // configureWebpack: (config, isServer) => {
  //   // config.entry = glob.sync("./dist/*.js");
  //   if (!isServer) {
  //     config.output = {
  //       libraryTarget: "commonjs2",
  //       path: path.resolve(__dirname, "dist"),
  //       filename: "bundle.js"
  //     };
  //   }
  // }
};
