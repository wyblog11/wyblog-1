---
title: 'heaven 安裝文檔(一) 快速開始'
date: 2023-03-24 20:05:10
published: true
hideInList: true
categories: [heaven]
tags:
  - heaven
  - hexo
  - 主题

isTop: false
cover: https://www.wyblog1.tk/Cover/cover01.jpg
description: heaven主题文档
swiper_index: 5 #置顶轮播图顺序，非负整数，数字越大越靠前
top_group_index: 5 #右侧磁帖顺序，需填非负整数，数字越大越靠前
---


{% note blue 'fas fa-bullhorn' %}

 📖  本教程更新於 2023 年 03 月 24 日，教程的內容針對最新**穩定版**而更新（如果你是舊版，教程會有些出入，請留意）

 🦋  heaven 已經更新到 [1.0.0](https://github.com/612901/hexo-themes-heaven/releases/tag/1.0.0)

{% endnote %}

{% note green 'fas fa-rocket' %}

 📚  文檔目錄

{% post_link heaven-安裝文檔-一-快速開始 ' 🚀 快速開始' %} - {% post_link heaven-安裝文檔-二-主題頁面 ' 📑 主題頁面' %} 
{% endnote %}

{% note orange 'fas fa-magic' %}


{% endnote %}

## 安裝

{% tabs butterfly-install %}

<!-- tab Git安裝 (Github) @fab fa-github-square -->

**穩定版【建議】**

在你的 Hexo 根目錄裏

```powershell
git clone -b main https://github.com/612901/hexo-themes-heaven.git themes/heaven
```

**測試版**

> 測試版可能存在 bug，追求穩定的請安裝穩定版

如果想要安裝比較新的 dev 分支，可以

```powershell
git clone -b dev https://github.com/612901/hexo-themes-heaven.git themes/heaven
```

{% note info %}

升級方法：在主題目錄下，運行 `git pull`

{% endnote %}

<!-- endtab -->



<!-- tab Git安裝 (Gitee) @fab fa-git-square -->

**穩定版【建議】**

在你的 Hexo 根目錄裏

```powershell
git clone -b main https://github.com/612901/hexo-themes-heaven.git themes/heaven
```

**測試版**

> 測試版可能存在Bugs，追求穩定的請安裝穩定版

如果想要安裝比較新的dev分支，可以

```powershell
git clone -b dev https://github.com/612901/hexo-themes-heaven.git themes/heaven
```

{% note info %}

升級方法：在主題目錄下，運行`git pull`

{% endnote %}

<!-- endtab -->

{% endtabs %}

## 應用主題

修改 Hexo 根目錄下的 `_config.yml`，把主題改為`heaven`

```yaml
theme: heaven
```

## 安裝插件

如果你沒有 pug 以及 stylus 的渲染器，請下載安裝：

```powershell
npm install hexo-renderer-pug hexo-renderer-stylus --save
```

## 升級建議

{% note blue 'fas fa-train' %}

升級完成後，請到 Github 的 [Releases](https://github.com/612901/hexo-themes-heaven/releases) 界面 

裏面有標注  `_config` 文件的變更內容（如有），請根據實際情況更新你的配置內容。

{% endnote %}

為了減少升級主題後帶來的不便，請使用以下方法（**建議，可以不做**）。

在 hexo 的根目錄創建一個文件 `_config.heaven.yml`，並把**主題**目錄的 `_config.yml` **內容**複製到 `_config.heaven.yml` 去。( **注意: 複製的是主題的 `_config.yml` ,而不是 hexo 的 `_config.yml`**)

> **注意：** 不要把主題目錄的 `_config.yml` 刪掉

> **注意：** 以後只需要在 `_config.butterfly.yml`進行配置就行。
> 如果使用了 `_config.butterfly.yml`， 配置主題的 `_config.yml` 將不會有效果。

Hexo會自動**合併**主題中的`_config.yml`和 `_config.heaven.yml`裏的配置，如果存在同名配置，會使用`_config.butterfly.yml`的配置，其優先度較高。

![image-20200805191531090](https://file.crazywong.com/gh/jerryc127/CDN/img/butterfly-docs-install-suggestion-1.png)
