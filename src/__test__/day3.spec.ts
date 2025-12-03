import { describe, expect, test } from 'vitest'
import { solutionPart1, solutionPart2, largestCellJoltage, highestCellCount } from '../day3'

describe('Day3 Tests', () => {
    test('Example Inputs', () => {
        expect(solutionPart1("987654321111111\n811111111111119\n234234234234278\n818181911112111")).toEqual(357);
        expect(solutionPart2("987654321111111\n811111111111119\n234234234234278\n818181911112111")).toEqual(3121910778619);
    })

    describe('largestPossibleJoltage', () => {
        test('calculates highest joltage', () => {
            expect(largestCellJoltage('987654321111111', 2)).toEqual(98)
            expect(largestCellJoltage('811111111111119', 2)).toEqual(89)
            expect(largestCellJoltage('234234234234278', 2)).toEqual(78)
            expect(largestCellJoltage('818181911112111', 2)).toEqual(92)
            expect(largestCellJoltage('891111111111111', 2)).toEqual(91)
        })

        test('Test input', () => {
            expect(largestCellJoltage('2331221221361221232332583266422231222315311212133222227552392222213223325332632323212227323432113121', 2)).toEqual(97)
        })
    })

    describe('largest 12 CellJoltage', () => {
        test('exactly 12 characters', () => {
            expect(largestCellJoltage('123456789012', 12)).toEqual(123456789012)
        })

        test('calculates largest 12 cell joltage', () => {
            expect(largestCellJoltage('987654321111111', 12)).toEqual(987654321111)
            expect(largestCellJoltage('811111111111119', 12)).toEqual(811111111119)
            expect(largestCellJoltage('234234234234278', 12)).toEqual(434234234278)
            expect(largestCellJoltage('818181911112111', 12)).toEqual(888911112111)
        })

        test('highestCellCount', () => {
            const input = '2222213223325332632323212227323432113121'
            const result = highestCellCount(input)
            expect(result).toEqual(27)
            expect(input[result]).toEqual('7')
            expect(input.substring(result)).toEqual('7323432113121')

        })

        test('Test input', () => {
            expect(largestCellJoltage('2331221221361221232332583266422231222315311212133222227552392222213223325332632323212227323432113121', 12)).toEqual(973432113121)
        })
    })
})
