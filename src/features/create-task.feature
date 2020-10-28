Feature: Create task

  Scenario: All create task form elements present
    Given user with username: "testuser1@gmail.com" password: "Password_12345"
    And user with username: "testuser1@gmail.com" password: "Password_12345" signed in
    And user got to create task page
    And user waits for create task button
