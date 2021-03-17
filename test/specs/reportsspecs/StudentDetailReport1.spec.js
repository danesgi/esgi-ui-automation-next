import LoginPage from '../../pageobjects/LoginPage'
import HomePage from '../../pageobjects/HomePage'
import ReportsPage from '../../pageobjects/ReportsPage'
import {Users} from '../../fixtures/data'
import Global from '../../support/Global'

describe('StudentDetailReport1', function () {
    before(function () {
        LoginPage.open()
        LoginPage.login(Users.teacher.credentials)

        // Set the teacher dropdowns
        const teacherInfo = {
            student: 'Ella Ayvazian',
            subject: 'SubjectTabTest001',
            class: 'Buckhoff\'s Class'
        }
        HomePage.selectSchoolYear('2019-2020')
        HomePage.clickStudentDetail()
        ReportsPage.selectSubjectRunReport(teacherInfo)
        ReportsPage.clickRunReport()
        ReportsPage.setStudentDetailReportInfo(teacherInfo)
    })
    after(function () {
        ReportsPage.goBack()
        ReportsPage.closeModal()
        Global.logout()
    })
    describe('StudentDetailReport-NT_CurrentMarking_ShowColorsUnchecked', () => {
        let action = 'StudentDetailReport-NT_CurrentMarking_ShowColorsUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: true,
                zero: false,
                nt: true,
                carryforward: true,
                currentmarking: true,
                allmarking: false,
                showcolors: false,
                questionnotes: true
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.secondModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-NT_CurrentMarking_CarryForwardUnchecked', () => {
        let action = 'StudentDetailReport-NT_CurrentMarking_CarryForwardUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: true,
                zero: false,
                nt: true,
                carryforward: false,
                currentmarking: true,
                allmarking: false,
                showcolors: true,
                questionnotes: true
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.secondModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-NT_AllMarking_AllChecked', () => {
        let action = 'StudentDetailReport-NT_AllMarking_AllChecked'
        let payload
        before(function () {
            payload = {
                gradesshow: true,
                zero: false,
                nt: true,
                carryforward: true,
                currentmarking: false,
                allmarking: true,
                showcolors: true,
                questionnotes: true
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.secondModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-NT_AllMarking_QuestionNotesUnchecked', () => {
        let action = 'StudentDetailReport-NT_AllMarking_QuestionNotesUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: true,
                zero: false,
                nt: true,
                carryforward: true,
                currentmarking: false,
                allmarking: true,
                showcolors: true,
                questionnotes: false
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.secondModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-NT_AllMarking_ShowColorsUnchecked', () => {
        let action = 'StudentDetailReport-NT_AllMarking_ShowColorsUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: true,
                zero: false,
                nt: true,
                carryforward: true,
                currentmarking: false,
                allmarking: true,
                showcolors: false,
                questionnotes: true
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.secondModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-NT_AllMarking_CarryForwardUnchecked', () => {
        let action = 'StudentDetailReport-NT_AllMarking_CarryForwardUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: true,
                zero: false,
                nt: true,
                carryforward: false,
                currentmarking: false,
                allmarking: true,
                showcolors: true,
                questionnotes: true
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.secondModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-Zero_CurrentMarking_GradesShowUnchecked', () => {
        let action = 'StudentDetailReport-Zero_CurrentMarking_GradesShowUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: true,
                nt: false,
                carryforward: true,
                currentmarking: true,
                allmarking: false,
                showcolors: true,
                questionnotes: true
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.secondModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-Zero_CurrentMarking_GradesShowUnchecked_QuestionNotesUnchecked', () => {
        let action = 'StudentDetailReport-Zero_CurrentMarking_GradesShowUnchecked_QuestionNotesUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: true,
                nt: false,
                carryforward: true,
                currentmarking: true,
                allmarking: false,
                showcolors: true,
                questionnotes: false
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.secondModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-Zero_CurrentMarking_GradesShowUnchecked_ShowColorsUnchecked', () => {
        let action = 'StudentDetailReport-Zero_CurrentMarking_GradesShowUnchecked_ShowColorsUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: true,
                nt: false,
                carryforward: true,
                currentmarking: true,
                allmarking: false,
                showcolors: false,
                questionnotes: true
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.secondModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
    describe('StudentDetailReport-Zero_CurrentMarking_GradesShowUnchecked_CarryForwardUnchecked', () => {
        let action = 'StudentDetailReport-Zero_CurrentMarking_GradesShowUnchecked_CarryForwardUnchecked'
        let payload
        before(function () {
            payload = {
                gradesshow: false,
                zero: true,
                nt: false,
                carryforward: false,
                currentmarking: true,
                allmarking: false,
                showcolors: true,
                questionnotes: true
            }
            ReportsPage.verifyStudentDetailReport(payload)
        })
        it(`${action} - should be correct`, function () {
            expect(browser.checkElement(ReportsPage.secondModalContent, this.test.title)).toBeLessThanOrEqual(1)
        })
    })
})
