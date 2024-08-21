import { $ } from "@wdio/globals";
import Page from "./page";

class PrivacyPolicyPage extends Page {
  get txtTitle() {
    return $("//h1[contains(text(), 'Kebijakan Privasi Penggunaan Aplikasi Maupun Layanan Situs')]");
  }
}

export default new PrivacyPolicyPage();
