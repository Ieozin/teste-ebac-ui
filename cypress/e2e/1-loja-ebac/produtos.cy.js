///<reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });
   
    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block').first().click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição')
    });

    it('Deve selecionar o ultimo produto da lista', () => {
        cy.get('.product-block').last().click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição') 
    });

    it('Deve selecionar o terceiro produto da lista', () => {
        cy.get('.product-block').eq(2).click()
        cy.get('#tab-title-description > a').should('contain', 'Descrição') 
    });

});