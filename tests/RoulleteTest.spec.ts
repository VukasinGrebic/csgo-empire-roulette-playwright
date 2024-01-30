import { test } from "@playwright/test"
import { HomePage } from "../pages/HomePage"
import { RoulletePage } from "../pages/RoulletePage"
import { MouseHover } from "../utils/mouse-hover"

test.describe.parallel("Products flow", async () =>{
    let homePage: HomePage
    let roulletePage: RoulletePage
    let mouseHover: MouseHover


    test.beforeEach(async ({ page }) => { 
        homePage = new HomePage(page)
        roulletePage = new RoulletePage(page)
        mouseHover = new MouseHover(page)
        test.setTimeout(300000)
   
        await homePage.visit()
        await homePage.assertHomePage()
    })

    // test("User is checking last 100", async ({page}) => {
    //     await roulletePage.assertLast100()
    // })

    test("User is checking winning bet", async ({page}) => {
        await roulletePage.assertWin()
    })
   
})
