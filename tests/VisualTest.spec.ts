const { test, expect } = require('../fixtures/BaseTest')
import { Items } from "../enums/Items"

test.describe.parallel("Visal regression", async () =>{

    test.beforeEach(async ({ roulettePage }) => { 
        await roulettePage.visit()
        await roulettePage.expectHomePage()
    })

    test.skip("Checking if roulette is page rendering correctly", async ({roulettePage, page}) => {
            
            await roulettePage.waitFor0()

            await expect(page).toHaveScreenshot("roullete-page.png", {
                mask: [await page.locator(Items.PREVIOUS_ROLL), await page.locator(Items.ROLLING), await page.locator(Items.CHAT_MESSAGE), await  page.locator(Items.CHAT_HEAD), await page.locator(Items.BETS_CONTAINER)],
            })
    
        
    })
})
