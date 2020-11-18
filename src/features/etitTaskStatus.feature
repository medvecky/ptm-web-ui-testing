Feature: Edit task status

  Background:
    Given user with username: "testuser1@gmail.com" password: "Password_12345"
    And user with username: "testuser1@gmail.com" password: "Password_12345" signed in
    And user creates project via api with title: "Test Project" description: "Test Project description"

  Scenario: All edit task status form elements present for task without project
    Given user creates task via api with title: "Test Task" description: "Test Task description"
    And user go to main page
    And user waits for home page would load
    And user waits for task with title "Test Task"
    When user click on change task status button
    And user waits for save changes button
    Then edit task status has title "Test Task"
    And edit task status has description "Test Task description"
    And edit task status select has text "OPEN"
    And save changes button present

  Scenario: Change status from OPEN to IN_PROGRESS
    Given user creates task via api with title: "Test Task" description: "Test Task description"
    And user go to main page
    And user waits for home page would load
    And user waits for task with title "Test Task"
    When user click on change task status button
    And user waits for save changes button
    And edit task status select has text "OPEN"
    And user sets task status to "IN_PROGRESS"
    And user clicks on save changes button
    And user waits for change status button
    Then task has title "Test Task"
    And task has description "Test Task description"
    And task has project title with text "Add Project"
    And task has status "IN_PROGRESS"
    And task has correct begin date

  Scenario: Change status from IN_PROGRESS to DONE
    Given user creates task via api with title: "Test Task" description: "Test Task description"
    And user go to main page
    And user waits for home page would load
    And user waits for task with title "Test Task"
    When user click on change task status button
    And user waits for save changes button
    And user sets task status to "IN_PROGRESS"
    And user clicks on save changes button
    And user waits for home page would load
    And user waits for task with title "Test Task"
    And user click on change task status button
    And user waits for save changes button
    And user sets task status to "DONE"
    And user clicks on save changes button
    And user waits for change status button
    Then task has title "Test Task"
    And task has description "Test Task description"
    And task has project title with text "Add Project"
    And task has status "DONE"
    And task has correct begin date
    And task has correct end date

