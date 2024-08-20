import articlePage from "../pageobjects/article.page";

describe("Module Article", () => {
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

    await browser.pause(2000);

    const shownData = await $("//li[1]/a/div[2]/div/h2").getText();
    console.log(shownData);

    await expect(shownData).toBe(searchData);

    await $(`//h2[normalize-space(text())='${shownData}']`).click();

    await browser.pause(2000);

    const articleTitle = await $("//section/h1").getText();

    await expect(articleTitle).toBe(searchData);
  });
});
