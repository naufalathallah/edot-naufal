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

  async fillContactUs(nama: string, email: string, phone: number, company: string, question: string) {
    await this.inputName.setValue(nama);
    await this.inputEmail.setValue(email);
    await this.inputPhone.setValue(phone);
    await browser.pause(2000);

    await this.labelSolution.scrollIntoView();
    await this.inputCompany.setValue(company);

    await this.btnEmployees.click();
    await this.ddOptionOne.click();
    await browser.pause(2000);

    await this.inputQuestion.scrollIntoView();
    await this.btnSolution.click();
    await this.ddOptionOne.click();
    await this.inputQuestion.setValue(question);

    await browser.pause(2000);
  }
}

export default new ContactUsPage();
