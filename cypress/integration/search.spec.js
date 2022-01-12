import {
	logo,
	userProfile,
	logoutButton,
	showSearchButton,
	searchButton,
	searchForm,
	downloadExelReportButton,
} from '../page-objects/GeneralPage/MainPageComponents'
import { login_username, login_password } from '../../config'
import { MainPage } from '../page-objects/GeneralPage/MainPage'

describe('Visability of search form', () => {
	before(function () {
		cy.visit('/')
		cy.login(login_username, login_password)
		cy.url().should('include', 'general')
	})
	it('search form should be visible', () => {
		MainPage.showSearchForm()
		cy.get(searchForm).should('be.visible')
	})

	it('search form should be hidden', () => {
		MainPage.showSearchForm()
		cy.get(searchForm).should('not.exist')
	})
})
