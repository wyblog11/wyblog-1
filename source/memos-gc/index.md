---
layout: page
top_meta: false
bottom_meta: false
aside: false
comments: false
title: 说说广场
---

点击 [此处](https://memos.wyblog1.tk/auth) 注册账号。点击下方头像，即可看到指定用户所发布的说说：
<div id="bbs"></div>
<script src="https://fastly.jsdelivr.net/npm/marked/marked.min.js"></script>
<script src="https://fastly.jsdelivr.net/gh/Tokinx/ViewImage/view-image.min.js"></script>
<script src="https://fastly.jsdelivr.net/gh/Tokinx/Lately/lately.min.js"></script>
<script src="/bbs-lmm.js"></script>
<style>
#bbs{padding: 2rem 0;}
#bbs-urls{margin-top: 2rem;}
.bbs-urls{display:inline-block;background: #4a4b50;border-radius:50%;margin:0 .6rem 5px 0;padding:4px;width:3.4rem;height:3.4rem;cursor: pointer;}
.bbs-urls img{border-radius:50%;width:100%;height:100%;}
.bbs-urls.url-now{background:#42b983;transition: 0.6s;}
.urls-button svg.icon{padding:10px;width:100%;height: 100%;}
.bbs-timeline ul {margin:0;}
.bbs-timeline ul li{list-style-type:none;position:relative;}
.bbs-timeline{max-width:1200px;margin:0 auto;}
.bbs-avatar{position: relative;}
.bbs-avatar img{width:24px;height:24px;border-radius:50%;margin-right:1rem;}
.bbs-creator,.bbs-date,.bbs-dot{position:relative;top:-5px;}
.bbs-dot{font-weight: 800;margin:0 .5rem;}
.bbs-content {margin-bottom: 3rem;}
.bbs-text,.resour{background: #eaeaea;border-radius: 8px;font-size: 1em;padding:10px 14px;position: relative;}
.resour{font-size: 0.9rem;margin-top: 2px;padding: 5px 14px;}
.bbs-text{overflow:hidden;max-height:90vh;}
.bbs-text blockquote{font-family: KaiTi,STKaiti,STFangsong;margin:0 0 0 1rem;padding:.25rem 2rem;position: relative;border-left:0 none;}
.bbs-text blockquote::before{line-height: 2rem;content: "“";font-family: Georgia, serif;font-size: 28px;font-weight: bold;position: absolute;left: 10px;top:5px;}
.bbs-text p{margin:0;}
.bbs-text pre p{display: inline-block;}
.bbs-text pre p:empty{display: none;}
.tag-span{color: #42b983;}
#load button.load-btn{width:100%;padding:8px 0;}
#bb-footer{letter-spacing:8px;margin:5rem auto 1rem;text-align:center;}

.dark .bbs-text,.dark .resour{background:#4a4b50;}
.dark .bbs-text p{color:#fafafa;}

.loader {position: relative;margin:3rem auto;width: 100px;}
.loader::before {content: '';display: block;padding-top: 100%;}
.circular {animation: rotate 2s linear infinite;height: 100%;transform-origin: center center;width: 100%;position: absolute;top: 0;bottom: 0;left: 0;right: 0;margin: auto;}
.path {stroke-dasharray: 1, 200;stroke-dashoffset: 0;animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;stroke-linecap: round;}
@keyframes rotate {100% {transform: rotate(360deg);}}
@keyframes dash {
  0% {stroke-dasharray: 1, 200;stroke-dashoffset: 0;}
  50% {stroke-dasharray: 89, 200;stroke-dashoffset: -35px;}
  100% {stroke-dasharray: 89, 200;stroke-dashoffset: -124px;}
}
@keyframes color {
  100%,0% {stroke: #d62d20;}40% {stroke: #0057e7;}66% {stroke: #008744;}80%,90% {stroke: #ffa700;}
}

.bbs-content p > img{cursor:pointer;border:1px solid #3b3d42;}
.bbs-content p:has(img.img){display: inline-block;}
.bbs-text p > img {display: block;}
.bbs-text p > img:first-child:nth-last-child(n+2),.bbs-text p > img:first-child:nth-last-child(n+2) ~ img {display: inline-block;}

.bbs-content p > img.square{height:180px;width:180px;object-fit:cover;}
.resimg.grid{
    display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows:auto;
    gap: 4px;
    width: calc(100%* 2 / 3);
    box-sizing: border-box;
    margin: 4px 0 0;
}
.resimg.grid-2{
  grid-template-columns: repeat(2, 1fr);
  width: 80%;
}
.resimg.grid-4{
  grid-template-columns: repeat(2, 1fr);
  width: calc(80% * 2 / 3);
}
.resimg.grid figure.gallery-thumbnail {
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 100%;
  cursor: zoom-in;
}
.resimg figure{
  text-align: left;
  max-height:50%;
}
.resimg figure img{
  max-height:50vh;
}
.resimg.grid figure, figcaption {
  margin: 0 !important;
}
.resimg.grid figure.gallery-thumbnail > img.thumbnail-image {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}
.video-wrapper{position:relative;padding-bottom:55%;width:100%;height:0}
.video-wrapper iframe{position:absolute;height:100%;width:100%;}
</style>
