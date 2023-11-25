import { expect } from "@wdio/globals";
import LoginPage from "../pageobjects/login.page.js";
import SecurePage from "../pageobjects/secure.page.js";

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();

    await expect($("body")).toBeExisting();
    // await expect($("body")).toHaveTextContaining("Lucky");

    // await expect($("body")).toHaveHTMLContaining("Lucky");
    // await expect($("body")).toHaveText("Terms");
    await expect($("body")).toHaveTextContaining("Terms");
  });
});
