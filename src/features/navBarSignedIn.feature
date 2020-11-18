Feature: Nav bar signed in

  Background:
    Given user with username: "testuser1@gmail.com" password: "Password_12345"
    And user with username: "testuser1@gmail.com" password: "Password_12345" signed in
    And user go to main page
    And user waits for home page would load

  Scenario: Nav bar elements presents
    Then nav bar brand link present
    And nav bar home link present
    And nav bar home link is active
    And nav bar new task link present
    And nav bar new project link present

  Scenario: User clicks on new task link
    When user clicks on new task link
    And user waits for create task button
    Then create task button present
    And nav bar new task link is active
    And nav bar home link is not active

  Scenario: User clicks on new project link
    When user clicks on new project link
    And user waits for create project button
    Then create project button present
    And nav bar new project link is active
    And nav bar home link is not active

  Scenario: User returns to home tab
    When user clicks on new project link
    And user waits for create project button
    And user clicks on home link
    And user waits for home page would load
    Then nav bar home link is active
    And nav bar new project link is not active
