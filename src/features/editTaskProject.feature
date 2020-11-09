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