import { expect, Locator, Page } from "@playwright/test"
import { Constants } from "../enums/Constants"


export class HomePage {
    readonly page: Page
    readonly win: Locator
    
    constructor (page: Page) {
        this.page = page
        this.win = page.locator("text=Win 14")
    }

    async visit () {
        await this.page.goto(Constants.URL)
    }

    
    async expectHomePage () {
        await expect(this.win).toBeVisible()
    }
}