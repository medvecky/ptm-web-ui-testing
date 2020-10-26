Feature:

  Scenario: All Login form elements present
    Given sign up link on nav bar present
    When user clicks to sign up link on nav bar
    And user waits for sign up button
    Then sign up button present
    And Email label present
    And Email label has text "Email"
    And Email input field present
    And Password label present
    And Password label has text "Password"
    And Password input field present
    And Confirm password label present
    And Confirm password label has text "Confirm password"
    And Confirm password input field present

