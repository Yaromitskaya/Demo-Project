export class ServicePage {
	static loginAPI(username, password) {
		cy.request({
			method: 'POST',
			url: 'https://alpha.unic-lab.by/api/auth/v1/login',
			body: { login: username, password: password },
		})
			.its('body')
			.then(body => {
				localStorage.setItem('accessToken', body.accessToken)
				localStorage.setItem('refreshToken', body.refreshToken)
			})
	}
}
