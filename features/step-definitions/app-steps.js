const { Given, Then } = require("cucumber");
const expect = require("chai").expect;
const {
  checkPartialTitle,
  checkElementPartialText
} = require("../support/helpers.js");
const assert = require("assert");
Given(/^App has been opened$/, () => {
  return app.client
    .waitUntilWindowLoaded()
    .getWindowCount()
    .then(count => {
      expect(count).to.be.equal(1);
    })
    .browserWindow.isMinimized()
    .then(x => {
      expect(x).to.be.false;
    })
    .browserWindow.isVisible()
    .then(x => {
      expect(x).to.be.true;
    })
    .browserWindow.isFocused()
    .then(x => {
      expect(x).to.be.true;
    })
    .browserWindow.getBounds()
    .then(({ width, height }) => {
      expect(width).to.be.above(0);
      expect(height).to.be.above(0);
    });
});

Then(/^Title contains "([^"]*)"$/, text => {
  return checkPartialTitle(text, true);
});

Then(/^Content contains "([^"]*)"$/, text => {
  return checkElementPartialText(text, "body", true);
});

Then("I can grab h1", async () => {
  const $h1 = "h1";
  assert.ok($h1);
  console.log("h1 ", $h1);
  console.log("h1 text");
});

Then("{string} is visible", async hello => {
  let h1 = await app.client.getHTML("h1");
  let h1_text = await app.client.getText("h1");
  console.log("h1 = ", h1);
  console.log("h1 text = ", h1_text);
  assert.ok(h1_text);
  assert.ok(h1);
  assert.equal(h1_text, hello);
});
Then("Window is visible", async () => {
  return assert.ok(await app.browserWindow.isVisible());
});
