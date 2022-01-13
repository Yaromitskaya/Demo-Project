import { searchForm } from '../page-objects/GeneralPage/MainPageComponents'
import { login_username, login_password } from '../../config'
import { MainPage } from '../page-objects/GeneralPage/MainPage'
import { BasePage } from '../page-objects/BasePage'

describe('Visability of search form', () => {
	before(function () {
		BasePage.loginAPI(login_username, login_password)
	})
	it('search form open/close test', () => {
		cy.visit('/' + 'general')
		MainPage.showSearchForm()
		cy.get(searchForm).should('be.visible')
		MainPage.showSearchForm()
		cy.get(searchForm).should('not.exist')
	})
})

describe('Website navigation', () => {
	beforeEach(function () {
		BasePage.loginAPI(login_username, login_password)
	})
	it('should navigate to profile page', () => {
		cy.visit('/' + 'profile')
		cy.url().should('include', 'profile')
	})

	it('should navigate to settings page', () => {
		cy.visit('/' + 'settings')
		cy.url().should('include', 'settings')
	})
})
