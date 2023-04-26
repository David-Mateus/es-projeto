describe('Teste de redefinição de senha', () => {
    it('carrega com sucesso', () => {
        cy.visit('http://localhost:3000/authi/forgotPassword')
      })
    it('Exibe mensagem de erro ao enviar formulário com campo de email vazio', () => {
      cy.visit('http://localhost:3000/authi/forgotPassword');

      
      cy.get('button[type="submit"]').click()
  
      cy.get('#data-test-email').should('contain.text', 'email is a required field');
    });
  
    it('Exibe mensagem de sucesso ao enviar formulário com email válido', () => {
      cy.visit('http://localhost:3000/authi/forgotPassword');
  
     
      cy.get('input#email').type('usuario@teste.com');
      cy.get('form').submit();
  
    });
  });
  