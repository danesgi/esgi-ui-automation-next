'use strict'

import Page from './Page'
import AddTestPage from './AddTestPage'
// import Helper from '../support/Helper'

class ManageSubjectsAndTestsPage extends Page {
    constructor () {
        super()
        this.title = 'ESGI'
        this.url = '/esgi#'

        this.modalNameInputCss = 'input.subject-name'
        this.subjectListCss = '.modal-body .subject-list'
        this.subjectsCss = `${this.subjectListCss} .subject-row`
        this.createNewSubjectButtonCss = '.modal-footer .btn-transparent'
        this.doneButtonCss = 'button=Done'

        this.subjectObjCss = {
            cellordercss: '.cell.order',
            namecss: '.name',
            draghandlecss: '.handle',
            expandcollapsecss: '.fa',
            showhidecss: '.showhide',
            edit: '.action-link.edit-subject-link',
            deletecss: '.action-link.delete-subject-link',
            addtestcss: '.add-test-button',
            addedtestcss: '.test-row'
        }

        // SubjectTab publish
        this.publishIndefinitelyCss = '#SubjectPublishType-indefinitely'
    }

    get doneButton () { return $(this.doneButtonCss) }
    get createNewSubjectButton () { return $(this.createNewSubjectButtonCss) }
    get publishIndefinitely () { return $(this.publishIndefinitelyCss) }

    createNewSubject (payload) {
        this.createNewSubjectButton.click()
        browser.pause(1000)
        this.setName(payload.subjectname)
        // Helper.setValue('input.form-control', payload.subjectname)
        payload.publishindefinitely && this.publishIndefinitely.click()
        payload.grade && this.addGradeToSubject()
        $('button=Save').click()
        this.waitForLoadingToComplete()
    }

    setName (name) {
        $(this.modalNameInputCss).setValue(name)
        browser.pause(1000)
    }

    addGradeToSubject () {
        $('.add-buble-item').click()
        browser.pause(500)
        $('label=Kindergarten').click()
        browser.pause(500)
        $('label=Publish').click() // click out of the grades dropdown
        browser.pause(500)
    }

    createSubjectTab (payload) {
        this.waitForLoadingToComplete()
        browser.pause(1000)
        this.createNewSubject(payload)
        this.addTestToSubject(payload.subjectname, payload.testname)
        this.waitForLoadingToComplete()
    }

    getSubjectRowByName (name) {
        return $$('.subject-row .subject-row-body').filter(function (subject) {
            return subject.getText() === name
        })[0]
    }

    getSubjectByName (name) {
        return $(`.name=${name}`)
    }

    deleteSubjectTab (name) {
        this.waitForLoadingToComplete()
        const row = this.getSubjectRowByName(name)
        if (row) {
            row.$(this.subjectObjCss.deletecss).click() // not working as it should
            browser.pause(250)
            $('span=Delete').click()
            browser.pause(1000)
        }
        $('button=Done').click()
        this.waitForLoadingToComplete()
    }

    expandSubjectRow (name) {
        this.isSubjectRowCollapsed(name) && this.clickSubjectRow(name)
    }

    isSubjectRowPresent (name) { // add-title
        return this.getSubjectByName(name).isDisplayed()
    }

    isSubjectRowCollapsed (name) { // add-title
        return this.getSubjectRowByName(name)
        .$('.add-test-row').isDisplayed()
    }

    clickSubjectRow (name) {
        this.getSubjectRowByName(name).click()
    }

    addTestToSubject (subjectName, testName) {
        this.clickAddTestToSubjectButton(subjectName)
        if (!this.isReportAProblemAlertDisplayed()) {
            AddTestPage.addTest(testName)
            $('button=Done').click()
            this.waitForLoadingToComplete()
        }
    }

    addTestToSubjectButton (name) {
        return this.getSubjectRowByName(name).$(this.subjectObjCss.addtestcss)
    }

    clickAddTestToSubjectButton (name) {
        $('.add-title').click() // @TODO: looking into making this dynamic
        this.waitForLoadingToComplete()
        // this.addTestToSubjectButton(name).click()
        browser.pause(1000)
    }

    isReportAProblemAlertDisplayed () {
        return $('span=Report an issue').isDisplayed()
    }

    getAddedTests (name) {
        return this.getSubjectRowByName(name)
        .$$(this.subjectObjCss.addedtestcss)
    }

    getAddedTestsText (subjectName) {
        return this.getAddedTests(subjectName).map((test) => {
            return test.getText()
        })
    }

    getAddedTestByname (subjectName, testName) {
        return this.getAddedTests(subjectName).filter((test) => {
            return test.getText() === testName
        })[0]
    }

    isTestAddedToSubject (subjectName, testName) {
        const addedTest = this.getAddedTestByname(subjectName, testName)
        return !!addedTest && addedTest.isDisplayed()
    }
}

export default new ManageSubjectsAndTestsPage()
