it("should load the page", () => {
  cy.visit("/");
  cy.wait(1000);
  cy.get('button').click({force: true});
  cy.wait(1000);
  cy.get('[data-testid="id"]').should('be.visible').then((id) => {
    expect(id.text().trim()).to.eq('Id: 1');
  });
  cy.get('[data-testid="userId"]').should('be.visible').then((id) => {
    expect(id.text().trim()).to.eq('UserId: 1');
  });
});