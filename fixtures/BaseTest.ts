const base = require('@playwright/test')
const { RoulettePage } = require ('../pages/RoulettePage')

exports.test = base.test.extend({
  roulettePage: async ({ page }, use) => {
    await use(new RoulettePage(page));
  },
});

exports.expect = base.expect;