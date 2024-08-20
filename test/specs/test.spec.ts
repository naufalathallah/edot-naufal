import articlePage from "../pageobjects/article.page";
import homePage from "../pageobjects/home.page";

describe("3 TC AT", () => {
  it("[key: TC-T1] User dapat mencari dan mengakses detail artikel", async () => {
    await articlePage.open();

    const searchData = await $("//li[2]/a/div[2]/div/h2").getText();
    console.log(searchData);

    await $(`[name="searchArticle"]`).setValue(searchData);

    await browser.execute(() => {
      const submitButton = document.querySelector('input[type="submit"]');
      if (submitButton) {
        (submitButton as HTMLElement).click();
      }
    });

    await browser.pause(3000);

    const shownData = await $("//li[1]/a/div[2]/div/h2").getText();
    console.log(shownData);

    await expect(shownData).toBe(searchData);

    await $(`//h2[normalize-space(text())='${shownData}']`).click();

    await browser.pause(3000);

    const articleTitle = await $("//section/h1").getText();

    await expect(articleTitle).toBe(searchData);
  });

  it("[key: TC-T2] User mengakses dan mengisi form Contact Us dari Home", async () => {
    await homePage.open();

    await $("//h2[normalize-space(text())='Ready to Grow with eDOT?']").scrollIntoView();
    await browser.pause(2000);
    await $("//h2[normalize-space(text())='Ready to Grow with eDOT?']/following-sibling::a").click();
    await browser.pause(2000);
    await $(`[name="name"]`).setValue("Nama AT");
    await $(`[name="email"]`).setValue("palat@yopamil.com");
    await $(`[name="phone"]`).setValue(-8576878987);
    await browser.pause(2000);
    await $(`//label[normalize-space(text())='Solution (optional)']`).scrollIntoView();
    await $(`[name="company"]`).setValue("Company AT");
    await $("//label[normalize-space(text())='Number of employees']/following-sibling::div").click();
    await $("//ul/li[@role='option'][1]").click();
    await browser.pause(2000);

    await $("//label[normalize-space(text())='Solution (optional)']/following-sibling::div").click();
    await $("//ul/li[@role='option'][1]").click();
    await $(`[name="question"]`).setValue("Ini deskripsi AT");
    await $(`[name="question"]`).scrollIntoView();
    await browser.pause(2000);

    await $("//button[@type='submit']").waitForEnabled();
  });

  it("[key: TC-T3] User mengakses privacy policy dari footer", async () => {
    await homePage.open();
    await $("//a[normalize-space(text())='Privacy Policy']").scrollIntoView();

    await $("//a[normalize-space(text())='Privacy Policy']").click();
    await browser.pause(2000);

    const privacyTitle = await $(
      "//h1[contains(text(), 'Kebijakan Privasi Penggunaan Aplikasi Maupun Layanan Situs')]"
    );

    await expect(privacyTitle).toBeDisplayed();
  });
});
