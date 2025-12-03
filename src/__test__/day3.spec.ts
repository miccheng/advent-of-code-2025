import { describe, expect, test } from 'vitest'
import { solutionPart1, largestPossibleJoltage, solutionPart2, largest12CellJoltage, highestCellCount } from '../day3'

describe('Day3 Tests', () => {
    test('Example', () => {
        expect(solutionPart1("987654321111111\n811111111111119\n234234234234278\n818181911112111")).toEqual(357);
        expect(solutionPart2("987654321111111\n811111111111119\n234234234234278\n818181911112111")).toEqual(3121910778619);
    })
})

describe('largestPossibleJoltage', () => {
    test('calculates highest joltage', () => {
        expect(largestPossibleJoltage('987654321111111')).toEqual(98)
        expect(largestPossibleJoltage('811111111111119')).toEqual(89)
        expect(largestPossibleJoltage('234234234234278')).toEqual(78)
        expect(largestPossibleJoltage('818181911112111')).toEqual(92)
        expect(largestPossibleJoltage('891111111111111')).toEqual(91)
    })

    test('Test input', () => {
        expect(largestPossibleJoltage('2331221221361221232332583266422231222315311212133222227552392222213223325332632323212227323432113121')).toEqual(97)
    })
})

describe('largest12CellJoltage', () => {
    test('exactly 12 characters', () => {
        expect(largest12CellJoltage('123456789012')).toEqual(123456789012)
    })

    test('calculates largest 12 cell joltage', () => {
        expect(largest12CellJoltage('987654321111111')).toEqual(987654321111)
        expect(largest12CellJoltage('811111111111119')).toEqual(811111111119)
        expect(largest12CellJoltage('234234234234278')).toEqual(434234234278)
        expect(largest12CellJoltage('818181911112111')).toEqual(888911112111)
    })

    test('highestCellCount', () => {
        const input = '2222213223325332632323212227323432113121'
        const result = highestCellCount(input)
        expect(result).toEqual(27)
        expect(input[result]).toEqual('7')
        expect(input.substring(result)).toEqual('7323432113121')

    })

    test('Test input', () => {
        expect(largest12CellJoltage('2331221221361221232332583266422231222315311212133222227552392222213223325332632323212227323432113121')).toEqual(973432113121)
    })
})