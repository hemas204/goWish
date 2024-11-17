import BrandsPage from "../pageObjects/brands";
const brands = new BrandsPage();

describe("Inspiration > Brands Flow", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Navigates to Brands, searches a brand and asserts follower count", () => {
    brands.getInspiration().click();
    brands.getBrands().click();
    brands.getSearchInput().type("babydan");
    cy.contains('h2[class*="BrandItem__BrandName"]', "BabyDan")
      .should("be.visible")
      .parent()
      .find("img")
      .should("be.visible")
      .click();
    cy.get('[class*="Followers__FollowersCount"]').should("contain", "17");
  });
});