import { describe, expect, test } from 'vitest'
import { solutionPart1, largestPossibleJolatage } from '../day3'

describe('Day3 Tests', () => {
    test('Example', () => {
        expect(solutionPart1("987654321111111\n811111111111119\n234234234234278\n818181911112111")).toEqual(357);
    })
})

describe('largestPossibleJolatage', () => {
    test('calculates highest joltage', () => {
        expect(largestPossibleJolatage('987654321111111')).toEqual(98)
        expect(largestPossibleJolatage('811111111111119')).toEqual(89)
        expect(largestPossibleJolatage('234234234234278')).toEqual(78)
        expect(largestPossibleJolatage('818181911112111')).toEqual(92)
        expect(largestPossibleJolatage('891111111111111')).toEqual(91)
    })

    test('Test input', () => {
        expect(largestPossibleJolatage('2331221221361221232332583266422231222315311212133222227552392222213223325332632323212227323432113121')).toEqual(97)
    })
})