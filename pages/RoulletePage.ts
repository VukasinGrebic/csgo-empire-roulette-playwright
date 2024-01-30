import { expect, Page, Locator } from "@playwright/test"

export class RoulletePage {
    readonly page: Page
    readonly timer: Locator
    readonly coinCT: Locator
    readonly coinT: Locator
    readonly coinBonus: Locator
    readonly coinCTContainer: Locator
    readonly coinTContainer: Locator
    readonly coinBonusContainer: Locator
    readonly clearButton: Locator
    readonly btn001: Locator
    readonly btn01: Locator
    readonly btn1: Locator
    readonly btn10: Locator
    readonly btn100: Locator
    readonly btnHalf: Locator
    readonly btnDouble: Locator
    readonly btnMax: Locator
    readonly previousRoll: Locator
    readonly wheelMarker: Locator
    readonly wheelMarkerNonActive: Locator
    
    

    constructor (page: Page) {
        this.page = page
        this.timer = page.locator("div.font-numeric.text-2xl")
        this.coinCT = page.locator("div.mr-2.text-xxs").first()
        this.coinBonus = page.locator("div.mr-2.text-xxs").nth(1)
        this.coinT = page.locator("div.mr-2.text-xxs").nth(2)
        this.coinCTContainer = page.locator(".bets-container").first()
        this.coinTContainer = page.locator(".bets-container").nth(1)
        this.coinBonusContainer = page.locator(".bets-container").nth(2)
        this.previousRoll = page.locator("div.ml-1.inline-block.h-24.w-24.rounded-full").nth(9)
        this.wheelMarker = page.locator("//div[@class='wheel__marker wheel__item absolute z-10']")
        this.wheelMarkerNonActive = page.locator("div.wheel__marker.wheel__item.absolute.z-10.wheel__item--visible")
       
    }


    async assertLast100 () {
        let ct = await this.coinCT.innerText()
        let bonus = await this.coinBonus.innerText()
        let t = await this.coinT.innerText()
        let sum = parseInt(ct) + parseInt(bonus) + parseInt(t)
        await expect(sum).toBe(100)
    }

    async waitForRoll () {
        await expect(this.timer).toHaveText("0.00")
        await expect(this.wheelMarkerNonActive).toBeVisible()
        await expect(this.wheelMarker).toBeVisible()
    }

    async assertWin () {
            await this.waitForRoll()
            const elementClass = await this.previousRoll.getAttribute("class")
            if (elementClass !==null) {
            if (await elementClass.includes("coin-t")) {
                await expect(this.coinTContainer).toHaveClass("bets-container--open bets-container rounded-lg pt-2 lg:pt-3")
                console.log("T")
            }
            if (await elementClass.includes("coin-ct")) {
                await expect(this.coinCTContainer).toHaveClass("bets-container--open bets-container rounded-lg pt-2 lg:pt-3")
                console.log("CT")
            }
            if (await elementClass.includes("coin-bonus")) {
                await expect(this.coinBonusContainer).toHaveClass("bets-container--open bets-container rounded-lg pt-2 lg:pt-3")
                console.log("Bonus")
            }
        }

        
    }

}