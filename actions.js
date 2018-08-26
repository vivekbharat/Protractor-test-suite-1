describe("Actions Demo", function() {
  it("opens posse website", () => {
    browser.get("http://posse.com/");

    element(by.model("userInputQuery")).sendKeys("river");

    browser
      .actions()
      .mouseMove(element(by.model("locationQuery")).sendKeys("London"))
      .perform();

    browser
      .actions()
      .sendKeys(protractor.Key.ARROW_DOWN)
      .perform();
    browser
      .actions()
      .sendKeys(protractor.Key.ENTER)
      .perform()
      .then(() => {
        browser.sleep(5000);
        expect(
          element.all(by.css("div[ng-mouseover*='onSearchResultOver']")).count()
        ).toEqual(7);

        element
          .all(by.css("div[ng-mouseover*='onSearchResultOver']"))
          .get(0)
          .click();

        element(by.css("a[ng-href*='London/River Island']"))
          .click()
          .then(() => {
            browser.getTitle().then(title => {
              console.log("-------------------------------");
              console.log(`${title} - before switching`);
              console.log("-------------------------------");
            });
            browser.sleep(5000);

            browser.getAllWindowHandles().then(handle => {
              browser.switchTo().window(handle[1]);
              browser.getTitle().then(title => {
                console.log("-------------------------------");
                console.log(`${title} - after switching`);
                console.log("-------------------------------");
              });
            });
          });
      });
  });

  //
  //
  //

  it("Open NonAngular js website Alerts", function() {
    browser.waitForAngularEnabled(false);
    browser.get("http://qaclickacademy.com/practice.php");
    element(by.id("confirmbtn")).click();

    browser
      .switchTo()
      .alert()
      .dismiss()
      .then(() => {
        browser.sleep(5000);
      });
  });

  //browser.get() will hit url on the browser
  // write your raw protractor code

  //Each it block will be called as a spec

  it("tests frames", function() {
    // code to close browser

    browser.waitForAngularEnabled(false);
    //To maximize screen
    browser.driver
      .manage()
      .window()
      .maximize();
    browser.get("http://qaclickacademy.com/practice.php");

    browser.switchTo().frame("courses-iframe");
    element(by.css("a[href*='sign_in']"))
      .getText()
      .then(text => console.log(text));
  });

  it("tests sync in non angular website", () => {
    // code to close browser

    browser.waitForAngularEnabled(false);
    //To maximize screen
    browser.driver
      .manage()
      .window()
      .maximize();
    browser.get("http://www.itgeared.com/demo/1506-ajax-loading.html");

    // browser.switchTo().frame("courses-iframe");
    element(by.css("a[href*='loadAjax']")).click();
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.invisibilityOf(element(by.id("loader"))), 5000);
    element(by.id("results"))
      .getText()
      .then(text => {
        console.log(text);
      });
  });
});
