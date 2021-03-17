import LoginPage from '../../../pageobjects/LoginPage'
import HomePage from '../../../pageobjects/HomePage'
import ReportsPage from '../../../pageobjects/ReportsPage'
import {Users} from '../../../fixtures/data'

describe('GradeScale18Report', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.gsteach18.credentials)
        HomePage.selectSchoolYear('2020-2021')
    })
    describe('GradeScale18Report-GenerateReport_VerifyGradeScaleRange', () => {
        let action = 'GradeScale18TeacherReport-GenerateReport'
        before(function () {
            HomePage.resetGradeScale('CLASS')
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.clickExistingEMPNReportGS()
            ReportsPage.clickNextPageGSBtn()
            ReportsPage.selectTestFromDropDown('K - ELA')
            ReportsPage.clickContinueSetup()
            ReportsPage.clickSharedRange()
            ReportsPage.clickUseThisScale()
        })
        it('should save shared ranged selected in config page', function () {
            browser.saveElement(ReportsPage.sharedRangeConfigContainer, 'SelectedSharedRangeContainerGS18', {})
        })
        it(`${action} - should be correct`, function () {
            ReportsPage.clickNextPageConfigBtn()
            ReportsPage.clickRunReport()
            expect(browser.checkElement(ReportsPage.secondModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
        it('should show generated report range settings match shared range selected', function () {
            ReportsPage.clickViewRangeSettings()
            expect(browser.checkElement(ReportsPage.sharedRangeConfigContainer, 'SelectedSharedRangeContainerGS18', {})).toEqual(0)
        })
    })
})
