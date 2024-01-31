import { expect, Page, Locator } from "@playwright/test"
import { ActionItems } from "../enums/ActionItems"
import { MouseHover } from "../utils/mouse-hover"

export class RoulletePage {
    readonly mouseHover: MouseHover
    readonly page: Page
    readonly timer: Locator
    readonly coinCT: Locator
    readonly coinT: Locator
    readonly coinBonus: Locator
    readonly coinCTContainer: Locator
    readonly coinTContainer: Locator
    readonly coinBonusContainer: Locator
    readonly btnClear: Locator
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
    readonly last100: Locator
    readonly last10: Locator
    readonly bet100: Locator
    readonly bet10: Locator
    readonly bet1: Locator
    readonly bet01: Locator
    readonly bet001: Locator
    readonly betHalf: Locator
    readonly betDouble: Locator
    readonly betClear: Locator
    readonly dailyRouletteRace: Locator
    readonly dailyRace1st: Locator
    readonly dailyRace2nd: Locator
    readonly dailyRace3rd: Locator
    readonly dailyRace4th: Locator
    readonly dailyRace5th: Locator
    readonly dailyRace6th: Locator
    readonly dailyRace7th: Locator
    readonly dailyRace8th: Locator
    readonly dailyRace9th: Locator
    readonly dailyRace10th: Locator
    
    

    constructor (page: Page) {
        this.page = page
        this.mouseHover = new MouseHover(page)
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
        this.last100 = page.locator("div.label.mr-2").first()
        this.last10 = page.locator("div.relative.flex.h-24").first()
        this.btn100 = page.locator("text=+ 100").first()
        this.btn10 = page.locator("text=+ 10").first()
        this.btn1 = page.locator("text=+ 1").first()
        this.btn01 = page.locator("text=+ 0.1").first()
        this.btn001 = page.locator("text=+ 0.01").first()
        this.btnHalf = page.locator("text=1/ 2").first()
        this.btnDouble = page.locator("text=x 2").first()
        this.btnMax = page.locator("text=Max ").first()
        this.btnClear = page.locator("text=Clear ").nth(1)
        this.dailyRouletteRace = page.locator("h3.text-light-1")
        this.dailyRace1st = page.locator("text = 1st").first()
        this.dailyRace2nd = page.locator("text = 2nd").first()
        this.dailyRace3rd = page.locator("text = 3rd").first()
        this.dailyRace4th = page.locator("text = 4th").first()
        this.dailyRace5th = page.locator("text = 5th").first()
        this.dailyRace6th = page.locator("text = 6th").first()
        this.dailyRace7th = page.locator("text = 7th").first()
        this.dailyRace8th = page.locator("text = 8th").first()
        this.dailyRace9th = page.locator("text = 9th").first()
        this.dailyRace10th = page.locator("text = 10th").first()
       
    }

    /**
    * This method is used check if last10 is displayed
    *
    */

    async assertLast10 () {
        await expect(this.last10).toBeVisible()
    }
    
    /**
    * This method is used check if last100 is displayed and calculated correctly
    *
    */

    async assertLast100 () {
        await expect(this.last100).toBeVisible()

        let str = await this.last100.innerText()
        let numStr =str.replace(/\D/g, '')
        let num = parseInt(numStr)

        let ct = await this.coinCT.innerText()
        let bonus = await this.coinBonus.innerText()
        let t = await this.coinT.innerText()
        let sum = parseInt(ct) + parseInt(bonus) + parseInt(t)

        await expect(sum).toBe(num)
    }

    /**
    * This method is used check if all the buttons in this bet input widget are displayed and with correct texts.
    *
    */

    async assertBetButtons () {
        await expect(this.btnClear).toBeEnabled()
        await expect(this.btn001).toBeEnabled()
        await expect(this.btn01).toBeEnabled()
        await expect(this.btn1).toBeEnabled()
        await expect(this.btn10).toBeEnabled()
        await expect(this.btn100).toBeEnabled()
        await expect(this.btnHalf).toBeEnabled()
        await expect(this.btnDouble).toBeEnabled()
        await expect(this.btnMax).toBeEnabled()
    }

    /**
    * This method is used to delete hidden class so buttons can be tested
    *
    */

    async deleteHiddenClass () {
        await this.page.evaluate(() => {
            const elements = document.querySelectorAll("div.bet-input__controls-inner.-ml-md > button")
            if (elements !== null)
            elements.forEach((element) => {
                element.classList.remove("hidden")
          })})
    }

    /**
    * This method is used check if the bet input field is clickable
    *
    */
    async assertBetButtonsFunction () {

        await this.deleteHiddenClass()
        await expect(this.btn100).toBeVisible()
        await expect(this.btn10).toBeVisible()
        await expect(this.btn1).toBeVisible()
        await expect(this.btn01).toBeVisible()
        await expect(this.btn001).toBeVisible()
        await expect(this.btnHalf).toBeVisible()
        await expect(this.btnDouble).toBeVisible()
        await expect(this.btnMax).toBeVisible()
        await expect(this.btnClear).toBeVisible()
    }

    /**
    * This method is used check if Daily Roulette Race is displayed and there are 10 rows in it
    *
    */
    async assertDailyRoulleteRace () {
        await this.mouseHover.scrollDown()
        await expect(this.dailyRouletteRace).toBeVisible()
        await expect(this.dailyRace1st).toBeVisible()
        await expect(this.dailyRace2nd).toBeVisible()
        await expect(this.dailyRace3rd).toBeVisible()
        await expect(this.dailyRace4th).toBeVisible()
        await expect(this.dailyRace5th).toBeVisible()
        await expect(this.dailyRace6th).toBeVisible()
        await expect(this.dailyRace7th).toBeVisible()
        await expect(this.dailyRace8th).toBeVisible()
        await expect(this.dailyRace9th).toBeVisible()
        await expect(this.dailyRace10th).toBeVisible()
    }

    /**
    * This method is used wait for timer to go to 0, for red line to change state to rolling and to change state when it stops
    *
    */
    async waitForRoll () {
        await expect(this.timer).toHaveText(ActionItems.Timer0)
        await expect(this.wheelMarkerNonActive).toBeVisible()
        await expect(this.wheelMarker).toBeVisible()
    }

    /**
    * This method is used wait for right badge to be added to previous roll and to see if right coin column is highlighted
    *
    */

    async assertWinningColumn () {
            await this.waitForRoll()
            const elementClass = await this.previousRoll.getAttribute("class")
            if (elementClass !==null) {
            if (await elementClass.includes(ActionItems.COIN_T)) {
                await expect(this.coinTContainer).toHaveClass(ActionItems.CLASS)
                console.log("T")
            }
            if (await elementClass.includes(ActionItems.COIN_CT)) {
                await expect(this.coinCTContainer).toHaveClass(ActionItems.CLASS)
                console.log("CT")
            }
            if (await elementClass.includes(ActionItems.COIN_BONUS)) {
                await expect(this.coinBonusContainer).toHaveClass(ActionItems.CLASS)
                console.log("Bonus")
            }
        }

    }

}