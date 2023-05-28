---
title: 'butterfly插件集合'
date: 2023-05-28 16:26:10
ai: 适用于butterfly主题的插件
published: true
hideInList: true
categories: [博客魔改]
tags:
  - Butterfly
  - 博客魔改

isTop: false
cover: https://angang-us.imgs.moe/2023/05/21/6469ce74945fd.jpg
description: 适用于butterfly主题的插件
swiper_index: 12 #置顶轮播图顺序，非负整数，数字越大越靠前
---
# 一.hexo-butterfly-swiper-marcus
1.前言
{% hideToggle 点击查看 %}
这是一款基于hexo-butterfly-swiper插件为基础，加入了标签或分类显示（可以自定义）、热门文章（可以自定义）、安知鱼的创造力，让以butterfly为主题博客拥有了许多的扩展性和可玩性大大加强。
**插件参照教程**：
{% link https://blog.zhheo.com/,freenom,https://p.zhheo.com/20234681e06b8e086aa5b15481cb89fd38c7071002.png!cover,UI设计、交互设计、产品设计经验心得、SwiftUI开发技巧，分享Apple产品使用技巧、互联网干货分享、学习笔记记录。你可以在这里面找到很多关于UI设计相关的工具教程、思维技巧。还可以找到一些开发的小技巧。 %}
{% link https://anzhiy.cn/,安知鱼,https://img02.anzhiy.cn/adminuploads/1/2022/09/05/6315ec9737ac4.png %}
{% endhideToggle %}
2.安装和使用方法
{% hideToggle 点击查看教程 %}
(1).安装
在博客根目录[Blogroot]打开终端输入
`````
npm install hexo-butterfly-swiper-marcus --save
`````
在博客根目录package.json打开输入
`````
"hexo-butterfly-swiper-marcus": "^1.0.7",
`````
(2).添加配置信息
以下为写法示例 在站点配置文件或者主题配置文件_config.butterfly.yml中添加
`````
swiper:
    enable: true # 开关
    randomenable: true # 创造力开关
    priority: 5 #过滤器优先权
    enable_page: / # 应用页面
    timemode: date #date/updated
    layout: # 挂载容器类型
      type: id
      name: home_top
      index: 1
    category:
      - name: 前端
        path: /categories/前端/
        shadow: var(--marcus-shadow-blue)
        class: blue
        icon: fas fa-dove
      - name: 中学
        path: /categories/中学/
        shadow: var(--marcus-shadow-red)
        class: red
        icon: fas fa-burn
      - name: 生活
        path: /categories/生活/
        shadow: var(--marcus-shadow-green)
        class: green
        icon: fas fa-book
    above_title: 人间值得
    below_title: 未来可期
    subtitle: BLOG.MARCUS233.TOP
    default_descr: 再怎么看我也不知道怎么描述它的啦！
    swiper_css: https://cdn1.tianli0.top/npm/hexo-butterfly-swiper-marcus/lib/swiper.min.css #swiper css依赖
    swiper_js: https://cdn1.tianli0.top/npm/hexo-butterfly-swiper-marcus/lib/swiper.min.js #swiper js依赖 #swiper js依赖
    custom_css: https://cdn1.tianli0.top/npm/hexo-butterfly-swiper-marcus/lib/swiperstyle.min.css # 适配主题样式补丁
    custom_js: https://cdn1.tianli0.top/npm/hexo-butterfly-swiper-marcus/lib/swiper_init.min.js # swiper初始化方法
    categorygroup_css: https://cdn1.tianli0.top/npm/hexo-butterfly-swiper-marcus/lib/categoryGroup.min.css
`````
(3).插件参数
![微信图片_20230528165750.png](https://cdn-us.imgs.moe/2023/05/28/647317c1d97a3.png)
具体可以根据这篇文章
[新版首页轮播图](https://blog.marcus233.top/p/hometop2.html)
{% endhideToggle %}
3.插件问题解决方案
由于这个插件没有详细的说明创造力怎么弄，所以根据butterfly魔改群内大佬所给的链接以及安知鱼的butterfly魔改关于页面的教程来详细说明如何使用创造力，希望对大家有所帮助。
{% hideToggle 点击查看教程 %}
**添加 about 页面**
新建 source/about/index.md
`````
---
title: 关于
date: 2021-03-30 15:57:51
aside: false
top_img: false
background: "#f8f9fe"
comments: false
type: "about"
---
`````
**添加 html 结构**
新建 themes/butterfly/layout/includes/page/about.pug
里面的代码涉及到51统计，要加的话可以打开上面的魔改关于页面去详细的看，由于这边我没有用到51统计（在这边我不是原创，安知鱼才是原创，插件教程是marcus）
`````
#about-page
  .author-box
    .author-img
      img.no-lightbox(src='https://img02.anzhiy.cn/adminuploads/1/2022/09/15/63232b7d91d22.jpg')
    .image-dot
  p.p.center.logo.large 关于我
  p.p.center.small 生活明朗，万物可爱✨
  .author-content
    .author-content-item.myInfoAndSayHello
      .title1 你好，很高兴认识你👋
      .title2
        | 我叫
        span.inline-word 陈志伟
      .title1
        | 是一名 前端工程师、学生、独立开发者、
        span.inline-word 博主
    .aboutsiteTips.author-content-item
      .author-content-item-tips 追求
      h2
        | 源于
        br
        | 热爱而去
        span.inline-word 感受
        .mask
          span.first-tips 学习
          |
          span 生活
          |
          span(data-up) 程序
          |
          span(data-show) 体验

  .hello-about
    .cursor(style='translate:none;rotate:none;scale:none;transform:translate(721px,180px)')
    .shapes
      .shape.shape-1(style='translate:none;rotate:none;scale:none;transform:translate(721px,180px)')
      .shape.shape-2(style='translate:none;rotate:none;scale:none;transform:translate(721px,180px)')
      .shape.shape-3(style='translate:none;rotate:none;scale:none;transform:translate(721px,180px)')
    .content
      h1 Hello there!

  .author-content
    .author-content-item.skills
      .card-content
        .author-content-item-tips 技能
        span.author-content-item-title 开启创造力
        .skills-style-group
          .tags-group-all
            .tags-group-wrapper
              each i in site.data.creativity
                - const evenNum = i.creativity_list.filter((x, index) => index % 2 === 0);
                - const oddNum = i.creativity_list.filter((x, index) => index % 2 === 1);
                each item, index in i.creativity_list
                  if ((index+1 <= evenNum.length) && (index+1 <= oddNum.length))
                    .tags-group-icon-pair
                      .tags-group-icon(style=`background: ${evenNum[index].color}`)
                        img.no-lightbox(title=evenNum[index].name, src=evenNum[index].icon)
                      .tags-group-icon(style=`background: ${oddNum[index].color}`)
                        img.no-lightbox(title=oddNum[index].name, src=oddNum[index].icon)
          .skills-list
            each i in site.data.creativity
              each item, index in i.creativity_list
                .skill-info
                  .skill-icon(style=`background: ${item.color}`)
                    img.no-lightbox(title=item.name, src=item.icon)
                  .skill-name
                    span=item.name
            .etc ...
    .author-content-item.careers
      .card-content
        .author-content-item-tips 生涯
        span.author-content-item-title 无限进步
        .careers-group
          .careers-item
            .circle(style='background:#357ef5')
            .name EDU,软件工程专业
        img.author-content-img.no-lightbox(alt='生涯', src='https://img02.anzhiy.cn/adminuploads/1/2022/09/26/6330e9bcc39cc.png')

  .author-content
    .about-statistic.author-content-item
      .card-content
        .author-content-item-tips 数据
        span.author-content-item-title 访问统计
        #statistic
        .post-tips
          | 统计信息来自
          a(href='https://invite.51.la/1NzKqTeb?target=V6', target='_blank', rel='noopener nofollow') 51la网站统计
        .banner-button-group
          a.banner-button(onclick='pjax.loadUrl("/archives/")', data-pjax-state)
            i.fas.fa-circle-right
            |
            span.banner-button-text 文章隧道
    .author-content-item-group.column.mapAndInfo
      .author-content-item.map.single
        span.map-title
          | 我现在住在
          b 中国，长沙市
      .author-content-item.selfInfo.single
        div
          span.selfInfo-title 生于
          |
          span.selfInfo-content#selfInfo-content-year(style='color:#43a6c6') 2002
        div
          span.selfInfo-title 湖南信息学院
          |
          span.selfInfo-content(style='color:#c69043') 软件工程
        div
          span.selfInfo-title 现在职业
          |
          span.selfInfo-content(style='color:#b04fe6') 大三学生👨‍🎓

  .author-content
    .author-content-item.personalities
      .author-content-item-tips 性格
      span.author-content-item-title 执政官
      .title2(style='color:#ac899c') ESFJ-A
      .post-tips
        | 在
        a(href='https://www.16personalities.com/', target='_blank', rel='noopener nofollow') 16personalities
        |  了解更多关于
        a(target='_blank', rel='noopener external nofollow', href='https://www.16personalities.com/ch/esfj-%E4%BA%BA%E6%A0%BC') 执政官
      .image
        img.no-lightbox(src='https://npm.elemecdn.com/anzhiyu-blog@2.0.8/img/svg/ESFJ-A.svg')
    .author-content-item.myphoto
      img.author-content-img.no-lightbox(alt='自拍', src='https://img02.anzhiy.cn/adminuploads/1/2022/09/24/632e9643611ec.jpg')

  .author-content
    .author-content-item.maxim
      .author-content-item-tips 座右铭
      span.maxim-title
        span(style='opacity:.6;margin-bottom:8px') 生活明朗，
        |
        span 万物可爱。
    .author-content-item.buff
      .card-content
        .author-content-item-tips 特长
        span.buff-title
          span(style='opacity:.6;margin-bottom:8px')
            | 脑回路新奇的
            span.inline-word 酸菜鱼
          |
          span
            | 二次元指数
            span.inline-word MAX
      .card-background-icon
        i.fas.fa-dice-d20

  .author-content
    .author-content-item.game-yuanshen
      .card-content
        .author-content-item-tips 爱好游戏
        span.author-content-item-title 原神
        .content-bottom
          .icon-group
            .loading-bar(role='presentation', aria-hidden='true')
              img.no-lightbox(src='https://yuanshen.site/imgs/loading-bar.png', alt='Loading...', longdesc='https://ys.mihoyo.com/main/')
          .tips.game-yuanshen-uid UID: 125766904
    .author-content-item.comic-content
      .card-content
        .author-content-item-tips 爱好番剧
        span.author-content-item-title 紫罗兰的永恒花园
        .content-bottom
          .banner-button-group
            a.banner-button(onclick='window.open("https://www.bilibili.com/bangumi/play/ep173286?from=search&seid=10927182858100936967&from_spmid=666.25.episode.0")', data-pjax-state)
              i.fas.fa-circle-right
              |
              span.banner-button-text 立即追番

  .author-content
    .author-content-item.like-technology
      .card-content
        .author-content-item-tips 关注偏好
        span.author-content-item-title 数码科技
        .content-bottom
          .tips 手机、电脑软硬件
    .author-content-item.like-music
      .card-content
        .author-content-item-tips 音乐偏好
        span.author-content-item-title 许嵩、民谣、
        |
        span.author-content-item-title 华语流行
        .content-bottom
          .tips 跟 安知鱼 一起欣赏更多音乐
        .banner-button-group
          a.banner-button(onclick='pjax.loadUrl("/music/")', data-pjax-state)
            i.fas.fa-circle-right
            |
            span.banner-button-text 更多推荐

  .author-content
    .create-site-post.author-content-item.single
      .author-content-item-tips 心路历程
      | 欢迎来到我的博客 😝，这里是我记笔记的地方 🙌，目前就读于长沙
      strong 湖南信息学院
      | 的
      strong 软件工程
      | 专业，虽然有时候常常会忘记更新笔记，咕咕 ✋~ 但是记笔记真的是一个很棒的习惯 💪，能把学下来的知识进行积累，沉淀，有一句话说的好，能教给别人的知识，才是真正学会了的知识 ⚡ 每周我都会尽量进行更新 ☁️，如果没更的话，可能是我忘了，也可能是我在钻研某个东西的时候太入迷了
      psw 肯定又熬夜了
      del 同学们不要学我，老是熬夜会长痘
      |  给大家推荐一部番：
      .site-card-group
        a.site-card(target='_blank', href='https://www.bilibili.com/bangumi/play/ss21542/?from=search&seid=10927182858100936967', data-title='紫罗兰的永恒花园')
          .wrapper.cover
            img.cover.fadeIn(src='https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/violet.jpg')
          .info
            img.flink-avatar(src='https://static.hdslb.com/images/favicon.ico', style='top: 19px')
            span.site-title 紫罗兰的永恒花园
      | 因为这部番，2018 年的一个夏天我看完以后心情久久不能释怀，为薇尔莉特与爱感到一种说不上来的味道，多年以后在看这部番，才明白原来这就是爱，喜欢这部番不仅仅是因为它制作的用心，不论是人物细节还是场景细节，不管是 op 还是 ed 都非常好听，最后的结局或许才是让我不能忘怀的原因，薇尔莉特，希望收到来自家人，朋友，恋人的那封 "信" ~
      .checkbox.blue.checked
        input(type='checkbox', checked)
        p
          | 致力于成为一个前端小姥🐷
          img.inline-img(src='https://cdn1.tianli0.top/gh/volantis-x/cdn-emoji/aru-l/0000.gif/' data-fancybox='gallery', style='display: inline;margin: 0 3px;height: 1.1em;vertical-align: text-bottom;')
      .checkbox.blue.checked
        input(type='checkbox', checked)
        p
          | 又菜又爱玩🎮
          kbd ctrl
          |  +
          kbd C
          | 、
          kbd ctrl
          |  +
          kbd V
          | 高级CV工程师🏆
      .checkbox.times.red.checked
        input(type='checkbox', checked)
        p 擅长PS、Pr、Ae、Au、Ai、Dw、An、Id等软件的安装与卸载🎃
      .checkbox.times.red.checked
        input(type='checkbox', checked)
        p 精通Html、CSS、JavaScript、Vue、React、PHP、Java、Python、C、C++、C#、Go、TypeScript等单词的拼写🎲
      .checkbox.times.red.checked
        input(type='checkbox', checked)
        p 熟悉Windows、Linux、Mac、Android、IOS等系统的开关机👻
      span.p.h3 todoList
      .checkbox.checked
        input(type='checkbox', checked)
        p 原生微信小程序
      .checkbox.checked
        input(type='checkbox', checked)
        p vue3、vite、 pinia
      .checkbox.checked
        input(type='checkbox', checked)
        p 重装文档重写
      .checkbox
        input(type='checkbox')
        p Electron
      .checkbox
        input(type='checkbox')
        p 操作系统
      .checkbox.canvas
        input(type='checkbox')
        p svg绘制
      .checkbox
        input(type='checkbox')
        p threeJS
      .checkbox.Nuxt
        input(type='checkbox')
        p Next
      .checkbox
        input(type='checkbox')
        p Flutter
      .checkbox
        input(type='checkbox')
        p 智慧城市大前端
      .checkbox
        input(type='checkbox')
        p react18系统学习
      .checkbox
        input(type='checkbox')
        p 工业企业生产管理
      .checkbox
        input(type='checkbox')
        p 语言的魅力

  .author-content
    .author-content-item.single.reward
      .author-content-item-tips 致谢
      span.author-content-item-title 赞赏名单
      .author-content-item-description 感谢因为有你们，让我更加有创作的动力。
        each i in site.data.reward
          - let rawData = [...i.reward_list]
          .reward-list-all
            - let reward_list_amount = i.reward_list.sort((a,b)=>b.amount -  a.amount)
            each item, index in reward_list_amount
              .reward-list-item
                .reward-list-item-name=item.name
                .reward-list-bottom-group
                  if item.amount >= 50
                    .reward-list-item-money(style='background:var(--anzhiyu-yellow)')=`¥${item.amount}`
                  else
                    .reward-list-item-money=`¥${item.amount + (item.suffix ? item.suffix : "")}`
                  .datatime.reward-list-item-time(datatime=item.datatime)=new Date(item.datatime).toISOString().slice(0, -14)
          .reward-list-updateDate
            | 最新更新时间：
            time.datatime.reward-list-updateDate-time(datatime=rawData[0].datatime)=new Date(rawData[0].datatime).toISOString().slice(0, -14)
      .post-reward
        button.tip-button.reward-button
          span.tip-button__text 不给糖果就捣蛋
          .coin-wrapper
            .coin
              .coin__middle
              .coin__back
              .coin__front
          .reward-main
            ul.reward-all
              li.reward-item
                a(href='https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/qrcode-weichat.png', target='_blank')
                  img.post-qr-code-img(alt='wechat', src='https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/qrcode-weichat.png')
                .post-qr-code-desc wechat
              li.reward-item
                a(href='https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/qrcode-alipay.png', target='_blank')
                  img.post-qr-code-img(alt='alipay', src='https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/qrcode-alipay.png')
                .post-qr-code-desc alipay

script(src=url_for(theme.CDN.option.countup_js))
script.
  (() => {
    function isInViewPortOfOne(el) {
      if (!el) return;
      const viewPortHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const offsetTop = el.offsetTop;
      const scrollTop = document.documentElement.scrollTop;
      const top = offsetTop - scrollTop;
      return top <= viewPortHeight;
    }
    fetch('https://v6-widget.51.la/v6/{掩码ID}/quote.js').then(res => res.text()).then((data) => {
        let title = ['最近活跃', '今日人数', '今日访问', '昨日人数', '昨日访问', '本月访问', '总访问量']
        let num = data.match(/(<\/span><span>).*?(\/span><\/p>)/g)

        num = num.map((el) => {
          let val = el.replace(/(<\/span><span>)/g, '')
          let str = val.replace(/(<\/span><\/p>)/g, '')
          return str
        })

        let statisticEl = document.getElementById('statistic')

        // 自定义不显示哪个或者显示哪个，如下为不显示 最近活跃访客 和 总访问量
        let statistic = []
        for (let i = 0; i < num.length; i++) {
            if (!statisticEl) return
            if (i == 0 || i == num.length - 1) continue;
            statisticEl.innerHTML += '<div><span>' + title[i] + '</span><span id='+ title[i] + '>' + num[i] + '</span></div>'
            queueMicrotask(()=> {
              statistic.push(new CountUp(title[i], 0, num[i], 0, 2, {
                  useEasing: true,
                  useGrouping: true,
                  separator: ',',
                  decimal: '.',
                  prefix: '',
                  suffix: ''
              }))
            })
        }

        function statisticUP () {
          let statisticElment = document.querySelector('.about-statistic.author-content-item');
          if(isInViewPortOfOne(statisticElment)) {
            for (let i = 0; i < num.length; i++) {
              if (i == 0 || i == num.length - 1) continue;
              statistic[i-1].start();
            }
            document.removeEventListener('scroll', throttleStatisticUP);
          }
        }

        const selfInfoContentYear = new CountUp('selfInfo-content-year', 0, 2002, 0, 2, {
          useEasing: true,
          useGrouping: false,
          separator: ',',
          decimal: '.',
          prefix: '',
          suffix: ''
        })

        function scrollSelfInfoContentYear() {
          let selfInfoContentYearElment = document.querySelector('.author-content-item.selfInfo.single');
          if (selfInfoContentYearElment && isInViewPortOfOne(selfInfoContentYearElment)) {
            selfInfoContentYear.start()
            document.removeEventListener('scroll', throttleScrollSelfInfoContentYear);
          }
        }
        const throttleStatisticUP = btf.throttle(statisticUP, 200)
        document.addEventListener('scroll', throttleStatisticUP, {passive: true})

        const throttleScrollSelfInfoContentYear = btf.throttle(scrollSelfInfoContentYear, 200)
        document.addEventListener('scroll', throttleScrollSelfInfoContentYear, {passive: true})
    });

    var pursuitInterval = null;
      pursuitInterval = setInterval(function () {
        const show = document.querySelector('span[data-show]')
        const next = show.nextElementSibling || document.querySelector('.first-tips')
        const up = document.querySelector('span[data-up]')

        if (up) {
          up.removeAttribute('data-up')
        }

        show.removeAttribute('data-show')
        show.setAttribute('data-up', '')

        next.setAttribute('data-show', '')
      }, 2000)

      document.addEventListener('pjax:send', function(){
        clearInterval(pursuitInterval);
      });

      var helloAboutEl = document.querySelector('.hello-about')
      helloAboutEl.addEventListener("mousemove", evt => {
        const mouseX = evt.offsetX;
        const mouseY = evt.offsetY;
        gsap.set(".cursor", {
          x: mouseX,
          y: mouseY,
        })

        gsap.to(".shape", {
          x: mouseX,
          y: mouseY,
          stagger: -0.1
        })
      })
  })()
`````
如果没有引入过 gsap 需要引入 gsap 来让 hello-about 的部分动起来, 需要在第316行 添加
`````
script(src=url_for(theme.CDN.option.countup_js))
+script(src="https://lf26-cdn-tos.bytecdntp.com/cdn/expire-1-M/gsap/3.9.1/gsap.min.js")
script.
`````
**加入 countup_js cdn 选项**
使用的 countupJs 来实现数字递增滚动效果，如不需要可不做这一步，并去除 about.pug 中 js 的监听
修改_config.butterfly.yml, 注意缩进
`````
  CDN:
    option:
      # main_css:
      .....
+     # countupJS
+     countup_js: /js/countup.js
`````
新建 source/js/countup.js
`````
var CountUp = function (target, startVal, endVal, decimals, duration, options) {
  var self = this;
  self.version = function () {
    return "1.9.2";
  };
  self.options = {
    useEasing: true,
    useGrouping: true,
    separator: ",",
    decimal: ".",
    easingFn: easeOutExpo,
    formattingFn: formatNumber,
    prefix: "",
    suffix: "",
    numerals: [],
  };
  if (options && typeof options === "object") {
    for (var key in self.options) {
      if (options.hasOwnProperty(key) && options[key] !== null) {
        self.options[key] = options[key];
      }
    }
  }
  if (self.options.separator === "") {
    self.options.useGrouping = false;
  } else {
    self.options.separator = "" + self.options.separator;
  }
  var lastTime = 0;
  var vendors = ["webkit", "moz", "ms", "o"];
  for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
    window.requestAnimationFrame = window[vendors[x] + "RequestAnimationFrame"];
    window.cancelAnimationFrame =
      window[vendors[x] + "CancelAnimationFrame"] || window[vendors[x] + "CancelRequestAnimationFrame"];
  }
  if (!window.requestAnimationFrame) {
    window.requestAnimationFrame = function (callback, element) {
      var currTime = new Date().getTime();
      var timeToCall = Math.max(0, 16 - (currTime - lastTime));
      var id = window.setTimeout(function () {
        callback(currTime + timeToCall);
      }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };
  }
  if (!window.cancelAnimationFrame) {
    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };
  }
  function formatNumber(num) {
    num = num.toFixed(self.decimals);
    num += "";
    var x, x1, x2, x3, i, l;
    x = num.split(".");
    x1 = x[0];
    x2 = x.length > 1 ? self.options.decimal + x[1] : "";
    if (self.options.useGrouping) {
      x3 = "";
      for (i = 0, l = x1.length; i < l; ++i) {
        if (i !== 0 && i % 3 === 0) {
          x3 = self.options.separator + x3;
        }
        x3 = x1[l - i - 1] + x3;
      }
      x1 = x3;
    }
    if (self.options.numerals.length) {
      x1 = x1.replace(/[0-9]/g, function (w) {
        return self.options.numerals[+w];
      });
      x2 = x2.replace(/[0-9]/g, function (w) {
        return self.options.numerals[+w];
      });
    }
    return self.options.prefix + x1 + x2 + self.options.suffix;
  }
  function easeOutExpo(t, b, c, d) {
    return (c * (-Math.pow(2, (-10 * t) / d) + 1) * 1024) / 1023 + b;
  }
  function ensureNumber(n) {
    return typeof n === "number" && !isNaN(n);
  }
  self.initialize = function () {
    if (self.initialized) {
      return true;
    }
    self.error = "";
    self.d = typeof target === "string" ? document.getElementById(target) : target;
    if (!self.d) {
      self.error = "[CountUp] target is null or undefined";
      return false;
    }
    self.startVal = Number(startVal);
    self.endVal = Number(endVal);
    if (ensureNumber(self.startVal) && ensureNumber(self.endVal)) {
      self.decimals = Math.max(0, decimals || 0);
      self.dec = Math.pow(10, self.decimals);
      self.duration = Number(duration) * 1000 || 2000;
      self.countDown = self.startVal > self.endVal;
      self.frameVal = self.startVal;
      self.initialized = true;
      return true;
    } else {
      self.error = "[CountUp] startVal (" + startVal + ") or endVal (" + endVal + ") is not a number";
      return false;
    }
  };
  self.printValue = function (value) {
    var result = self.options.formattingFn(value);
    if (self.d.tagName === "INPUT") {
      this.d.value = result;
    } else {
      if (self.d.tagName === "text" || self.d.tagName === "tspan") {
        this.d.textContent = result;
      } else {
        this.d.innerHTML = result;
      }
    }
  };
  self.count = function (timestamp) {
    if (!self.startTime) {
      self.startTime = timestamp;
    }
    self.timestamp = timestamp;
    var progress = timestamp - self.startTime;
    self.remaining = self.duration - progress;
    if (self.options.useEasing) {
      if (self.countDown) {
        self.frameVal = self.startVal - self.options.easingFn(progress, 0, self.startVal - self.endVal, self.duration);
      } else {
        self.frameVal = self.options.easingFn(progress, self.startVal, self.endVal - self.startVal, self.duration);
      }
    } else {
      if (self.countDown) {
        self.frameVal = self.startVal - (self.startVal - self.endVal) * (progress / self.duration);
      } else {
        self.frameVal = self.startVal + (self.endVal - self.startVal) * (progress / self.duration);
      }
    }
    if (self.countDown) {
      self.frameVal = self.frameVal < self.endVal ? self.endVal : self.frameVal;
    } else {
      self.frameVal = self.frameVal > self.endVal ? self.endVal : self.frameVal;
    }
    self.frameVal = Math.round(self.frameVal * self.dec) / self.dec;
    self.printValue(self.frameVal);
    if (progress < self.duration) {
      self.rAF = requestAnimationFrame(self.count);
    } else {
      if (self.callback) {
        self.callback();
      }
    }
  };
  self.start = function (callback) {
    if (!self.initialize()) {
      return;
    }
    self.callback = callback;
    self.rAF = requestAnimationFrame(self.count);
  };
  self.pauseResume = function () {
    if (!self.paused) {
      self.paused = true;
      cancelAnimationFrame(self.rAF);
    } else {
      self.paused = false;
      delete self.startTime;
      self.duration = self.remaining;
      self.startVal = self.frameVal;
      requestAnimationFrame(self.count);
    }
  };
  self.reset = function () {
    self.paused = false;
    delete self.startTime;
    self.initialized = false;
    if (self.initialize()) {
      cancelAnimationFrame(self.rAF);
      self.printValue(self.startVal);
    }
  };
  self.update = function (newEndVal) {
    if (!self.initialize()) {
      return;
    }
    newEndVal = Number(newEndVal);
    if (!ensureNumber(newEndVal)) {
      self.error = "[CountUp] update() - new endVal is not a number: " + newEndVal;
      return;
    }
    self.error = "";
    if (newEndVal === self.frameVal) {
      return;
    }
    cancelAnimationFrame(self.rAF);
    self.paused = false;
    delete self.startTime;
    self.startVal = self.frameVal;
    self.endVal = newEndVal;
    self.countDown = self.startVal > self.endVal;
    self.rAF = requestAnimationFrame(self.count);
  };
  if (self.initialize()) {
    self.printValue(self.startVal);
  }
};
`````
**判断 type=’about’ 引入结构**
修改themes/butterfly/layout/page.pug, 在 case 中加入判断, 注意缩进
`````
    case page.type
      when 'tags'
        include includes/page/tags.pug
+     when 'about'
+       include includes/page/about.pug
`````
**添加 css**
新建以下6个css。
注意博主已在 themes/butterfly/source/css/index.styl 中整合了 css, 未整合的需自行一个一个引入, 如需整合可以在themes/butterfly/source/css/index.styl中加入以下代码：
`````
// project
@import 'var'
@import '_global/*'
@import '_highlight/highlight'
@import '_page/*'
@import '_layout/*'
@import '_tags/*'
@import '_mode/*'
+@import '_custom/*.css'

// search
if hexo-config('algolia_search.enable')
  @import '_search/index'
  @import '_search/algolia'
`````
新建themes/butterfly/source/css/_custom/about/about.css
`````
#gitcalendar {
  margin: 0 auto;
  border-radius: 24px;
  background: var(--anzhiyu-card-bg);
  border: var(--style-border-always);
  box-shadow: var(--anzhiyu-shadow-border);
  position: relative;
  padding: 1rem 2rem;
  overflow: hidden;
}

#page:has(#about-page) {
  border: 0;
  box-shadow: none !important;
  padding: 0 !important;
  background: transparent !important;
}

#page:has(#about-page) .page-title {
  display: none;
}

.page:has(#about-page) #footer-wrap {
  opacity: 1;
  overflow: visible;
  height: auto !important;
  min-height: 16px;
  color: #666;
}

#web_bg ~ .page:has(#about-page) {
  background: var(--anzhiyu-background);
}

#about-page .author-box {
  position: relative;
}
#about-page .author-box .author-img {
  margin: auto;
  border-radius: 50%;
  overflow: hidden;
  width: 180px;
  height: 180px;
}
#about-page .author-box .author-img img {
  border-radius: 50%;
  overflow: hidden;
  width: 180px;
  height: 180px;
}

#about-page .author-box .image-dot {
  width: 45px;
  height: 45px;
  background: #6bdf8f;
  position: absolute;
  border-radius: 50%;
  border: 6px solid var(--anzhiyu-background);
  top: 50%;
  left: 50%;
  transform: translate(35px, 45px);
}

.author-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
}

#about-page .myInfoAndSayHello {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: var(--anzhiyu-white);
  background: linear-gradient(120deg, #5b27ff 0, #00d4ff 100%);
  background-size: 200%;
  animation: gradient 15s ease infinite;
  width: 59%;
}

.author-content-item {
  width: 49%;
  border-radius: 24px;
  background: var(--anzhiyu-card-bg);
  border: var(--style-border-always);
  box-shadow: var(--anzhiyu-shadow-border);
  position: relative;
  padding: 1rem 2rem;
  overflow: hidden;
}

#about-page .myInfoAndSayHello .title1 {
  opacity: 0.8;
  line-height: 1.3;
}

#about-page .myInfoAndSayHello .title2 {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.1;
  margin: 0.5rem 0;
}
.inline-word {
  word-break: keep-all;
  white-space: nowrap;
}

#about-page .myInfoAndSayHello .title1 {
  opacity: 0.8;
  line-height: 1.3;
}

.author-content-item.aboutsiteTips {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 39%;
}

.aboutsiteTips h2 {
  margin-right: auto;
  font-size: 36px;
  font-family: Helvetica;
  line-height: 1.06;
  letter-spacing: -0.02em;
  color: var(--font-color);
  margin-top: 0;
}

.aboutsiteTips .mask {
  height: 36px;
  position: relative;
  overflow: hidden;
  margin-top: 4px;
}
.aboutsiteTips .mask span {
  display: block;
  box-sizing: border-box;
  position: absolute;
  top: 36px;
  padding-bottom: var(--offset);
  background-size: 100% 100%;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  background-repeat: no-repeat;
}
.aboutsiteTips .mask span[data-show] {
  transform: translateY(-100%);
  transition: 0.5s transform ease-in-out;
}
.aboutsiteTips .mask span[data-up] {
  transform: translateY(-200%);
  transition: 0.5s transform ease-in-out;
}
.aboutsiteTips .mask span:nth-child(1) {
  background-image: linear-gradient(45deg, #0ecffe 50%, #07a6f1);
}
.aboutsiteTips .mask span:nth-child(2) {
  background-image: linear-gradient(45deg, #18e198 50%, #0ec15d);
}
.aboutsiteTips .mask span:nth-child(3) {
  background-image: linear-gradient(45deg, #8a7cfb 50%, #633e9c);
}
.aboutsiteTips .mask span:nth-child(4) {
  background-image: linear-gradient(45deg, #fa7671 50%, #f45f7f);
}
@media screen and (max-width: 768px) {
  .author-content-item.map {
    margin-bottom: 0;
  }
}
#about-page .about-statistic {
  min-height: 380px;
  width: 39%;
  background: url(https://img02.anzhiy.cn/adminuploads/1/2022/09/23/632d634f8376d.jpg) no-repeat top;
  background-size: cover;
  color: var(--anzhiyu-white);
  overflow: hidden;
}
#about-page .about-statistic::after {
  box-shadow: 0 -159px 173px 71px #0c1c2c inset;
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}
.author-content-item .card-content {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
}

.author-content-item .card-content .author-content-item-title {
  margin-bottom: 0.5rem;
}
.author-content-item .author-content-item-title {
  font-size: 36px;
  font-weight: 700;
  line-height: 1;
}
#statistic {
  font-size: 16px;
  border-radius: 15px;
  width: 100%;
  color: var(--anzhiyu-white);
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
#statistic div span:first-child {
  opacity: 0.8;
  font-size: 0.6rem;
}
#statistic div span:last-child {
  font-weight: 700;
  font-size: 34px;
  line-height: 1;
  white-space: nowrap;
}
#statistic div {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 50%;
  margin-bottom: 0.5rem;
}

.post-tips {
  color: var(--anzhiyu-gray);
  font-size: 14px;
  position: absolute;
  bottom: 1rem;
  left: 2rem;
}
.post-tips a {
  color: var(--anzhiyu-gray) !important;
  border: none !important;
}
.author-content-item .card-content .banner-button-group {
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
}
.author-content-item .card-content .banner-button-group .banner-button {
  height: 40px;
  width: 124px;
  border-radius: 20px;
  justify-content: center;
  background: var(--anzhiyu-card-bg);
  color: var(--font-color);
  display: flex;
  align-items: center;
  z-index: 1;
  transition: 0.3s;
  cursor: pointer;
  border-bottom: 0 !important;
}
.author-content-item .card-content .banner-button-group .banner-button i {
  margin-right: 8px;
  font-size: 1rem;
}
#about-page .author-content-item .card-content .banner-button-group .banner-button i {
  font-size: 1.5rem;
}

.author-content-item .card-content .banner-button-group .banner-button:hover {
  background: var(--anzhiyu-main);
  color: var(--anzhiyu-white);
  border-radius: 20px !important;
}
.author-content-item.personalities {
  position: relative;
  width: 59%;
}

.author-content-item.personalities .image {
  position: absolute;
  right: 30px;
  top: 10px;
  width: 220px;
  transition: transform 2s cubic-bezier(0.13, 0.45, 0.21, 1.02);
}
.author-content-item.personalities .image img {
  display: block;
  margin: 0 auto 20px;
  max-width: 100%;
  transition: filter 375ms ease-in 0.2s;
}
.author-content-item.personalities:hover .image {
  transform: rotate(-10deg);
}
.author-content-item.myphoto {
  height: 60%;
  min-height: 240px;
  position: relative;
  overflow: hidden;
  width: 39%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.author-content-item.myphoto img {
  position: absolute;
  min-width: 100%;
  object-fit: cover;
  transition: 0.6s;
  animation: coverIn 2s ease-out forwards;
  transition: transform 2s ease-out !important;
}
.author-content-item.myphoto:hover img {
  transform: scale(1.1);
}
.author-content-item:hover .card-background-icon {
  transform: rotate(20deg);
}
.author-content-item.personalities .title2 {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.1;
}

.author-content-item.map {
  background: url(https://img02.anzhiy.cn/adminuploads/1/2022/09/24/632e6f48981d8.jpg) no-repeat center;
  min-height: 160px;
  max-height: 400px;
  position: relative;
  overflow: hidden;
  margin-bottom: 0.5rem;
  height: 60%;
  background-size: 100%;
  transition: 1s ease-in-out;
}
[data-theme="dark"] .author-content-item.map {
  background: url(https://img02.anzhiy.cn/adminuploads/1/2022/09/26/6330ebf1f3e65.jpg) no-repeat center;
  background-size: 100%;
}

.author-content-item.single {
  width: 100%;
}

.author-content-item.map .map-title {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background: var(--anzhiyu-maskbg);
  padding: 0.5rem 2rem;
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: blur(20px);
  transition: 1s ease-in-out;
  font-size: 20px;
}
.author-content-item.map .map-title b {
  color: var(--font-color);
}
.author-content-item.selfInfo {
  display: flex;
  min-height: 100px;
  max-height: 400px;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  height: -webkit-fill-available;
  height: 40%;
}
.author-content-item.selfInfo div {
  display: flex;
  flex-direction: column;
  margin: 0.5rem 2rem 0.5rem 0;
}
.author-content-item.selfInfo .selfInfo-title {
  opacity: 0.8;
  font-size: 0.6rem;
  line-height: 1;
  margin-bottom: 8px;
}
.author-content-item.selfInfo .selfInfo-content {
  font-weight: 700;
  font-size: 34px;
  line-height: 1;
}
.author-content-item-group.column.mapAndInfo {
  width: 59%;
}
.author-content-item.map:hover {
  background-size: 120%;
  transition: 4s ease-in-out;
  background-position-x: 0;
  background-position-y: 36%;
}
.author-content-item.map:hover .map-title {
  bottom: -100%;
}
.author-content-item-group.column {
  display: flex;
  flex-direction: column;
  width: 49%;
  justify-content: space-between;
}

.post-tips a:hover {
  color: var(--anzhiyu-main) !important;
  background: none !important;
}

.author-content-item.single.reward .reward-list-updateDate {
  color: var(--anzhiyu-gray);
  font-size: 14px;
}

.author-content-item.single.reward .post-reward {
  position: absolute;
  margin-top: 0px;
  width: auto;
  text-align: none;
  pointer-events: none;
  right: 2rem;
  top: 2rem;
}
.tip-button {
  border: 0;
  border-radius: 2.25rem;
  cursor: pointer;
  font-size: 20px;
  font-weight: 600;
  height: 2.6rem;
  margin-bottom: -4rem;
  outline: 0;
  position: relative;
  top: 0;
  transform-origin: 0 100%;
  transition: transform 50ms ease-in-out;
  width: auto;
  -webkit-tap-highlight-color: transparent;
}
.coin::before,
.coin__back,
.coin__back::after,
.coin__front,
.coin__front::after,
.coin__middle {
  border-radius: 50%;
  box-sizing: border-box;
  height: 100%;
  left: 0;
  position: absolute;
  width: 100%;
  z-index: 3;
}
.coin-wrapper {
  background: 0 0;
  bottom: 0;
  height: 18rem;
  left: 0;
  opacity: 1;
  overflow: hidden;
  pointer-events: none;
  position: absolute;
  transform: none;
  transform-origin: 50% 100%;
  transition: opacity 0.2s linear 0.1s, transform 0.3s ease-out;
  width: 100%;
}
.coin__front::after {
  background: rgba(0, 0, 0, 0.2);
  content: "";
  opacity: var(--front-y-multiplier);
}
.coin__back::after {
  background: rgba(0, 0, 0, 0.2);
  content: "";
  opacity: var(--back-y-multiplier);
}
.coin__middle {
  background: #737c99;
  transform: translateY(calc(var(--middle-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--middle-scale-multiplier));
}
.coin::before {
  background: radial-gradient(circle at 25% 65%, transparent 50%, rgba(255, 255, 255, 0.9) 90%), linear-gradient(55deg, transparent
        calc(var(--shine-bg-multiplier) + 0), #e9f4ff calc(var(--shine-bg-multiplier) + 0), transparent calc(var(
              --shine-bg-multiplier
            ) + 50%));
  content: "";
  opacity: var(--shine-opacity-multiplier);
  transform: translateY(calc(var(--middle-y-multiplier) * 0.3181818182rem / -2)) scaleY(var(--middle-scale-multiplier))
    rotate(calc(var(--coin-rotation-multiplier) * 1deg));
  z-index: 10;
}

.coin {
  --front-y-multiplier: 0;
  --back-y-multiplier: 0;
  --coin-y-multiplier: 0;
  --coin-x-multiplier: 0;
  --coin-scale-multiplier: 0;
  --coin-rotation-multiplier: 0;
  --shine-opacity-multiplier: 0.4;
  --shine-bg-multiplier: 50%;
  bottom: calc(var(--coin-y-multiplier) * 1rem - 3.5rem);
  height: 3.5rem;
  margin-bottom: 3.05rem;
  position: absolute;
  right: calc(var(--coin-x-multiplier) * 34% + 16%);
  transform: translateX(50%) scale(calc(0.4 + var(--coin-scale-multiplier))) rotate(calc(var(
            --coin-rotation-multiplier
          ) * -1deg));
  transition: opacity 0.1s linear 0.2s;
  width: 3.5rem;
  z-index: 3;
}

.coin__back {
  background: radial-gradient(circle at 50% 50%, transparent 50%, rgba(115, 124, 153, 0.4) 54%, #c2cadf 54%),
    radial-gradient(circle at 50% 40%, #fcfaf9 23%, transparent 23%), radial-gradient(circle at 50% 100%, #fcfaf9 35%, transparent
        35%);
  background-color: #8590b3;
  background-size: 100% 100%;
  transform: translateY(calc(var(--back-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--back-scale-multiplier));
}
.coin__front {
  background: radial-gradient(circle at 50% 50%, transparent 50%, rgba(115, 124, 153, 0.4) 54%, #c2cadf 54%),
    linear-gradient(210deg, #8590b3 32%, transparent 32%), linear-gradient(150deg, #8590b3 32%, transparent 32%),
    linear-gradient(to right, #8590b3 22%, transparent 22%, transparent 78%, #8590b3 78%), linear-gradient(
      to bottom,
      #fcfaf9 44%,
      transparent 44%,
      transparent 65%,
      #fcfaf9 65%,
      #fcfaf9 71%,
      #8590b3 71%
    ), linear-gradient(to right, transparent 28%, #fcfaf9 28%, #fcfaf9 34%, #8590b3 34%, #8590b3 40%, #fcfaf9 40%, #fcfaf9
        47%, #8590b3 47%, #8590b3 53%, #fcfaf9 53%, #fcfaf9 60%, #8590b3 60%, #8590b3 66%, #fcfaf9 66%, #fcfaf9 72%, transparent
        72%);
  background-color: #8590b3;
  background-size: 100% 100%;
  transform: translateY(calc(var(--front-y-multiplier) * 0.3181818182rem / 2)) scaleY(var(--front-scale-multiplier));
}
.tip-button__text {
  color: #fff;
  margin-right: 1.8rem;
  opacity: 1;
  position: relative;
  transition: opacity 0.1s linear 0.5s;
  z-index: 3;
}
.author-content .post-reward .reward-main {
  bottom: 0;
  top: 50px;
  left: auto;
  right: 0;
}
.author-content .post-reward .reward-main .reward-all:before {
  top: -11px;
  bottom: auto;
}
#about-page .post-reward .reward-item a:hover {
  background: transparent !important;
}
#about-page .post-reward .reward-item a {
  border-bottom: none !important;
}
#about-page .post-reward .reward-item a img {
  margin-bottom: 0 !important;
}
#about-page .post-reward .reward-main .reward-all {
  border-radius: 10px;
  padding: 20px 10px !important;
}
.post-reward .reward-main .reward-all .reward-item {
  padding: 0 8px !important;
}
.post-reward .reward-main .reward-all li.reward-item::before {
  content: none !important;
}
.post-reward .reward-main .reward-all:after {
  content: none !important;
}
.author-content-item.maxim {
  font-size: 36px;
  font-weight: 700;
  line-height: 1.1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: 39%;
}
.author-content-item .author-content-item-tips {
  opacity: 0.8;
  font-size: 0.6rem;
  margin-bottom: 0.5rem;
}
.author-content-item.maxim .maxim-title {
  display: flex;
  flex-direction: column;
}
.author-content-item.buff {
  height: 200px;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.1;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  background: linear-gradient(120deg, #ff27e8 0, #ff8000 100%);
  color: var(--anzhiyu-white);
  background-size: 200%;
  animation: gradient 15s ease infinite;
  min-height: 200px;
  height: fit-content;
  width: 59%;
}
.author-content-item.buff .card-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.author-content-item.buff .buff-title {
  display: flex;
  flex-direction: column;
}
.card-background-icon {
  font-size: 12rem;
  opacity: 0.2;
  position: absolute;
  right: 0;
  bottom: -40%;
  transform: rotate(30deg);
  transition: 2s ease-in-out;
}
.author-content-item.game-yuanshen {
  background: url(https://img02.anzhiy.cn/adminuploads/1/2022/12/19/63a079ca63c8a.webp) no-repeat top;
  background-size: cover;
  min-height: 300px;
  overflow: hidden;
  color: var(--anzhiyu-white);
  width: 59%;
}

.author-content-item .content-bottom {
  margin-top: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.author-content-item .content-bottom .icon-group {
  display: flex;
  position: relative;
}
.author-content-item .content-bottom .icon-group i {
  display: inline-block;
  width: 143px;
  height: 18px;
  margin-right: 0.5rem;
}
.icon-pos-mid {
  background: url(https://img02.anzhiy.cn/adminuploads/1/2022/09/25/632fb9cecfc8c.png);
}
.author-content-item.game-yuanshen::after {
  box-shadow: 0 -69px 203px 11px #575d8b inset;
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.author-content-item.comic-content {
  width: 39%;
  background: url(https://npm.elemecdn.com/anzhiyu-blog@1.1.6/img/post/common/violet.jpg) no-repeat top;
  background-size: cover;
  min-height: 300px;
  overflow: hidden;
  color: violet;
}
.author-content-item.comic-content::after {
  box-shadow: 0 -48px 203px 11px #fbe9b8 inset;
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.author-content-item.like-technology {
  background: url(https://img02.anzhiy.cn/adminuploads/1/2022/09/24/632f0dd8f33c6.webp) no-repeat;
  background-size: cover;
  min-height: 230px;
  color: var(--anzhiyu-white);
}

.author-content-item.like-music {
  background: url(https://p2.music.126.net/Mrg1i7DwcwjWBvQPIMt_Mg==/79164837213438.jpg) no-repeat top;
  background-size: cover;
  min-height: 400px;
  color: var(--anzhiyu-white);
  overflow: hidden;
}

.author-content-item .card-content .banner-button-group {
  position: absolute;
  bottom: 1.5rem;
  right: 2rem;
}

.author-content-item.like-music::after {
  box-shadow: 0 -69px 203px 11px #453e38 inset;
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

@media screen and (max-width: 768px) {
  #gitcalendar {
    display: none;
  }
  [data-theme="dark"] .author-content-item .card-content .banner-button-group .banner-button {
    color: var(--anzhiyu-black) !important;
  }
  .author-content-item .card-content .banner-button-group .banner-button:hover {
    background: none !important;
  }
  .author-content-item.game-yuanshen .content-bottom {
    padding-bottom: 10px;
  }
  .author-content-item.game-yuanshen .game-yuanshen-uid {
    display: none;
  }
  .author-content {
    margin-top: 0;
  }
  .author-content-item {
    width: 100% !important;
    margin-top: 1rem;
    padding: 1rem;
  }
  .author-content-item.map {
    margin-bottom: 0;
  }
  .author-content-item-group.column {
    width: 100% !important;
  }
  .author-content-item.selfInfo {
    height: 95%;
  }
  .author-content-item.personalities {
    height: 170px;
  }
  .post-tips {
    left: auto;
  }
  .author-content-item.personalities .image {
    width: 90px;
  }
  .site-card-group > a {
    width: 100% !important;
  }
  .post-reward {
    display: none;
  }
  .reward-list-item {
    width: 100% !important;
  }
  .layout > div:first-child:not(.recent-posts) {
    /* border-radius: 0; */
    padding: 0 1rem !important;
    box-shadow: none !important;
    background: var(--anzhiyu-background);
  }
  .author-content-item .card-content .banner-button-group .banner-button-text {
    display: none;
  }
  .author-content-item .card-content .banner-button-group {
    right: 1rem;
    bottom: 1rem;
  }
  .author-content-item .card-content .banner-button-group .banner-button {
    background: 0 0;
    padding: 0;
  }
  .author-content-item .card-content .banner-button-group .banner-button i {
    margin-right: 0;
    font-size: 1.5rem;
    background: white;
    border-radius: 50%;
    padding: 6px;
    margin-left: 80px;
  }
  .author-content-item .card-content .banner-button-group .banner-button:hover i {
    background: var(--anzhiyu-background) !important;
    color: var(--anzhiyu-theme);
  }
  #selfInfo-content-year {
    width: 90px;
  }
}

@media screen and (min-width: 768px) and (max-width: 896px) {
  .author-content-item.like-music .content-bottom .tips {
    display: none;
  }
}

/* 赞赏的css */

.reward-list-all {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}

.reward-list-item {
  padding: 1rem;
  border-radius: 12px;
  border: var(--style-border-always);
  width: calc((100% / 3) - 0.5rem);
  margin: 0 0.25rem 0.5rem 0.25rem;
  box-shadow: var(--anzhiyu-shadow-border);
}

.reward-list-item .reward-list-item-name {
  font-size: 1rem;
  font-weight: 700;
  line-height: 1;
  margin-bottom: 0.5rem;
}

.reward-list-item .reward-list-bottom-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.reward-list-item .reward-list-item-money {
  padding: 4px;
  background: var(--font-color);
  color: var(--card-bg);
  font-size: 12px;
  line-height: 1;
  border-radius: 4px;
  margin-right: 4px;
  white-space: nowrap;
}

.reward-list-item .reward-list-item-time {
  font-size: 12px;
  color: var(--anzhiyu-secondtext);
  white-space: nowrap;
}
`````

`````
.author-content-item.careers {
  min-height: 400px;
}
.author-content-item.careers .careers-group {
  margin-top: 12px;
}
.author-content-item.careers .careers-item {
  display: flex;
  align-items: center;
}
.author-content-item.careers .careers-item .circle {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-radius: 16px;
}
.author-content-item.careers .careers-item .name {
  color: var(--anzhiyu-secondtext);
}
.author-content-item.careers .careers-item {
  display: flex;
  align-items: center;
}
.author-content-item.careers .careers-item .circle {
  width: 16px;
  height: 16px;
  margin-right: 8px;
  border-radius: 16px;
}
.author-content-item.careers .careers-item .name {
  color: var(--anzhiyu-secondtext);
}
.author-content-item.careers img {
  position: absolute;
  left: 0;
  bottom: 20px;
  width: 100%;
  transition: 0.6s;
}
`````

`````
:root {
  --loadingbar-background-color: #2c2b30;
  --loadingbar-prospect-color: #ece5d8;
}

/* html.dark body {
  background-color: #161d22;
} */

.loading-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 62.5px;
  transform: translate(-25%, -50%) scale(0.5);
  transition: all 0.5s;
  user-select: none;
  overflow: hidden;
}

.loading-bar img {
  position: absolute;
  top: 500px;
  left: 0;
  filter: drop-shadow(0 -500px 0 var(--loadingbar-background-color));
}

.loading-bar::after {
  content: "";
  position: absolute;
  top: 500px;
  left: 0;
  filter: drop-shadow(0 -500px 0 var(--loadingbar-prospect-color));
  width: 500px;
  height: 62.5px;
  background: url("https://yuanshen.site/imgs/loading-bar.png") no-repeat left 100%;
  background-size: 500px 62.5px;
  background-position-x: 0;
}
.author-content-item.game-yuanshen:hover .loading-bar::after {
  animation: loading-bar 3.5s cubic-bezier(0.28, 0.11, 0.32, 1) infinite forwards;
}

@media screen and (max-width: 719px) {
  .loading-bar .loading-bar {
    display: none;
  }
}

@media screen and (max-width: 719px) and (orientation: landscape) {
  .loading-bar .loading-bar {
    display: block !important;
    transform: translate(-50%, -50%) scale(0.7) !important;
  }
}

@supports not (filter: drop-shadow(0 0 0 #fff)) {
  .loading-bar:before {
    content: "Your browser does not support the animation";
  }
}

@keyframes loading-bar {
  0% {
    width: 0;
    background-size: 500px 62.5px;
  }
  16.6% {
  }
  33.2% {
  }
  49.8% {
  }
  66.4% {
  }
  83% {
    width: 475px;
  }
  83.1% {
    width: 475px;
  }
  83.2% {
    width: 475px;
  }
  83.3% {
    width: 475px;
  }
  83.4% {
    width: 475px;
  }
  83.5% {
    width: 475px;
  }
  83.6% {
    width: 475px;
  }
  83.7% {
    width: 475px;
  }
  83.8% {
    width: 475px;
  }
  83.9% {
    width: 475px;
  }
  84% {
    width: 475px;
  }
  85% {
    width: 475px;
  }
  86% {
    width: 475px;
  }
  87% {
    width: 475px;
  }
  100% {
    width: 500px;
  }
}
`````

`````
:root {
  --loadingbar-background-color: #2c2b30;
  --loadingbar-prospect-color: #ece5d8;
}

/* html.dark body {
  background-color: #161d22;
} */

.loading-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 500px;
  height: 62.5px;
  transform: translate(-25%, -50%) scale(0.5);
  transition: all 0.5s;
  user-select: none;
  overflow: hidden;
}

.loading-bar img {
  position: absolute;
  top: 500px;
  left: 0;
  filter: drop-shadow(0 -500px 0 var(--loadingbar-background-color));
}

.loading-bar::after {
  content: "";
  position: absolute;
  top: 500px;
  left: 0;
  filter: drop-shadow(0 -500px 0 var(--loadingbar-prospect-color));
  width: 500px;
  height: 62.5px;
  background: url("https://yuanshen.site/imgs/loading-bar.png") no-repeat left 100%;
  background-size: 500px 62.5px;
  background-position-x: 0;
}
.author-content-item.game-yuanshen:hover .loading-bar::after {
  animation: loading-bar 3.5s cubic-bezier(0.28, 0.11, 0.32, 1) infinite forwards;
}

@media screen and (max-width: 719px) {
  .loading-bar .loading-bar {
    display: none;
  }
}

@media screen and (max-width: 719px) and (orientation: landscape) {
  .loading-bar .loading-bar {
    display: block !important;
    transform: translate(-50%, -50%) scale(0.7) !important;
  }
}

@supports not (filter: drop-shadow(0 0 0 #fff)) {
  .loading-bar:before {
    content: "Your browser does not support the animation";
  }
}

@keyframes loading-bar {
  0% {
    width: 0;
    background-size: 500px 62.5px;
  }
  16.6% {
  }
  33.2% {
  }
  49.8% {
  }
  66.4% {
  }
  83% {
    width: 475px;
  }
  83.1% {
    width: 475px;
  }
  83.2% {
    width: 475px;
  }
  83.3% {
    width: 475px;
  }
  83.4% {
    width: 475px;
  }
  83.5% {
    width: 475px;
  }
  83.6% {
    width: 475px;
  }
  83.7% {
    width: 475px;
  }
  83.8% {
    width: 475px;
  }
  83.9% {
    width: 475px;
  }
  84% {
    width: 475px;
  }
  85% {
    width: 475px;
  }
  86% {
    width: 475px;
  }
  87% {
    width: 475px;
  }
  100% {
    width: 500px;
  }
}
`````

`````
`````

`````
`````
{% endhideToggle %}
