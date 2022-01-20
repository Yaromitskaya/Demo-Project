import { LoginPage } from '../page-objects/LoginPage/LoginPage'
import { login_username, login_password } from '../../config'
import { MainPage } from '../page-objects/GeneralPage/MainPage'
import { ServicePage } from '../page-objects/ServicePage'


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

//This test is made to demonstrate login to application using data from fixtures
describe('Login with Fixtures Data ', () => {
	before(function () {
		cy.visit('/')
	})
	after(function () {
		MainPage.logout()
	})
	it('should login with fixtures data', () => {
		cy.fixture('user').then(user => {
			LoginPage.login(user.loginUsername, user.loginPassword)
			cy.url().should('include', 'general')
		})
	})
})
