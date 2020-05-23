const cal = require('./calculator');

describe("add operations", () => {

    test('adds 1 + 2 to equal 3', () => {
        expect(cal.add(1, 2)).toBe(3);
    });

    test('adds 5 + 5 to equal 10', () => {
        expect(cal.add(5, 5)).toBe(10);
    });
})

describe("Subtract operation", () => {
    test('adds 5 - 5 to equal 0', () => {
        expect(cal.subtract(5, 5)).toBe(0);
    });

    test('adds 8 - 3 to equal 5', () => {
        expect(cal.subtract(8, 3)).toBe(5);
    });
})