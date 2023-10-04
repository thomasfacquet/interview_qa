/// <reference types="cypress" />

context('Advanced research', () => {
  describe('Acces to pokedex website', () => {
    it('should access to the site', () => {
      cy.visit('https://www.pokemon.com/fr/pokedex')
      })
  })

  describe('Access to advanced research', () => {
    it('should display advanced research menu', () => {
      cy.visit('https://www.pokemon.com/fr/pokedex')
      cy.findByText('Afficher la recherche avancée').should("be.visible").click();
      })
  })

})
