Feature: home page

  Scenario: All home page elements present
    Given user with username: "testuser1@gmail.com" password: "Password_12345"
    And user with username: "testuser1@gmail.com" password: "Password_12345" signed in
    And user go to main page
    And user waits for home page would load
    Then open badge present
    And in progress badge present
    And done badge present
    And projects badge present
    And clear filter button present
    And tasks without filter button present