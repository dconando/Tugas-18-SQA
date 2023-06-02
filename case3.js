describe('Test Case 3: Mengisi formulir dan melakukan pengujian', () => {
  it('Membuka halaman', () => {
    cy.visit('https://www.example.com')
  })

  it('Mengisi formulir dan melakukan pengujian', () => {
    cy.get('input[name="username"]').type('user123')
    cy.get('input[name="password"]').type('password123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  })
})
