Feature: Create task

  Background:
    Given user with username: "testuser1@gmail.com" password: "Password_12345"
    And user with username: "testuser1@gmail.com" password: "Password_12345" signed in
    And user creates project via api with title: "Test Project" description: "Test project description"
    And user go to create task page
    And user waits for create task button

  Scenario: All create task form elements present
    Then create task button present
    And task title label is present
    And task title label has text "Title"
    And task title input field present
    And task title input field has placeholder text "Enter task's title"
    And task description label is present
    And task description label has text "Description"
    And task description input field is present
    And task description input field has placeholder text "Enter task's description"
    And task project label present
    And task project label has text "Project"
    And task project select field present
    And task project select has selected value "none"

  Scenario: Title and description field has required attribute
    Then task title input field has required attribute
    And task description input field has required attribute

  Scenario: User tries to create task without project
    When user tries to create task with title: "Test title" description: "Test description"
    And user waits for home page would load
    And the home page has been loaded
    And user waits for task with title "Test title"
    Then task has title "Test title"
    And task has description "Test description"
    And task has project title with text "Add Project"
    And task has status "OPEN"

  Scenario: User tries to create task with project
    When user tries to create task with title: "Test title" description: "Test description" project: "Test Project"
    And user waits for home page would load
    And the home page has been loaded
    And user waits for task with title "Test title"
    Then task has title "Test title"
    And task has description "Test description"
    And task has project title with text "Test Project"
    And task has status "OPEN"
