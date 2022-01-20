import { login_username, login_password } from '../../config'
import { ServicePage } from '../page-objects/ServicePage'
import {
	createReportButton,
	downloadExelReportButton,
} from '../page-objects/GeneralPage/MainPageComponents'

describe('Download a report', () => {
	it('should download a report to computer', () => {
		cy.log('GIVEN User is at the main page')
		ServicePage.loginAPI(login_username, login_password)
		cy.visit('/' + 'general')
		cy.log('WHEN User clicks on cteate report button')
		cy.get(createReportButton).click()
		cy.task('downloads', 'cypress/downloads').then(before => {
			cy.log('AND clicks download report button')
			cy.get(downloadExelReportButton).click()
			cy.wait(5000)
			cy.log('THEN Report is downloaded')
			cy.task('downloads', 'cypress/downloads').then(after => {
				expect(after.length).to.be.eq(before.length + 1)
			})
		})
	})
})
