const crypto = require("crypto")

export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}