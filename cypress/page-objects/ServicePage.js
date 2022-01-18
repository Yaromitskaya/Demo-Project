export class ServicePage {
	static loginAPI(username, password) {
		cy.request({
			method: 'POST',
			url: Cypress.env('LOGIN_URL'),
			body: { login: username, password: password },
		})
			.its('body')
			.then(body => {
				localStorage.setItem('accessToken', body.accessToken)
				localStorage.setItem('refreshToken', body.refreshToken)
			})
	}
}
