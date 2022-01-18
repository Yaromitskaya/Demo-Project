import { LoginPage } from '../page-objects/LoginPage/LoginPage'
import { login_username, login_password } from '../../config'
import { MainPage } from '../page-objects/GeneralPage/MainPage'
import { BasePage } from '../page-objects/BasePage'
import { ServicePage } from '../page-objects/ServicePage'
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
		LoginPage.login(login_username, login_password)
		cy.url().should('include', 'general')
	})

	it('should login by means of API request', () => {
		ServicePage.loginAPI(login_username, login_password)
		cy.visit('/' + 'general')
		cy.url().should('include', 'general')
	})
})
