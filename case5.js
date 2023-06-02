describe('Test Case 5: Memverifikasi tampilan elemen menggunakan assersi visual', () => {
  it('Membuka halaman', () => {
    cy.visit('https://www.example.com')
  })

  it('Memverifikasi tampilan elemen menggunakan assersi visual', () => {
    cy.get('h1').should('be.visible')
    cy.get('h1').matchImageSnapshot()
  })
})
