const logger = require('hexo-log')()

hexo.on('ready', () => {
  const { version } = require('../../package.json')
  logger.info(`
  ===================================================================
                      法克鱿 ${version}
  ===================================================================`)
})
