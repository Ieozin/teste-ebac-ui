///<reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
   
    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Apollo Running Short'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Apollo Running Short')
        cy.get('.product_title').should('contain', 'Apollo Running Short'   )
        
    });

    it('Deve adicionar produto ao carrinho', () => {
        produtosPage.buscarProduto('Aero Daily Fitness Tee')     
        produtosPage.addProdutoCarrinho('S', 'Black', 5)
        cy.get('.woocommerce-message').should('contain', 'carrinho.')
    });

    it.only('Deve adicionar produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[1].nomeProduto)     
            produtosPage.addProdutoCarrinho(dados[1].tamanho, dados[1].cor, dados[1].tamanho)
            cy.get('.woocommerce-message').should('contain', dados[1].nomeProduto)   
        })
      
    });
    
});