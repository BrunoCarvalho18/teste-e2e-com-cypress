import LoginPage from './PageObject/LoginPage'


describe('Cypress POM Test Suite', function () {

    before(function () {
        cy.fixture('credentials').then(function (testdata) {
            this.testdata = testdata
        })
    })

    it('Login with valid credentials',function (){
        const login = new LoginPage()
        login.navigate()
        login.enterEmail(this.testdata.username)
        login.enterPassword(this.testdata.password)
        login.submit()
        cy.url().should('be.equal', 'https://www.mavenclinic.com/app/dashboard')
    })
    
})

