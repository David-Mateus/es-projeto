describe('Sign in', () => {
  it('should sign in with valid credentials', () => {
    cy.visit('http://localhost:3000/authi/signInPage');

    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('password');

    cy.get('button[type="submit"]').click();
    
    
  });

  it('should show error messages with invalid credentials', () => {
    cy.visit('http://localhost:3000/authi/signInPage');

    cy.get('input[name="email"]').type('invalid-email');
    cy.get('input[name="password"]').type('invalid-password');

    cy.get('button[type="submit"]').click();

    cy.contains('email must be a valid email').should('be.visible');
    
    

    cy.url().should('eq', 'http://localhost:3000/authi/signInPage');
  });
});

