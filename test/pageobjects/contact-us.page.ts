import { $ } from "@wdio/globals";
import Page from "./page";

class ContactUsPage extends Page {
  get inputName() {
    return $(`[name="name"]`);
  }

  get inputEmail() {
    return $(`[name="email"]`);
  }

  get inputPhone() {
    return $(`[name="phone"]`);
  }

  get inputCompany() {
    return $(`[name="company"]`);
  }

  get labelSolution() {
    return $(`//label[normalize-space(text())='Solution (optional)']`);
  }

  get btnEmployees() {
    return $("//label[normalize-space(text())='Number of employees']/following-sibling::div");
  }

  get btnSolution() {
    return $("//label[normalize-space(text())='Solution (optional)']/following-sibling::div");
  }

  get ddOptionOne() {
    return $("//ul/li[@role='option'][1]");
  }

  get inputQuestion() {
    return $(`[name="question"]`);
  }

  get btnSubmit() {
    return $("//button[@type='submit']");
  }

  async fillContactUs() {
    await this.inputName.setValue("Nama AT");
    await this.inputEmail.setValue("palat@yopamil.com");
    await this.inputPhone.setValue(-8576878987);
    await browser.pause(2000);

    await this.labelSolution.scrollIntoView();
    await this.inputCompany.setValue("Company AT");

    await this.btnEmployees.click();
    await this.ddOptionOne.click();
    await browser.pause(2000);

    await this.btnSolution.click();
    await this.ddOptionOne.click();
    await this.inputQuestion.setValue("Ini deskripsi AT");

    await this.inputQuestion.scrollIntoView();
    await browser.pause(2000);
  }
}

export default new ContactUsPage();
