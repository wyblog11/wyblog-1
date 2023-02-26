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
var Url = 'https://bbapi.chuckle.top/api/ispeak?author=62dfff698999529f10b18d03&pageSize=30'
var items = []

// 获取数据
function getNew() {
    fetch(Url).then(res => res.json()).then((res) => {
        items = res.data.items
    }).then(() => {
        bb();
    })
}

// 渲染数据
function bb() {
    let bb = document.getElementById('bibi')
    if (items.length == 30) {
        document.querySelector('.limit').style.display = 'block'
    }

    items.forEach((item) => {
        let d = new Date(item.createdAt)
        let date = d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()
        let dataTime = timeago.format(date, 'zh_CN');

        bb.innerHTML += '<div class="bb-box"><div class="bb-content">' + contentFormat(item.content) + '</div><div class="bb-bottom"><span class="time">' + dataTime + '</span> <span style="margin-left:5px;"><i class="fa-solid fa-tag"></i> ' + item.tag.name
    })
    var x = document.getElementById("bbcontainer");
    if (x != null)
    x.remove();
}

function contentToText(s) {
    let br = /<\/*br>|[\s\uFEFF\xA0]+/g;
    let re_forimg = /<img(.*?)src=[\"|\']?(.*?)[\"|\']?(.*?)>|!\[(.*?)\]\((.*?)\)/g;
    let getImgUrl = /(http(.*).[jpg|png|gif])/g;
    let ls = s.match(getImgUrl)
    s = s.replace(re_forimg, '')
    s = s.replaceAll(br, '')

    let text = ''
    if (ls) {
        ls.forEach((e) => {
            text += '[图片]'
        })
    }
    s += text
    console.log(s);
    return s
}

// content格式化
function contentFormat(s) {
    let br = /<\/*br>|^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
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
getNew();
</script>

<div id="bibi"></div>

<div class="limit">- 只展示最近30条短文 -</div>



/* 哔哔页面 */

#bibi button {
    cursor: pointer;
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
    font-size: 18px;
}

#bibi .bb-card {
    padding: 10px 20px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
    overflow: hidden;
    margin-top: 20px;
    transition: all 0.25s;
    user-select: none;
}

#bibi .bb-card:hover {
    box-shadow: 0 5px 10px 8px #07111b29;
    transform: translateY(-3px)
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
    border-radius: 3px;
    box-shadow: inset 0 -1px 0 rgb(27 31 35 / 12%);
    font-size: 14px;
    cursor: pointer;
    user-select: none;
    margin-right: 10px;
}

#article-container .card-content img {
    margin: 0;
}

@media screen and (min-width: 768px) {
    .card-content .fancybox,
    .card-content video {
        display: inline-block;
        max-width: 40%;
        margin-right: 10px;
    }
}

@media screen and (max-width: 768px) {
    .card-content .fancybox,
    .card-content video {
        display: inline-block;
        max-width: 48%;
        margin: 1%;
    }
}

@keyframes Gradient {
    0% {
        background-position: 0 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    to {
        background-position: 0 50%;
    }
}        
