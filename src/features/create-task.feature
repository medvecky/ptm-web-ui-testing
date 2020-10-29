Feature: Create task

  Scenario: All create task form elements present
    Given user with username: "testuser1@gmail.com" password: "Password_12345"
    And user with username: "testuser1@gmail.com" password: "Password_12345" signed in
    And user got to create task page
    And user waits for create task button
    Then create task button present
    And title label is present
    And title label has text "Title"
    And title input field present
    And title input field has placeholder text "Enter task's title"
    And description label is present
    And description label has text "xxx"
