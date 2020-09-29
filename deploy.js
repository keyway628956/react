// deploy.js

// 根據路徑修改routes
const routes = [
    'home',
    'about',
    'Customer',
    'GraphQL',
    'UploadForm',
    'OsmMap',
    'TestAPI',
    'TestAPI/AgriproductsTransType'

]

// 给每個route都新建資料夾，把index.html複製進去
const fs = require('fs-extra')
const path = require('path')
routes.forEach((route) => {
    fs.copySync(path.join('build', 'index.html'), path.join('build', route, 'index.html'))
})