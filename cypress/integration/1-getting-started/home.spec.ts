// import { urlBase } from './block_app.spec'

describe('Home page test', () => {
    it('test header', () => {
        cy.visit('http://localhost:3000')
        cy.contains('Inicio').click()
        cy.contains('Articulos').click()
        cy.contains('Proyectos').click()
        cy.get('[src="/assets/logo.svg"]').first().click()
        cy.contains('Historia').click()
        cy.contains('Habilidades').click()
        cy.contains('Ruta').click()
        cy.contains('Inicio').click()
        cy.get('[href="/search"]').click()
    })
})
