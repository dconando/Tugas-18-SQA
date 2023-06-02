describe('Test Case 4: Melakukan navigasi dan memverifikasi URL', () => {
  it('Membuka halaman', () => {
    cy.visit('https://www.example.com')
  })

  it('Melakukan navigasi dan memverifikasi URL', () => {
    cy.contains('About').click()
    cy.url().should('include', '/about')
  })
})
