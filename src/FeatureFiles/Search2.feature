Feature: To verify Search on sword active risk website

  Scenario Outline: Verify search
    Given I am at home page
    And I enter "<Data>" in search field
    When I click on search button
    Then I can see the search results
    And Close the browser

    Examples: 
      | Data            |
      | risk management |
      | compatibility   |
      | leverage        |
