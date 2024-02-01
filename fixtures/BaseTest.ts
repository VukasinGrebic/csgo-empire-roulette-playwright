const base = require('@playwright/test')
const { HomePage } = require('../pages/HomePage')
const { RoulettePage } = require ('../pages/RoulettePage')

exports.test = base.test.extend({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },
  roulettePage: async ({ page }, use) => {
    await use(new RoulettePage(page));
  },
});

exports.expect = base.expect;