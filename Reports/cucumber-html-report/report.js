$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/FeatureFiles/Search2.feature");
formatter.feature({
  "line": 1,
  "name": "To verify Search on sword active risk website",
  "description": "",
  "id": "to-verify-search-on-sword-active-risk-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Verify search",
  "description": "",
  "id": "to-verify-search-on-sword-active-risk-website;verify-search",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \"\u003cData\u003e\" in search field",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I can see the search results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "to-verify-search-on-sword-active-risk-website;verify-search;",
  "rows": [
    {
      "cells": [
        "Data"
      ],
      "line": 11,
      "id": "to-verify-search-on-sword-active-risk-website;verify-search;;1"
    },
    {
      "cells": [
        "risk management"
      ],
      "line": 12,
      "id": "to-verify-search-on-sword-active-risk-website;verify-search;;2"
    },
    {
      "cells": [
        "compatibility"
      ],
      "line": 13,
      "id": "to-verify-search-on-sword-active-risk-website;verify-search;;3"
    },
    {
      "cells": [
        "leverage"
      ],
      "line": 14,
      "id": "to-verify-search-on-sword-active-risk-website;verify-search;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Verify search",
  "description": "",
  "id": "to-verify-search-on-sword-active-risk-website;verify-search;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \"risk management\" in search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I can see the search results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Search.i_am_at_home_page()"
});
formatter.result({
  "duration": 14455533928,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "risk management",
      "offset": 9
    }
  ],
  "location": "Search.i_enter_in_search_field(String)"
});
formatter.result({
  "duration": 287986301,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_button()"
});
formatter.result({
  "duration": 2261209733,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_can_see_the_search_results()"
});
formatter.result({
  "duration": 173037662,
  "status": "passed"
});
formatter.match({
  "location": "Search.close_the_browser()"
});
formatter.result({
  "duration": 824524672,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Verify search",
  "description": "",
  "id": "to-verify-search-on-sword-active-risk-website;verify-search;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \"compatibility\" in search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I can see the search results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Search.i_am_at_home_page()"
});
formatter.result({
  "duration": 13064847353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "compatibility",
      "offset": 9
    }
  ],
  "location": "Search.i_enter_in_search_field(String)"
});
formatter.result({
  "duration": 203206044,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_button()"
});
formatter.result({
  "duration": 12114188191,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_can_see_the_search_results()"
});
formatter.result({
  "duration": 119732974,
  "status": "passed"
});
formatter.match({
  "location": "Search.close_the_browser()"
});
formatter.result({
  "duration": 920501730,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify search",
  "description": "",
  "id": "to-verify-search-on-sword-active-risk-website;verify-search;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I am at home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I enter \"leverage\" in search field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I click on search button",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I can see the search results",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Search.i_am_at_home_page()"
});
formatter.result({
  "duration": 12891106257,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "leverage",
      "offset": 9
    }
  ],
  "location": "Search.i_enter_in_search_field(String)"
});
formatter.result({
  "duration": 207340184,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_click_on_search_button()"
});
formatter.result({
  "duration": 21728243661,
  "status": "passed"
});
formatter.match({
  "location": "Search.i_can_see_the_search_results()"
});
formatter.result({
  "duration": 147030982,
  "status": "passed"
});
formatter.match({
  "location": "Search.close_the_browser()"
});
formatter.result({
  "duration": 903802435,
  "status": "passed"
});
});