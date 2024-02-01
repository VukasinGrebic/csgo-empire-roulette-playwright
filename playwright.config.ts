import { PlaywrightTestConfig } from "@playwright/test"
import { defineConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
    timeout: 30000,
    retries: 0,
    testDir: "tests",
    use: {
        headless: false,
        viewport: { width: 1280, height: 720},
        actionTimeout: 5000,
        ignoreHTTPSErrors: true,
        video: "off",
        screenshot: "only-on-failure",
    },
    expect: {
        timeout: 30 * 1000,
      },
    projects: [
        {
            name: "Chromium",
            use: { browserName: "chromium"}
        },
        {
            name: "Firefox",
            use: { browserName: "firefox"}
        },
        {
            name: "Webkit",
            use: { browserName: "webkit"}
        },
        {
            name: "VisualRegression",
            use: { browserName: "chromium",
            viewport: { width: 1280, height: 720}},
            
        },
    ]
}

export default config