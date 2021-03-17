const { config } = require('./wdio.local.conf')
const path = require('path')

// Store the directory path in a global, which allows us to access this path inside our tests
global.downloadDir = path.join(__dirname, '../', '/pdfs/data/actual')
// eslint-disable-next-line no-undef
console.log('Downloads Directory is : ', downloadDir)
exports.config = {
    ...config,
    ...{
        maxInstances: 1
    }
}
