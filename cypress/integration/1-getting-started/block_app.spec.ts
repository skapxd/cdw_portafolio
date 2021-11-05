const urlBase = 'http://localhost:3000'

describe('Blog app', () => {
    beforeEach(() => cy.visit(urlBase))

    it('front page can be open', () => {
        // cy.visit(urlBase)
        cy.contains('Desarrollo web y móvil')
    })

    it('open search', () => {
        // cy.visit(urlBase)
        cy.contains('Inicio').click()
        cy.contains('Articulos').click()
        cy.contains('Proyectos').click()
        cy.contains('Historia').click()
        cy.contains('Habilidades').click()
        cy.contains('Ruta').click()
        // cy.get('[data-cy="drawer"]').click()
        // cy.get('[data-cy="search_icon"]').click()
        // cy.get('[data-cy="search_input"]').type('hola')
    })
})
