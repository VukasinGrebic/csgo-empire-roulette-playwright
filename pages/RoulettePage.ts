import { expect, Page, Locator } from "@playwright/test"
import { Items } from "../enums/Items"
import { URLs } from "../constants/URLs"
import { MouseHover } from "../utils/mouse-hover"

export class RoulettePage {
    readonly mouseHover: MouseHover
    readonly page: Page
    readonly win14: Locator
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
        this.win14 = page.getByRole('button', { name: 'Win 14' })
        this.timer = page.getByText("0.00", { exact:true })
        this.coinCT = page.locator("div.mr-2.text-xxs").first()
        this.coinBonus = page.locator("div.mr-2.text-xxs").nth(1)
        this.coinT = page.locator("div.mr-2.text-xxs").nth(2)
        this.coinCTContainer = page.locator(".bets-container").first()
        this.coinTContainer = page.locator(".bets-container").nth(1)
        this.coinBonusContainer = page.locator(".bets-container").nth(2)
        this.previousRoll = page.locator("div.ml-1.inline-block.h-24.w-24.rounded-full").nth(9)
        this.wheelMarker = page.locator("//div[@class='wheel__marker wheel__item absolute z-10']")
        this.wheelMarkerNonActive = page.locator("div.wheel__marker.wheel__item.absolute.z-10.wheel__item--visible")
        this.last100 = page.getByText("Last").first()
        this.last10 = page.locator("div.relative.flex.h-24").first()
        this.btn100 = page.getByRole('button', { name: "+ 100" })
        this.btn10 = page.getByRole('button', { name: "+ 10", exact:true })
        this.btn1 = page.getByRole('button', { name: "+ 1", exact:true })
        this.btn01 = page.getByRole('button', { name: "+ 0.1" })
        this.btn001 = page.getByRole('button', { name: "+ 0.01" })
        this.btnHalf = page.getByRole('button', { name: "1/ 2" })
        this.btnDouble = page.getByRole('button', { name: "x 2" })
        this.btnMax = page.getByRole('button', { name: "Max" })
        this.btnClear = page.getByRole('button', { name: "Clear" })
        this.dailyRouletteRace = page.getByRole("heading", {name: "Daily Roulette Race"})
        this.dailyRace1st = page.getByText("1st", {exact:true})
        this.dailyRace2nd = page.getByText("2nd", {exact:true})
        this.dailyRace3rd = page.getByText("3rd", {exact:true})
        this.dailyRace4th = page.getByText("4th", {exact:true})
        this.dailyRace5th = page.getByText("5th", {exact:true})
        this.dailyRace6th = page.getByText("6th", {exact:true})
        this.dailyRace7th = page.getByText("7th", {exact:true})
        this.dailyRace8th = page.getByText("8th", {exact:true})
        this.dailyRace9th = page.getByText("9th", {exact:true})
        this.dailyRace10th = page.getByText("10th", {exact:true})
       
    }

    /**
    * This method is used to visit home page
    *
    */

    async visit () {
        await this.page.goto(URLs.base)
    }

    /**
    * This method is used to check if we are on right page
    *
    */
    async expectHomePage () {
        await expect(this.win14).toBeVisible()
    }

    /**
    * This method is used check if last10 is displayed
    *
    */

    async expectLast10Visibility () {
        await expect(this.last10).toBeVisible()
    }
    
    /**
    * This method is used check if last100 is displayed and calculated correctly
    *
    */

    async expectLast100Visibility () {
        await expect(this.last100).toBeVisible()
    }

    /**
    * This method is used check if last100 is alculated correctly
    *
    */

    async expectLast100Calculation () {
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

    async expectBetButtons () {
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
    async expectBetButtonsFunction () {

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
    async expectDailyRoulleteRace () {
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
    * This method is used wait for timer to go to 0
    *
    */
        async waitFor0 () {
            await expect(this.timer).toBeVisible
        }

    /**
    * This method is used wait for timer to go to 0, for red line to change state to rolling and to change state when it stops
    *
    */
    async waitForRoll () {
        await this.waitFor0()
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
            if (await elementClass.includes(Items.COIN_T)) {
                await expect(this.coinTContainer).toHaveClass(Items.CLASS)
                console.log("T")
            }
            if (await elementClass.includes(Items.COIN_CT)) {
                await expect(this.coinCTContainer).toHaveClass(Items.CLASS)
                console.log("CT")
            }
            if (await elementClass.includes(Items.COIN_BONUS)) {
                await expect(this.coinBonusContainer).toHaveClass(Items.CLASS)
                console.log("Bonus")
            }
        }

    }



}