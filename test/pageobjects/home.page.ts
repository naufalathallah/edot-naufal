import { $ } from "@wdio/globals";
import Page from "./page";

class HomePage extends Page {
  get txtReadyToGrow() {
    return $("//h2[normalize-space(text())='Ready to Grow with eDOT?']");
  }

  get btnContactUsSection() {
    return $("//h2[normalize-space(text())='Ready to Grow with eDOT?']/following-sibling::a");
  }

  get footerPrivacyPolicy() {
    return $("//a[normalize-space(text())='Privacy Policy']");
  }

  async openContactUs() {
    await this.txtReadyToGrow.scrollIntoView();
    await browser.pause(2000);

    await this.btnContactUsSection.click();
    await browser.pause(2000);
  }

  async openFooterPrivacyPolicy() {
    await this.footerPrivacyPolicy.scrollIntoView();
    await this.footerPrivacyPolicy.click();

    await browser.pause(2000);
  }

  open() {
    return super.open();
  }
}

export default new HomePage();
