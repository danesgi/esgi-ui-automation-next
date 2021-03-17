const { config } = require('./wdio.shared.conf')

exports.config = {
    ...config,
    ...{
      capabilities: [
        {
            browserName: 'chrome',
            'selenoid:options': {
                version: 'chrome_83.0',
                screenResolution: '1920x1080x24'
            },
            'goog:chromeOptions': {
                args: [
                    '--no-sandbox',
                    '--test-type',
                    '--headless', // Windows server doesn't like headless mode
                    '--disable-infobars',
                    '--disable-gpu',
                    '--window-size=1920,1080'
                ],
                prefs: {
                    'directory_upgrade': true,
                    'prompt_for_download': false,
                    // eslint-disable-next-line no-undef
                    'download.default_directory': '/var/lib/actual/'
                }
            }
        }
    ],
      // capabilities: [
      //     {
      //       maxInstances: 5,
      //       browserName: 'chrome',
      //       'goog:chromeOptions': {
      //           //headless: true
      //       }
      //   },
      //   // {
      //   //   maxInstances: 5,
      //   //   browserName: 'firefox',
      //   //   "moz:firefoxOptions": {
      //   //     // flag to activate Firefox headless mode (see https://github.com/mozilla/geckodriver/blob/master/README.md#firefox-capabilities for more details about moz:firefoxOptions)
      //   //     //args: ['-headless']
      //   //   }
      //   // },

      //   // {
      //   //   maxInstances: 5,
      //   //   browserName: 'safari',
      //   // },

      // ]
    }
}
