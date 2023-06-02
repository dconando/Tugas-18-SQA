describe('Test Case 1: Membuka halaman dan memverifikasi judul', () => {
  it('Membuka halaman', () => {
    cy.visit('https://www.example.com')
  })

  it('Memverifikasi judul', () => {
    cy.title().should('include', 'Example Domain')
  })
})
