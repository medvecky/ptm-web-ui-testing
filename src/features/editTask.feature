Feature: Edit task

  Background:
    Given user with username: "testuser1@gmail.com" password: "Password_12345"
    And user with username: "testuser1@gmail.com" password: "Password_12345" signed in
    And user creates project via api with title: "Test Project" description: "Test Project description"

  Scenario: All edit task form elements present for task without project
    Given user creates task via api with title: "Test Task" description: "Test Task description"
    And user go to main page
    And user waits for home page would load
    And user waits for task with title "Test Task"
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
    And task project label present
    And task project label has text ""

  Scenario: All edit task form elements present for task with project
    Given user creates task via api with title: "Test Task" description: "Test Task description" and project
    And user go to main page
    And user waits for home page would load
    And user waits for task with title "Test Task"
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
    And task project label present
    And task project label has text "Test Project"

  Scenario: Title and description has not change if just click on save button
    Given user creates task via api with title: "Test Task" description: "Test Task description"
    And user go to main page
    And user waits for home page would load
    And user waits for task with title "Test Task"
    When user clicks on task title with text "Test Task"
    And user waits for save changes button
    And task title input field has text "Test Task"
    And task description input field has text "Test Task description"
    And task status label has text "OPEN"
    And task project label has text ""
    And user clicks on save changes button
    And user waits for home page would load
    And the home page has been loaded
    And user waits for task with title "Test Task"
    Then task has title "Test Task"
    And task has description "Test Task description"
    And task has project title with text "Add Project"
    And task has status "OPEN"

  Scenario: User gets error message when tries to save empty title and description
    Given user creates task via api with title: "Test Task" description: "Test Task description"
    And user go to main page
    And user waits for home page would load
    And user waits for task with title "Test Task"
    When user clicks on task title with text "Test Task"
    And user waits for save changes button
    And task title input field has text "Test Task"
    And task description input field has text "Test Task description"
    And task status label has text "OPEN"
    And task project label has text ""
    When user sets task title to ""
    And user sets task description to ""
    And user clicks on save changes button
    And waits for error message
    Then error message presents
    And error message text is "Empty title and description"


  Scenario: User can edit task's title and description
    Given user creates task via api with title: "Test Task" description: "Test Task description"
    And user go to main page
    And user waits for home page would load
    And user waits for task with title "Test Task"
    When user clicks on task title with text "Test Task"
    And user waits for save changes button
    And task title input field has text "Test Task"
    And task description input field has text "Test Task description"
    And task status label has text "OPEN"
    And task project label has text ""
    When user sets task title to "New Task"
    And user sets task description to "New Task description"
    And user clicks on save changes button
    And user waits for home page would load
    And the home page has been loaded
    And user waits for task with title "New Task"
    Then task has title "New Task"
    And task has description "New Task description"
    And task has project title with text "Add Project"
    And task has status "OPEN"