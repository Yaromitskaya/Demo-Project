import { LoginPage } from '../page-objects/LoginPage/LoginPage'
import { login_username, login_password } from '../../config'
import { MainPage } from '../page-objects/GeneralPage/MainPage'
import { BasePage } from '../page-objects/BasePage'
import {
	loginField,
	passwordField,
	buttonEnter,
} from '../page-objects/LoginPage/LoginPageComponents'

describe('Various types of login', () => {
	before(function () {
		cy.visit('/')
	})
	afterEach(function () {
		MainPage.logout()
	})

	it('should login by means of UI login form', () => {
		cy.login(
			loginField,
			passwordField,
			buttonEnter,
			login_username,
			login_password
		)
		cy.url().should('include', 'general')
	})

	it('should login by means of API request', () => {
		BasePage.loginAPI(login_username, login_password)
		cy.visit('/' + 'general')
		cy.url().should('include', 'general')
	})
})
