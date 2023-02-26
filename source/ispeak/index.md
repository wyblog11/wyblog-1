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
<script src="/js/timeago.min.js"></script>     
