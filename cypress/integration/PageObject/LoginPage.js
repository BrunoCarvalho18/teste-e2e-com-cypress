class LoginPage {
    navigate(){ 
        cy.visit('/login')
    }

    enterEmail(username){ 
        cy.get('[id=email]').clear()
            .type(username)
        return this
    }

    enterPassword(password){ 
        cy.get('[id=password]').clear()
            .type(password)
        return this
    }

    submit(){ 
        cy.get('[type=submit]').click()
    }

}

export default LoginPage