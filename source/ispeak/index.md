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
<style>
#bibi{display:flex;flex-wrap:wrap;justify-content:space-between}
.bb-box{border:2px rgba(240,240,240,0.8) solid;box-shadow:0 4px 10px -10px rgb(0 0 0 / 20%);transition:all .3s ease-in-out;border-radius:15px}
.bb-box:hover{border-color:#6dc3fd}
.bb-box{display:flex;flex-direction:column;font-size:16px;position:relative;width:32%;background-color:rgba(255,255,255,0.6);margin:10px 0;box-sizing:border-box;padding:1rem}
[data-theme=dark]
.bb-box{background-color:var(--card-bg)}
.bb-content{position:relative;height:100%;font-weight:bold}
[data-theme=dark]
.bb-content{color:rgb(226,226,226)}
.bb-content .fancybox{margin-top:5px;display:inline-block;width:48%;margin-right:2%}
.bb-content .fancybox img{margin:0 !important;width:100%}
.bb-bottom{font-size:14px}
.bb-bottom,.limit{transition:all .3s ease-in-out;color:rgba(76,73,72,0.6)}
[data-theme=dark] .bb-bottom,[data-theme=dark] .limit{color:rgba(255,255,255,0.5)}
.limit{text-align:center;margin-top:20px;color:var(--font-color)}
@media screen and (max-width:1100px){.bb-box{width:49%}
}@media screen and (max-width:768px){.bb-box{width:100%}
}
</style>

<script>
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e=e||self).timeago={})}(this,function(e){"use strict";var r=["second","minute","hour","day","week","month","year"];var a=["秒","分钟","小时","天","周","个月","年"];function t(e,t){n[e]=t}function i(e){return n[e]||n.en_US}var n={},f=[60,60,24,7,365/7/12,12];function o(e){return e instanceof Date?e:!isNaN(e)||/^\d+$/.test(e)?new Date(parseInt(e)):(e=(e||"").trim().replace(/\.\d+/,"").replace(/-/,"/").replace(/-/,"/").replace(/(\d)T(\d)/,"$1 $2").replace(/Z/," UTC").replace(/([+-]\d\d):?(\d\d)/," $1$2"),new Date(e))}function d(e,t){for(var n=e<0?1:0,r=e=Math.abs(e),a=0;e>=f[a]&&a<f.length;a++)e/=f[a];return(0===(a*=2)?9:1)<(e=Math.floor(e))&&(a+=1),t(e,a,r)[n].replace("%s",e.toString())}function l(e,t){return((t?o(t):new Date)-o(e))/1e3}var s="timeago-id";function h(e){return parseInt(e.getAttribute(s))}var p={},v=function(e){clearTimeout(e),delete p[e]};function m(e,t,n,r){v(h(e));var a=r.relativeDate,i=r.minInterval,o=l(t,a);e.innerText=d(o,n);var u,c=setTimeout(function(){m(e,t,n,r)},Math.min(1e3*Math.max(function(e){for(var t=1,n=0,r=Math.abs(e);e>=f[n]&&n<f.length;n++)e/=f[n],t*=f[n];return r=(r%=t)?t-r:t,Math.ceil(r)}(o),i||1),2147483647));p[c]=0,u=c,e.setAttribute(s,u)}t("en_US",function(e,t){if(0===t)return["just now","right now"];var n=r[Math.floor(t/2)];return 1<e&&(n+="s"),[e+" "+n+" ago","in "+e+" "+n]}),t("zh_CN",function(e,t){if(0===t)return["刚刚","片刻后"];var n=a[~~(t/2)];return[e+" "+n+"前",e+" "+n+"后"]}),e.cancel=function(e){e?v(h(e)):Object.keys(p).forEach(v)},e.format=function(e,t,n){return d(l(e,n&&n.relativeDate),i(t))},e.register=t,e.render=function(e,t,n){var r=e.length?e:[e];return r.forEach(function(e){m(e,e.getAttribute("datetime"),i(t),n||{})}),r},Object.defineProperty(e,"__esModule",{value:!0})});
var Url = 'https://kkapi.wyblog1.tk/api/ispeak?author=63c28a71aa610fa0dc9b6f1a&&pageSize=200'
var items = []

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

<div id="bibi">
