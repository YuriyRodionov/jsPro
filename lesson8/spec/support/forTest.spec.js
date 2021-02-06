const pow = require("../../forTest").pow;

describe("Функция pow", () => {
    it("3+2 должно быть равно 5", () => {
        expect(pow(3, 2)).toBe(5)
    })
})