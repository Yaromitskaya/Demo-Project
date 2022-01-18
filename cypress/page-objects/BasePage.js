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
}
