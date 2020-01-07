describe('The app', function() {
    it('should not explode on load', function() {
      let rootDiv = cy.get('div#root') // CRA Root page element, wont render if something's gone wrong
      expect(rootDiv).to.exist
    });
  })
