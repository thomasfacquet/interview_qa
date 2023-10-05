/// <reference types="cypress" />

context('Advanced research', () => {
  describe('Access to advanced research', () => {
    it('should display advanced research menu', () => {
      cy.visit('https://www.pokemon.com/fr/pokedex')
      cy.get("[role=alertdialog]").should("be.visible");
      cy.get("[id=onetrust-reject-all-handler]").should("be.visible").click();
      cy.findByText('Afficher la recherche avancée').should("be.visible").click();
      cy.get(".pokedex-filter-tw-list").should("be.visible");
      cy
      .get("[id=search]")
      .should("be.visible")
      .should("contain.text", "Rechercher");
      cy.get("[id=reset]")
      .should("be.visible")
      .should("contain.text", "Réinitialiser");
      
      })
  })

})
