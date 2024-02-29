describe('Main Page', () => {
  it('should load the main page successfully', () => {
    cy.visit('https://business.amiro.ru');
    cy.contains('Amiro.CMS');
    cy.get('.header-nav').should('be.visible');
  });


describe('Catalog Page', () => {  it('should navigate to the product catalog page', () => {
    cy.visit('https://business.amiro.ru');
    cy.contains('Продукты').click();
    cy.contains('Каталог продуктов');
  });



  it('should search for a product', () => {
    cy.visit('https://business.amiro.ru/catalog');
    cy.get('.search-input').type('Product Name');
    cy.get('.search-btn').click();
    cy.contains('Product Name');
  });



  it('should add a product to the cart', () => {
    cy.visit('https://business.amiro.ru/product/1');
    cy.contains('Добавить в корзину').click();
    cy.contains('Товар добавлен в корзину');
  });



  it('should complete the checkout process', () => {
    cy.visit('https://business.amiro.ru/cart');
    cy.contains('Оформить заказ').click();
    cy.get('#name').type('John Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#phone').type('123456789');
    cy.get('#address').type('123 Main St');
    cy.contains('Оформить').click();
    cy.contains('Спасибо за заказ!');
  });



  it('should submit the feedback form', () => {
    cy.visit('https://business.amiro.ru/contacts');
    cy.get('#name').type('John Doe');
    cy.get('#email').type('john.doe@example.com');
    cy.get('#message').type('Test message');
    cy.contains('Отправить').click();
    cy.contains('Сообщение отправлено');
  });
});