Feature: Create project

  Background:
    Given user with username: "testuser1@gmail.com" password: "Password_12345"
    And user with username: "testuser1@gmail.com" password: "Password_12345" signed in
    And user go to create project page
    And user waits for create project button

  Scenario: All create project form elements present
    Then create project button present
    And project title label is present
    And project title label has text "Title"
    And project title input field present
    And project title input field has placeholder text "Enter project's title"
    And project description label is present
    And project description label has text "Description"

  Scenario: Title field has required attribute
    Then project title input field has required attribute
    And project description input field has not required attribute

  Scenario: User tries to create project with description
    When user tries to create project with title: "Test title" description: "Test description"
    And user waits for home page would load
    And the home page has been loaded
    And user waits for project with title "Test title"
    Then project has title "Test title"
    And project has description "Test description"

  Scenario: User tries to create project without description
    When user tries to create project with title: "Test title" description: ""
    And user waits for home page would load
    And the home page has been loaded
    And user waits for project with title "Test title"
    Then project has title "Test title"
    And project has description ""