describe("Protractor Element Demo", function() {
  it("Locates a an Element Locator", function() {
    // browser.waitForAngularEnabled(false);
    // browser.get("http://www.google.com");

    browser.get("http://juliemr.github.io/protractor-demo/");
    element(by.model("first")).sendKeys("3");
    element(by.model("second")).sendKeys("5");
    element(by.id("gobutton")).click();
    expect(element(by.css("h2[class='ng-binding']")).getText()).toBe("8");
  });

  it("test chain loactor", () => {
    browser.get("http://juliemr.github.com/protractor-demo");
    // Repeater, Chain Locator and css for identical tags
    element(by.model("first")).sendKeys("3");
    element(by.model("second")).sendKeys("5");
    element(by.id("gobutton")).click();
    expect(
      element(by.repeater("result in memory"))
        .element(by.css("td:nth-child(3)"))
        .getText()
    ).toBe("8");
  });
  // .then(val => console.log(val));

  eval = (a, b, operation) => {
    element(by.model("first")).sendKeys(a);

    element.all(by.tagName("option")).each(item => {
      item.getAttribute("value").then(val => {
        if (val == operation) {
          item.click();
        }
      });
    });
    element(by.model("second")).sendKeys(b);
    element(by.id("gobutton")).click();
  };

  it("test all locator", () => {
    browser.get("http://juliemr.github.com/protractor-demo");
    // Repeater, Chain Locator and css for identical tags
    eval("3", "5");
    eval("2", "1");
    eval("-19", "10");

    let arr = [];
    element.all(by.repeater("result in memory")).each(item => {
      item
        .element(by.css("td:nth-child(3)"))
        .getText()
        .then(val => {
          arr.unshift(val);
          console.log(arr);
        });
    });
    element
      .all(by.repeater("result in memory"))
      .count()
      .then(val => console.log(val));
  });

  //

  it("Selects a dropdown", done => {
    browser.get("http://juliemr.github.com/protractor-demo");
    // Repeater, Chain Locator and css for identical tags
    eval("3", "5", "ADDITION");
    eval("3", "5", "SUBTRACTION");
    eval("3", "5", "MULTIPLICATION");
    eval("3", "5", "DIVISION");
    eval("3", "5", "MODULO");
    eval("2", "1", "ADDITION");
    // eval("2", "1", "SUBTRACTION");
    // eval("2", "1", "MULTIPLICATION");
    // eval("2", "1", "DIVISION");
    // eval("2", "1", "MODULO");
    // eval("-19", "10", "ADDITION");
    // eval("-19", "10", "SUBTRACTION");
    // eval("-19", "10", "MULTIPLICATION");
    // eval("-19", "10", "DIVISION");
    // eval("-19", "10", "MODULO");

    let arr = [];
    element.all(by.repeater("result in memory")).each(item => {
      item
        .element(by.css("td:nth-child(3)"))
        .getText()
        .then(val => {
          arr.unshift(val);
          console.log(arr);
          done();
        });
    });
  });
});
