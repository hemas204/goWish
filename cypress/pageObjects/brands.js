class BrandsPage {
    getInspiration() {
      return cy.contains("Inspiration");
    }
    getBrands() {
      return cy.contains("Brands");
    }
    getSearchInput() {
      return cy.get('[data-testid="search-input"]');
    }
  }
  export default BrandsPage;