import { expect, Locator, Page } from "@playwright/test"


export class HomePage {
    readonly page: Page
    readonly win: Locator
    
    constructor (page: Page) {
        this.page = page
        this.win = page.locator("text=Win 14")
    }

    async visit () {
        await this.page.goto("https://csgoempire.com/roulette")
    }

    
    async assertHomePage () {
        await expect(this.win).toBeVisible()
    }
}