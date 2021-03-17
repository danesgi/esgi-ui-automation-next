const shell = require('shelljs')
const { task, series } = require('gulp');

// task('build', function(cb) {
//   // body omitted
//   cb();
// });

// const build = task('build');
    function deletedirs (cb) {
        shell.rm('-rf',
        'screenshots/diff',
        'screenshots/actual',
        'errorshots',
        'test/reports',
        'allure-report',
        'test/pdfs/data/actual',
        'test/pdfs/data/diffPngs')
        cb()
    }

    function createdirs (cb) {
        shell.mkdir('-p', 'screenshots', 'errorshots', 'test/pdfs/data/actual', 'test/reports')
        cb()
    }

    task('clean', series(deletedirs, createdirs))

    task('slacksummaryreport', series(async function () {
        const axios = require('axios')
        const summary = require(`${__dirname}/allure-report/widgets/summary.json`).statistic
        const executors = require(`${__dirname}/allure-report/widgets/executors.json`)
        let executor, reportName, reportURL
        if (executors.length > 0) {
            executor = executors[0]
            reportName = executor.buildName.split(' ')[0].trim()
            reportURL = executor.reportUrl
        } else {
            reportName = 'Maybe a local run'
            reportURL = 'Local Link'
        }
        let attachments = [
            {
                pretext: `*Test Report *`,
                title: ''
            }
        ]
        const totalFmt = `TEST SUITE: ${reportName}\nTOTAL: ${summary.total}\nPASSED: ${summary.passed}\nFAILED: ${summary.failed}\nBROKEN: ${summary.broken}\nSKIPPED: ${summary.skipped}
        \nSee test run at ${reportURL}`

        attachments[0].title += totalFmt
        if (summary.failed > 0 || summary.broken > 0) {
            const failedColor = '#dc3545'
            let attach = {
                color: failedColor,
                author_name: reportName,
                text: `Some tests failed. See more at ${reportURL}`,
                ts: Date.now()
            }
            attachments.push(attach)
        }

        console.log(attachments)
        const slackEnv = process.env.SENDSLACK && parseInt(process.env.SENDSLACK)
        if (slackEnv) {
            const options = {
                method: 'POST',
                headers: { 'content-type': 'application/json' },
                data: {'attachments': attachments},
                url: `https://hooks.slack.com/services/${process.env.SLACKTOKEN}`
            }
            let errorCode = await axios(options)
            return errorCode
        }
    }))

