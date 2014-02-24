describe("Contact", function() {
  describe("fullName", function() {
    it("Combines the first and last name, separated by a space", function() {
      var testContact = Object.create(Contact);
      testContact.firstName = "Dolly";
      testContact.lastName = "Parton";
      testContact.fullName().should.equal("Dolly Parton");
    });
  });
});