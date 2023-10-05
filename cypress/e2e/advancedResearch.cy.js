/// <reference types="cypress" />

context('Advanced research', () => {
  describe('Access to advanced research', () => {
    it('should display advanced research menu', () => {
      cy.log('display advanced research');
      cy.visit('https://www.pokemon.com/fr/pokedex')
      cy.get("[role=alertdialog]").should("be.visible");
      cy.get("[id=onetrust-reject-all-handler]").should("be.visible").click();
      cy.findByText('Afficher la recherche avancée').should("be.visible").click();
      cy.get(".pokedex-filter-tw-list").should("be.visible");
      cy.get(".pokedex-filter-tw-list").find('li').should('have.length', 18)
      cy.get("[id=minRangeBox]").should("be.visible").should("have.value", "1");
      cy.get("[id=maxRangeBox]").should("be.visible").should("have.value", "1010");
      cy.get("[id=advSearch]").should("be.visible")
      cy.get("[id=reset]").should("be.visible")
      cy.findByText('Cacher la recherche avancée').should("be.visible");
      })
  })
})
