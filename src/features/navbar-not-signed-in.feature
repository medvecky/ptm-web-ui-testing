Feature: Nav Bar signed out

  Scenario: All elements
    Then home link present
    And Sign in link present
    And Sign up link present
    And Sign in link is active

  Scenario: User switches to sign up page
    When user clicks on sign up link
    And user waits for sign up button
    Then sign up button present
    And sign up link is active

  Scenario: User switches from sign up page to sign in page
    Given user clicks on sign up link
    And user waits for sign up button
    And sign up button present
    When user clicks on sign in link
    And user waits for sign in button
    Then Sign In button present
    And Sign in link is active

  Scenario: User switches from sign up page to sign in page using home page
    Given user clicks on sign up link
    And user waits for sign up button
    And sign up button present
    When user clicks on home link
    And user waits for sign in button
    Then Sign In button present
    And Sign in link is active