Feature:

  Background:
    Given sign up link on nav bar present
    When user clicks to sign up link on nav bar
    And user waits for sign up button


  Scenario: All Login form elements present
    Then sign up button present
    And Email label present
    And Email label has text "Email"
    And Email input field present
    And Email input field has placeholder "Enter email"
    And Password label present
    And Password label has text "Password"
    And Password input field present
    And Password input field has placeholder "password"
    And Confirm password label present
    And Confirm password label has text "Confirm password"
    And Confirm password input field present
    And Confirm password input field has placeholder "confirm password"

  Scenario: Email input field has correct attributes
    Then email has type attribute email
    And email has required attribute

  Scenario: Password input field has correct attributes
    Then password has type attribute password
    And password has required attribute

  Scenario: Confirm password input field has correct attributes
    Then confirm password has type attribute password
    And confirm password has required attribute

  Scenario: User can sing un to the system with correct credentials
    When user tries to sing up with "testuser1@gmail.com" "Password_12345"
    And user waits for home page would load
    Then the home page has been loaded
    And access token presents in browser storage

  Scenario: The user gets an error when tries sign up with a weak password
    When user tries to sing up with "testuser1@gmail.com" "password"
    And waits for error message
    Then error message presents
    And error message text is "Password too weak"

  Scenario: The user gets an error when password and confirm password not match
    When user sets email to "testuser1@gmail.com"
    And user sets password to "Password_12345"
    And  user sets confirm password to "Password_1234"
    And user clicks on submit button
    And waits for error message
    Then error message presents
    And error message text is "Password not match"
