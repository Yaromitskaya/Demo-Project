import { searchForm } from '../page-objects/GeneralPage/MainPageComponents'
import { login_username, login_password } from '../../config'
import { MainPage } from '../page-objects/GeneralPage/MainPage'
import { BasePage } from '../page-objects/BasePage'

describe('Visability of search form', () => {
	before(function () {
		cy.visit('/')
		BasePage.loginAPI(login_username, login_password)
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
