hexo.extend.generator.register('random', function (locals) {
    const config = hexo.config.random || {}
    const posts = []
    for (const post of locals.posts.data) {
        if (post.random !== false) posts.push(post.path)
    }
    return {
        path: config.path || 'zhheo/random.js',
        data: `var posts=${JSON.stringify(posts)};function toRandomPost(){window.open('/'+posts[Math.floor(Math.random() * posts.length)],"_self");};`
    }
})

/**
 * 随机友链
 */
hexo.extend.filter.register('after_render:html', function (data) {
    const flinks = []
    // 获取所有友链链接
    hexo.locals.get('data').link.map(function (list) {
        list.link_list.map(function (flink) {
            flinks.push(flink.link)
        })
    })
    // 随机获取一个友链
    data += `<script>var flinks=${JSON.stringify(flinks)};function toRandomFlink(){window.open(flinks[Math.floor(Math.random()*flinks.length)]);};</script>`
    return data
})
