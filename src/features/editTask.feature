Feature: Edit task

  Background:
    Given user with username: "testuser1@gmail.com" password: "Password_12345"
    And user with username: "testuser1@gmail.com" password: "Password_12345" signed in
    And user creates task via api with title: "Test Task" description: "Test Task description"
    And user go to main page
    And user waits for home page would load
    And user waits for task with title "Test Task"

  Scenario: All edit task form elements present
    When user clicks on task title with text "Test Task"
    And user waits for save changes button
    Then save changes button present
    And task title label is present
    And task title label has text "Title"
    And task title input field present
    And task title input field has text "Test Task"
    And task description label is present
    And task description label has text "Description"
    And task title input field present
    And task description input field has text "Test Task description"
    And task has status label
    And task status label has text "OPEN"