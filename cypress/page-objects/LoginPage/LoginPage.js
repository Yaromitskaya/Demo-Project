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
	static clickRegitration() {
		cy.contains(registrationButton).click()
	}
	static clickForgotPassword() {
		cy.contains(forgotPasswordButton).click()
	}
	static clickSubmit() {
		cy.get(buttonEnter).click()
	}
}
