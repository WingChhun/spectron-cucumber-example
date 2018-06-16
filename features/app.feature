Feature: App

  Scenario: As a user I can open the app and see the UI
    Given App has been opened
    Then Title contains "Hello World!"
    And Content contains "Hello World!"
    Then I can grab h1
    Then "Hello World!" is visible
    Then Window is visible
