'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // API_ROOT: '"/api/addons/yun_shop/api.php"'
  API_ROOT: '"/api"'
})
