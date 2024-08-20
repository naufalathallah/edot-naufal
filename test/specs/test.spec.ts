import articlePage from "../pageobjects/article.page";

describe("My Login application", () => {
  it("[key: TD-T2160] User cek button back pada halaman Ringkasan Order", async () => {
    await articlePage.open();
  });
});
