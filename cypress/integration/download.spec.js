import { login_username, login_password } from '../../config'
import { MainPage } from '../page-objects/GeneralPage/MainPage'
import {
	logo,
	userProfile,
	logoutButton,
	showSearchButton,
	searchButton,
	searchForm,
	createReportButton,
	downloadExelReportButton,
} from '../page-objects/GeneralPage/MainPageComponents'

describe('Download a report', () => {
	before(function () {
		cy.visit('/')
		cy.login(login_username, login_password)
	})

	it('shold download a report to computer', () => {
		cy.get(createReportButton).click()

		cy.task('downloads', 'cypress/downloads').then(before => {
			cy.get(downloadExelReportButton).click()
			cy.wait(5000)

			cy.task('downloads', 'cypress/downloads').then(after => {
				expect(after.length).to.be.eq(before.length + 1)
			})
		})
	})
})
