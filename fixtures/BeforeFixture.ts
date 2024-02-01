const base = require('@playwright/test')
const { RoulettePage } = require ('../pages/RoulettePage')

export const test = base.extend({
    roulettePage: async ({ page }, use) => {
      const roulettePage = new RoulettePage(page);
      await roulettePage.visit()
      await use(roulettePage);
    }})