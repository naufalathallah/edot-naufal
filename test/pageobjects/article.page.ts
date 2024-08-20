import { $ } from "@wdio/globals";
import Page from "./page";

class ArticlePage extends Page {
  getDetailArtikel(title: string) {
    return $(`//h2[normalize-space(text())='${title}']`);
  }

  getTitleArticleNumberOne() {
    return $("//li[1]/a/div[2]/div/h2").getText();
  }

  getTitleArticleNumberTwo() {
    return $("//li[2]/a/div[2]/div/h2").getText();
  }

  get inputArticle() {
    return $(`[name="searchArticle"]`);
  }

  async searchArticle(title: string) {
    await this.inputArticle.setValue(title);

    await browser.execute(() => {
      const submitButton = document.querySelector('input[type="submit"]');
      if (submitButton) {
        (submitButton as HTMLElement).click();
      }
    });

    await browser.pause(3000);
  }

  async openDetail(title: string) {
    await this.getDetailArtikel(title).click();
    await browser.pause(3000);
  }

  open() {
    return super.open("articles");
  }
}

export default new ArticlePage();
