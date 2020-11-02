Feature: Create task

  Background:
    Given user with username: "testuser1@gmail.com" password: "Password_12345"
    And user with username: "testuser1@gmail.com" password: "Password_12345" signed in
    And user got to create task page
    And user waits for create task button

  Scenario: All create task form elements present
    Then create task button present
    And title label is present
    And title label has text "Title"
    And title input field present
    And title input field has placeholder text "Enter task's title"
    And description label is present
    And description label has text "Description"
    And description input field is present
    And description input field has placeholder text "Enter task's description"
    And project label present
    And project label has text "Project"
    And project select field present
    And project select has selected value "none"

  Scenario: Title and description field has required attribute
    Then title input field has required attribute
    And description input field has required attribute

  Scenario: User tries to create task without project
    When user tries to create task with title: "Test title" description: "Test description"
    And user waits for home page would load
    Then the home page has been loaded
