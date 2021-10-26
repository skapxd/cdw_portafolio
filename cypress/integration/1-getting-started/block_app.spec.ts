const urlBase = 'http://localhost:3000'

describe('Blog app', () => {
    beforeEach(() => cy.visit(urlBase))

    it('front page can be open', () => {
        cy.contains('Desarrollo web y móvil')
    })

    it('open search', () => {
        // cy.get('[data-cy="drawer"]').click()
        cy.get('[data-cy="search_icon"]').click()
        cy.get('[data-cy="search_input"]').type('hola')
    })
})
