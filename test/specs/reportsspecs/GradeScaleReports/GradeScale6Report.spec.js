import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale6Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsadmin6.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale6Report-Verify_Grades_GenerateCreateYourOwnReport', () => {
        let action = 'GradeScale6Report-Verify_Grades'
        let action2 = 'GradeScale6Report-GenerateCreateYourOwnReport'
        let payload
        before(function () {
            payload = {
                highestgrade: '1',
                highestgradedesc: '1',
                lowestgrade: '2',
                lowestgradedesc: '2',
                levels: '2'
            }
            HomePage.resetGradeScale('DISTRICT')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickCreateYourOwnReportGS()
            ReportsPage.selectGradeScaleLevels(payload.levels)
            ReportsPage.setGradesScaleInfo(payload)
            ReportsPage.clickNextPageGSBtn()
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.firstModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
        it(`${action2} - should be correct`, function () {
            ReportsPage.clickRunReport()
            expect(browser.checkElement(ReportsPage.secondModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
        after(function () {
            ReportsPage.closeGSReportModal()
            ReportsPage.cancelGSModal()
            ReportsPage.cancelGSModal()
            ReportsPage.closeGSModal()
        })
    })
})
