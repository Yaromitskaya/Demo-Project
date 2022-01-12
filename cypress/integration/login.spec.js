import { LoginPage } from '../page-objects/LoginPage/LoginPage'

import { login_username, login_password } from '../../config'

import { MainPage } from '../page-objects/GeneralPage/MainPage'

describe('Various types of login', () => {
	before(function () {
		cy.visit('/')
	})

	it('should login by means of UI login form', () => {
		cy.login(login_username, login_password)
		cy.url().should('include', 'general')
		MainPage.logout()
	})

	it('should login by means of API request', () => {
		cy.request({
			method: 'POST',
			url: 'https://alpha.unic-lab.by/api/auth/v1/login',
			body: { login: 'user', password: '123456789' },
		})
			.its('body')
			.then(body => {
				localStorage.setItem('accessToken', body.accessToken)
				localStorage.setItem('refreshToken', body.refreshToken)
			})

		cy.visit('/' + 'general')
		cy.url().should('include', 'general')
	})
})
