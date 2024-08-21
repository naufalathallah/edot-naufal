import articleDetailPage from "../pageobjects/article-detail.page";
import articlePage from "../pageobjects/article.page";
import contactUsPage from "../pageobjects/contact-us.page";
import homePage from "../pageobjects/home.page";
import privacyPolicyPage from "../pageobjects/privacy-policy.page";

describe("3 TC AT", () => {
  it("[key: TC-T1] User dapat mencari dan mengakses detail artikel", async () => {
    await articlePage.open();

    const searchData = await articlePage.getTitleArticleNumberTwo();
    await articlePage.searchArticle(searchData);
    const shownData = await articlePage.getTitleArticleNumberOne();

    await expect(shownData).toBe(searchData);

    await articlePage.openDetail(shownData);
    const articleTitle = await articleDetailPage.getTextTitle();

    await expect(articleTitle).toBe(searchData);
  });

  it("[key: TC-T2] User mengakses dan mengisi form Contact Us dari Home", async () => {
    await homePage.open();

    await homePage.openContactUs();
    await contactUsPage.fillContactUs();

    await contactUsPage.btnSubmit.waitForEnabled();
  });

  it("[key: TC-T3] User mengakses privacy policy dari footer", async () => {
    await homePage.open();
    await homePage.openFooterPrivacyPolicy();

    await expect(privacyPolicyPage.txtTitle).toBeDisplayed();
  });
});
