Feature: Edit task project

  Background:
    Given user with username: "testuser1@gmail.com" password: "Password_12345"
    And user with username: "testuser1@gmail.com" password: "Password_12345" signed in
    And user creates project via api with title: "Test Project" description: "Test Project description"

  Scenario: All edit task form elements present for task without project
    Given user creates task via api with title: "Test Task" description: "Test Task description"
    And user go to main page
    And user waits for home page would load
    And user waits for task with title "Test Task"
    When user clicks on project title with text "Add Project"
    And user waits for save changes button
    Then task title input field present
    And task title label has text "Title"
    And task title input field present
    And task title input field has text "Test Task"
    And task description label is present
    And task description label has text "Description"
    And edited task has status "OPEN"
    And task project select field present
    And task project select has selected value "none"


  Scenario: User changes task project
    Given user creates task via api with title: "Test Task" description: "Test Task description"
    And user go to main page
    And user waits for home page would load
    And user waits for task with title "Test Task"
    When user clicks on project title with text "Add Project"
    And user waits for save changes button
    And user set project to "Test Project"
    And user clicks on save changes button
    And user waits for home page would load
    And user waits for task with title "Test Task"
    Then task has title "Test Task"
    And task has description "Test Task description"
    And task has project title with text "Test Project"
    And task has status "OPEN"