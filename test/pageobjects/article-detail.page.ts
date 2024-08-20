import { $ } from "@wdio/globals";
import Page from "./page";

class ArticlePage extends Page {
  getTextTitle() {
    return $("//section/h1").getText();
  }
}

export default new ArticlePage();
