Feature: Login

  Scenario: All Login form elements present
    Then Sign In button present
    And Sign In button has text "Sign In"
    And Email label present
    And Email label has text "Email"
    And Email input field present
    And Password label present
    And Password label has text "Password"
    And Password input field present

  Scenario: User can log in to the system with correct credentials
    When user tries to login with "testuser1@gmail.com" "Password_12345"
    And user waits for home page would load
    Then the home page has been loaded

  Scenario: Email input field has correct attributes
    Then email has type attribute email
    And email has required attribute

  Scenario: Password input field has correct attributes
    Then password has type attribute password
    And password has required attribute

  Scenario: the user gets error whet tries to log in with invalid credentials
    When user tries to login with "testuser1@gmail.com" "WrongPassword_12345"
    And waits for error message
    Then error message presents
    And error message text is "Invalid credentials"