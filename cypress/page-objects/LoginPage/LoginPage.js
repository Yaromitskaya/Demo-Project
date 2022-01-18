import {
	companyLogo,
	chooseLanguageMenu,
	loginField,
	passwordField,
	buttonEnter,
	registrationButton,
	forgotPasswordButton,
} from '../LoginPage/LoginPageComponents'

export class LoginPage {
	static login(username, password) {
		cy.clearCookies()
		cy.get(loginField).type(username)
		cy.get(passwordField).type(password)
		cy.get(buttonEnter).click()
	}

	static clickRegitration() {
		cy.contains(registrationButton).click()
	}
	static clickForgotPassword() {
		cy.contains(forgotPasswordButton).click()
	}
}
