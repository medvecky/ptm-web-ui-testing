Feature: Edit project

  Background:
    Given user with username: "testuser1@gmail.com" password: "Password_12345"
    And user with username: "testuser1@gmail.com" password: "Password_12345" signed in
    And user creates project via api with title: "Test Project" description: "Test Project description"

  Scenario: All edit project form elements present
    Given user go to main page
    And user waits for home page would load
    And user waits for project with title "Test Project"
    When user clicks on edit button
    And user waits for save changes button
    Then save changes button present
    And project title label is present
    And project title label has text "Title"
    And project title input field present
    And project title input field has text "Test Project"
    And project description label is present
    And project description label has text "Description"
    And project title input field present
    And project description input field has text "Test Project description"

  Scenario: Title and description has not change if just click on save button
    Given user go to main page
    And user waits for home page would load
    And user waits for project with title "Test Project"
    When user clicks on edit button
    And user waits for save changes button
    And project title input field has text "Test Project"
    And project description input field has text "Test Project description"
    And user clicks on save changes button
    And user waits for home page would load
    And the home page has been loaded
    And user waits for project with title "Test Project"
    Then project has title "Test Project"
    And project has description "Test Project description"

  Scenario: User gets error message when tries to save empty title and description
    Given user go to main page
    And user waits for home page would load
    And user waits for project with title "Test Project"
    When user clicks on edit button
    And user waits for save changes button
    And project title input field has text "Test Project"
    And project description input field has text "Test Project description"
    When user sets project title to ""
    And user sets project description to ""
    And user clicks on save changes button
    And waits for error message
    Then error message presents
    And error message text is "Empty title and description"


  Scenario: User can edit project's title and description
    Given user go to main page
    And user waits for home page would load
    And user waits for project with title "Test Project"
    When user clicks on edit button
    And user waits for save changes button
    And project title input field has text "Test Project"
    And project description input field has text "Test Project description"
    When user sets project title to "New Project"
    And user sets project description to "New Project description"
    And user clicks on save changes button
    And user waits for home page would load
    And the home page has been loaded
    And user waits for project with title "New Project"
    Then project has title "New Project"
    And project has description "New Project description"


  Scenario: User deletes task
    Given user go to main page
    And user waits for home page would load
    And user waits for project with title "Test Project"
    When user clicks on delete button
    Then user waits for home page would load
    And project with title "Test Task" not present