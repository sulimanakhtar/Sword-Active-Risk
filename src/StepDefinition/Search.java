package StepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Search {
	WebDriver driver;
	String baseURL;
	String dataSearch;

	@Given("^I am at home page$")
	public void i_am_at_home_page() throws InterruptedException {
		baseURL = "http://www.sword-activerisk.com/";

		System.setProperty("webdriver.chrome.driver", "Resources/chromedriver.exe");
		driver = new ChromeDriver();

		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get(baseURL);
		Thread.sleep(2000);
	}

	@Given("^I enter \"([^\"]*)\" in search field$")
	public void i_enter_in_search_field(String data) throws InterruptedException {
		WebElement search = driver.findElement(By.xpath("//*[@id=\"s\"]"));
		search.sendKeys(data);
		dataSearch = data;
		Thread.sleep(2000);

	}

	@When("^I click on search button$")
	public void i_click_on_search_button() throws InterruptedException {
		WebElement submitSearch = driver.findElement(By.id("searchsubmit"));
		submitSearch.click();
		Thread.sleep(2000);
	}

	@Then("^I can see the search results$")
	public void i_can_see_the_search_results() {
		WebElement results = driver.findElement(By.id("internal-page-content"));
		if (results.getText().contains("Sorry, no results found! Please try again.") == true) {

			System.out.println("Sorry, no results found! for " + dataSearch + " Please try again.");
		}

		else {
			System.out.println("Search results have been found for " + dataSearch);
		}

	}

	@Then("^Close the browser$")
	public void close_the_browser() {
		driver.quit();
	}

}
