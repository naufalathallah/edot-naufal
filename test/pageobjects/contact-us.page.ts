import { $ } from "@wdio/globals";
import Page from "./page";

class ContactUsPage extends Page {
  get inputName() {
    return $(`[name="name"]`);
  }

  async fillContactUs() {
    await this.inputName.setValue("Nama AT");
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
  }

  open() {
    return super.open();
  }
}

export default new ContactUsPage();
