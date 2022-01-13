import { login_username, login_password } from '../../config'
import { MainPage } from '../page-objects/GeneralPage/MainPage'
import { BasePage } from '../page-objects/BasePage'

describe('Download a report', () => {
	before(function () {
		BasePage.loginAPI(login_username, login_password)
		cy.visit('/' + 'general')
	})

	it('should download a report to computer', () => {
		BasePage.reportDowload()
	})
})
