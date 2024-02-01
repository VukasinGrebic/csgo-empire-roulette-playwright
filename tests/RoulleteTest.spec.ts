const { test } = require('../fixtures/BeforeFixture')

test.describe.parallel("Roullete Flow", async () =>{

    // test.beforeEach(async ({ page, roulettePage }) => { 
    //     test.setTimeout(300000)
   
    //     await roulettePage.visit()
    //     await roulettePage.expectHomePage()
    // })

    test("User is checking last 10 roulette results", async ({roulettePage}) => {
        await roulettePage.expectLast10Visibility()
    })

    test("User is checking last 100 roulette results", async ({roulettePage}) => {
        await roulettePage.expectLast100Visibility()
        await roulettePage.expectLast100Calculation()
    })

    test("User is checking winning bet", async ({roulettePage}) => {
        await roulettePage.assertWinningColumn()
    })

    test("User is checking bet buttons", async ({roulettePage}) => {
        await roulettePage.expectBetButtons()
    })

    test("User is checking usability of bet buttons", async ({roulettePage}) => {
        await roulettePage.expectBetButtonsFunction()
    })
   
    test("User is checking Daily Roulette Race statistics", async ({roulettePage}) => {
        await roulettePage.expectDailyRoulleteRace()
    })
})
