import {
	logo,
	userProfile,
	logoutButton,
	showSearchButton,
	searchButton,
	searchForm,
	createReportButton,
	downloadExelReportButton,
} from '../GeneralPage/MainPageComponents'

export class MainPage {
	static logout() {
		cy.get(userProfile).click()
		cy.get(logoutButton).click()
	}
	static showSearchForm() {
		cy.get(showSearchButton).click()
	}
}
