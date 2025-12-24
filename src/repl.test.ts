import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";

describe.each([
    {
        input: " hello world ",
        expected: ["hello", "world"]
    },
    {
        input: "Charmander Bulbasaur pikachu",
        expected: ["charmander", "bulbasaur", "pikachu"]
    },
    {
        input: "GOKU veGeta Gohan",
        expected: ["goku", "vegeta", "gohan"]
    },
])("cleanInput(${input})", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        let actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});