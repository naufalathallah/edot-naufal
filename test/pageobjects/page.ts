import { browser } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  get containerMenu() {
    return $("//header/ul[2]");
  }

  async open(path: string = "") {
    const maxAttempts = 3;
    let attempts = 0;

    while (attempts < maxAttempts) {
      attempts++;

      await browser.url(`https://edot.id/${path}`);

      const isLoaded = await browser.waitUntil(
        async () => {
          const state = await browser.execute(() => document.readyState);
          return state === "complete";
        },
        {
          timeout: 15000,
          timeoutMsg: "Page did not load within 15 seconds",
        }
      );

      if (isLoaded) {
        break;
      } else if (attempts < maxAttempts) {
        await browser.refresh();
      }
    }

    if (attempts >= maxAttempts) {
      throw new Error("Page failed to load after multiple attempts");
    }

    await browser.waitUntil(
      async () => {
        const isDisplayed = await this.containerMenu.isDisplayed();
        return isDisplayed;
      },
      {
        timeout: 15000,
        timeoutMsg: "Menu did not appear within 15 seconds",
      }
    );
  }
}
