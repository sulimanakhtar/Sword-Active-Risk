package TestRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		
				features = "src/FeatureFiles/Search2.feature",
				glue = {"StepDefinition"}, 
				plugin = {"html:Reports/cucumber-html-report",
						 "json:Reports/cucumber.json", 
						}

)

public class RunTest {

}
