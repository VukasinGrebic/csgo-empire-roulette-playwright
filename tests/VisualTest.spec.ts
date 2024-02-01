const { test, expect } = require('../fixtures/BaseTest')
import { Constants } from "../enums/Constants"

test.describe.parallel("Visal regression", async () =>{

    test.beforeEach(async ({ homePage }) => { 
        await homePage.visit()
        await homePage.expectHomePage()
    })

    test("Checking if roulette is page rendering correctly", async ({roulettePage, page}) => {
            
            await roulettePage.waitFor0()

            await expect(page).toHaveScreenshot("roullete-page.png", {
                mask: [await page.locator(Constants.PREVIOUS_ROLL), await page.locator(Constants.ROLLING), await page.locator(Constants.CHAT_MESSAGE), await  page.locator(Constants.CHAT_HEAD), await page.locator(Constants.BETS_CONTAINER)],
            })
    
        
    })
})
