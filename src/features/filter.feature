Feature: filter

  Background:
    Given user with username: "testuser1@gmail.com" password: "Password_12345"
    And user with username: "testuser1@gmail.com" password: "Password_12345" signed in
    And user creates project via api with title: "Test Project" description: "Test Project description"
    And user creates task via api with title: "Test task" description: "Test task description"
    And user creates task via api with title: "Test task with project" description: "Test task description" and project
    And user go to main page
    And user waits for home page would load

  Scenario: User filters tasks by project
    Given 2 tasks presents
    And 1 task has title "Test task"
    And 2 task has title "Test task with project"
    And project has title "Test Project"
    When user clicks on project with title "Test Project"
    And user waits for home page would load
    Then 1 tasks presents
    And 1 task has title "Test task with project"

  Scenario: User selects tasks without project
    Given 2 tasks presents
    And 1 task has title "Test task"
    And 2 task has title "Test task with project"
    And project has title "Test Project"
    When user clicks on tasks without project button
    And user waits for home page would load
    Then 1 tasks presents
    And 1 task has title "Test task"

  Scenario: User clears filter
    Given 2 tasks presents
    And 1 task has title "Test task"
    And 2 task has title "Test task with project"
    And project has title "Test Project"
    And user clicks on project with title "Test Project"
    And user waits for home page would load
    And 1 tasks presents
    And 1 task has title "Test task with project"
    When user clicks on clear filter button
    And user waits for home page would load
    Then 2 tasks presents
    And 1 task has title "Test task"
    And 2 task has title "Test task with project"
