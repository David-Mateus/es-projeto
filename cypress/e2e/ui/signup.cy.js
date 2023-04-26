describe('SignUp Page', () => {
    it('carrega com sucesso', () => {
      cy.visit('http://localhost:3000/authi/signupPage')
    })
    it('exibe erros de validação ao enviar com campos vazios', () => {
        cy.visit('http://localhost:3000/authi/signupPage')
      
        cy.get('#name').clear()
        cy.get('#phone').clear()
        cy.get('#email').clear()
        cy.get('#password').clear()
        
        cy.get('form').submit()
      
        cy.get('#data-test-name').should('contain.text', 'name is a required field')
        cy.get('#data-test-phone').should('contain.text', 'phone is a required field')
        cy.get('#data-test-email').should('contain.text', 'email is a required field')
        cy.get('#data-test-password').should('contain.text', 'password is a required field')
      })
      
    
    it('exibe erros de validação ao enviar com e-mail inválido', () => {
      cy.visit('http://localhost:3000/authi/signupPage')
  
      cy.get('input#email').type('email is a required field')
      cy.get('form').submit()
    })
  
    it('redireciona para a página de login após o registro bem-sucedido', () => {
      cy.visit('http://localhost:3000/authi/signupPage')
  
      cy.get('#name').type('John Doe')
      cy.get('#phone').type('1234567890')
      cy.get('#email').type('johndoe@example.com')
      cy.get('#password').type('password123')
  
      cy.get('form').submit()
  
      cy.url().should('include', 'http://localhost:3000')
    })
  })
  