const { config } = require('./wdio.local.conf')

exports.config = {
    ...config,
    ...{
        credentials: {
            username: 'dan504',
            password: 'Wentiirim'
        },
        baseUrl: 'https://www.esgisoftware.com',
        env: 'PROD'
    }
}
