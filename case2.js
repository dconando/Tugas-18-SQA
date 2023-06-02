describe('Test Case 2: Mencari elemen dan memverifikasi teks', () => {
  it('Membuka halaman', () => {
    cy.visit('https://www.example.com')
  })

  it('Mencari elemen dan memverifikasi teks', () => {
    cy.get('h1').should('contain', 'Example Domain')
  })
})
