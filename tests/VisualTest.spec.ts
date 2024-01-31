import { expect, test } from "@playwright/test"
import { HomePage } from "../pages/HomePage"
import { RoulletePage } from "../pages/RoulletePage"
import { MouseHover } from "../utils/mouse-hover"

test.describe.parallel("Products flow", async () =>{
    let homePage: HomePage
    let roulletePage: RoulletePage
    let mouseHover: MouseHover


    test.beforeEach(async ({ page }) => { 
        homePage = new HomePage(page)
        mouseHover = new MouseHover(page)
        roulletePage = new RoulletePage(page)
        test.setTimeout(300000)
        await homePage.visit()
        await homePage.assertHomePage()
    })

    test.only("Checking if roulette is page rendering correctly", async ({page}) => {
            
            await roulletePage.waitFor0()

            await expect(page).toHaveScreenshot("roullete-page.png", {
                mask: [await page.locator('div.flex.flex-col.items-center'), await page.locator('css=div.wheel__item.absolute.z-20.flex.h-full.w-full.items-center.justify-center'), await page.locator('div.chat__messages.scroll-y.scroll-y--contain.z-10'), await  page.locator('button.chat-head-button.flex.h-full.w-full.items-center.justify-between.bg-dark-3'), await page.locator('div.bets-container--open.bets-container.rounded-lg.pt-2')],
            })
    
        
    })
})
