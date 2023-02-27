---
title: Speak
date: 2022-08-21 14:11:00
update: 2022-08-21 14:11:00
layout: page
aside: false
comments: false
description: 欢迎来到无影的Speak页面，快来看看无影分享了什么speak！
swiper_index: 8
top_img: false
--- 
<script>
let svg = '<svg  viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="is-badge"><path  d="m512 268c0 17.9-4.3 34.5-12.9 49.7s-20.1 27.1-34.6 35.4c.4 2.7.6 6.9.6 12.6 0 27.1-9.1 50.1-27.1 69.1-18.1 19.1-39.9 28.6-65.4 28.6-11.4 0-22.3-2.1-32.6-6.3-8 16.4-19.5 29.6-34.6 39.7-15 10.2-31.5 15.2-49.4 15.2-18.3 0-34.9-4.9-49.7-14.9-14.9-9.9-26.3-23.2-34.3-40-10.3 4.2-21.1 6.3-32.6 6.3-25.5 0-47.4-9.5-65.7-28.6-18.3-19-27.4-42.1-27.4-69.1 0-3 .4-7.2 1.1-12.6-14.5-8.4-26-20.2-34.6-35.4-8.5-15.2-12.8-31.8-12.8-49.7 0-19 4.8-36.5 14.3-52.3s22.3-27.5 38.3-35.1c-4.2-11.4-6.3-22.9-6.3-34.3 0-27 9.1-50.1 27.4-69.1s40.2-28.6 65.7-28.6c11.4 0 22.3 2.1 32.6 6.3 8-16.4 19.5-29.6 34.6-39.7 15-10.1 31.5-15.2 49.4-15.2s34.4 5.1 49.4 15.1c15 10.1 26.6 23.3 34.6 39.7 10.3-4.2 21.1-6.3 32.6-6.3 25.5 0 47.3 9.5 65.4 28.6s27.1 42.1 27.1 69.1c0 12.6-1.9 24-5.7 34.3 16 7.6 28.8 19.3 38.3 35.1 9.5 15.9 14.3 33.4 14.3 52.4zm-266.9 77.1 105.7-158.3c2.7-4.2 3.5-8.8 2.6-13.7-1-4.9-3.5-8.8-7.7-11.4-4.2-2.7-8.8-3.6-13.7-2.9-5 .8-9 3.2-12 7.4l-93.1 140-42.9-42.8c-3.8-3.8-8.2-5.6-13.1-5.4-5 .2-9.3 2-13.1 5.4-3.4 3.4-5.1 7.7-5.1 12.9 0 5.1 1.7 9.4 5.1 12.9l58.9 58.9 2.9 2.3c3.4 2.3 6.9 3.4 10.3 3.4 6.7-.1 11.8-2.9 15.2-8.7z" fill="#1da1f2"></path></svg>'
let total = 0
let nowNum = 0
let items = []
let page = 1
let Url = 'https://kkapi.wyblog1.tk/api/ispeak?author=63c28a71aa610fa0dc9b6f1a' // 修改api，记得带参数page


window.addEventListener('DOMContentLoaded', () => {
    getNew();
});

// 获取数据
function getNew() {
    let bibi = document.getElementById('bibi');
    try {
        bibi.removeChild(document.getElementById('more'))
    } catch (error) { }

    bibi.innerHTML += '<div id="bb_loading"><img src="/assets/loading3.gif" alt="bb_loading"></div>' // bb_loading图片可以f12在我网站源码下载，也可以使用其他图片。

    fetch(Url + page).then(res => res.json()).then((res) => {
        total = res.data.total
        items = res.data.items
        nowNum += items.length
        if (page == 1) {
            document.querySelector('.bb-info').innerHTML = '<svg style="width:1.20em;height:1.20em;top:5px;fill:currentColor;overflow:hidden;position:relative"><use xlink:href="#icon-chat"></svg> 站长的唠叨(' + total + ')'
        }
        page += 1
    }).then(() => {
        bb();
        if (nowNum < total) {
            document.getElementById('bibi').innerHTML += '<button id="more" onclick="getNew()">再翻翻</button>'
        }
        document.getElementById('bibi').removeChild(document.getElementById('bb_loading'))
    })
}

// 渲染数据
function bb() {
    let bb = document.getElementById('bb-main')
    items.forEach((item) => {
        let time = item.createdAt.substring(0, 10);
        let div = document.createElement('div')
        item.content = contentFormat(item.content)

        div.className = 'bb-card'
        div.innerHTML = '<div class="card-header"><div class="avatar"><img class="nofancybox"src="' + item.author.avatar + '"></div><div class="name">' + item.author.nickName + '</div>' + svg + '<div class="card-time">' + time + '</div></div><div class="card-content">' + item.content + '</div><div class="card-footer"><div data-v-185689ea=""class="card-label"style="background: ' + item.tag.bgColor + '; color: white;">' + item.tag.name + '</div></div>'
        bb.appendChild(div)
    })
}

// content格式化
function contentFormat(s) {
    let br = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
    let re_forimg = /<img(.*?)src=[\"|\']?(.*?)[\"|\']?(.*?)>|!\[(.*?)\]\((.*?)\)/g;
    let getImgUrl = /(http(.*).[jpg|png|gif])/g;
    let ls = s.match(getImgUrl)
    s = s.replace(re_forimg, '')
    s = s.replace(br, '')

    let html = '<br>'
    if (ls) {
        ls.forEach((e) => {
            html += '<a href="' + e + '" target="_blank" data-fancybox="group" class="fancybox"><img src="' + e + '"></a>'
        })
    }
    s += html
    return s
}
</script>
<style>
/* 哔哔页面 */
#bibi button {
  color: #fff;
  border: 0;
  margin: 20px auto;
  border-radius: 0.3125rem;
  display: block;
  padding: 0 1rem;
  height: 40px;
  font-weight: 500;
  text-align: center;
  transition: all 0.5s ease-out;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 1000% 1000%;
  animation: Gradient 60s linear infinite;
  outline: 0;
}

#bibi .bb-info {
  font-weight: 700;
  font-size: 22px;
}

#bibi .bb-card {
  padding: 15px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid #a5a5a5ee;
  margin-top: 20px;
  transition: all 0.25s;
  user-select: none;
  width: calc(48% - 7px);
  margin: 10px;
}

@media screen and (max-width: 800px) {
  #bibi .bb-card {
  width: 100%;
  }
}

#bibi .bb-card:hover {
  box-shadow: 0 5px 10px 8px #07111b29;
  transform: translateY(-3px);
}

#bibi .card-header {
  display: flex;
  align-items: center;
}

#bibi .card-header .avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 10px;
  border-radius: 20px;
  overflow: hidden;
}

#bibi .card-header svg {
  height: 20px;
  width: 20px;
  margin-left: 5px;
}

#bibi .card-header .card-time {
  font-size: 12px;
  text-shadow: #d9d9d9 0 0 1px, #fffffb 0 0 1px, #fffffb 0 0 2px;
  margin-left: 10px;
}

#bibi .card-content {
  padding: 10px 0;
  white-space: pre-wrap;
}

#bibi .card-footer {
  display: flex;
  padding-bottom: 10px;
}

#bibi .card-footer .card-label {
  border-radius: 5px;
  padding: 0 5px;
  font-weight: 550;
  border-radius: 5px;
  box-shadow: inset 0 -1px 0 rgb(27 31 35 / 12%);
  font-size: 14px;
  user-select: none;
  margin-right: 10px;
}

div#bb_loading img{
  border-radius: 15px;
}

#bb-main {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
}

</style>    
