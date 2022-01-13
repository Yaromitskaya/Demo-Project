import {
	createReportButton,
	downloadExelReportButton,
} from '../page-objects/GeneralPage/MainPageComponents'

export class BasePage {
	static reportDowload() {
		cy.get(createReportButton).click()

		cy.task('downloads', 'cypress/downloads').then(before => {
			cy.get(downloadExelReportButton).click()
			cy.wait(5000)

			cy.task('downloads', 'cypress/downloads').then(after => {
				expect(after.length).to.be.eq(before.length + 1)
			})
		})
	}

	static loginAPI(username, password) {
		cy.request({
			method: 'POST',
			url: 'https://alpha.unic-lab.by/api/auth/v1/login',
			body: { login: username, password: password },
		})
			.its('body')
			.then(body => {
				localStorage.setItem('accessToken', body.accessToken)
				localStorage.setItem('refreshToken', body.refreshToken)
			})

		cy.visit('/' + 'general')
	}
}
