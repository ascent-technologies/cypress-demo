
describe("request", function() {
  it("should display ", function() {
    // Use the form
    cy.get("select[name=method]").invoke('val','GET').trigger('change')//.select("GET");

    // type a url
    let url = "https://dog.ceo/api/breeds/image/random";
    cy.get("input[name=url]").type(url);

    // Submit the form
    cy.get('button[type="submit"]').click();

    // Give this element 10 seconds to appear
    cy.get("[data-name=success] pre", {timeout: 1000}).should('contain.text','"response": {')

  });
});
