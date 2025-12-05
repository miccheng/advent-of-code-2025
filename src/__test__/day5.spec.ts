import { describe, expect, test } from 'vitest'
import { solutionPart1, solutionPart2, parserInput, buildFreshList, normalizeRanges } from '../day5'

describe('Day 5 Tests', () => {
    const exampleInput = `3-5
10-14
16-20
12-18

1
5
8
11
17
32`

    test('Example Inputs', () => {
        expect(solutionPart1(exampleInput)).toEqual(3);
        expect(solutionPart2(exampleInput)).toEqual(14);
    })

    test('Parser', () => {
        expect(parserInput(exampleInput)).toEqual({
    freshIngredientIDRanges: [ '3-5', '10-14', '16-20', '12-18' ],
    ingredients: [ 1, 5, 8, 11, 17, 32 ]
})
    })

    test('buildFreshList', () => {
        const result = buildFreshList([ '3-5', '10-14'])
        expect(Array.from(result)).toEqual([
                { min: 3, max: 5 },
                { min: 10, max: 14 }
            ])
    })

    test('normalizeRanges', () => {
        const result = normalizeRanges(
            [
                { min: 3, max: 5 },
                { min: 10, max: 14 },
                { min: 10, max: 14 },
                { min: 16, max: 20 }, 
                { min: 12, max: 18 },
            ]
        )
        expect(result).toEqual([
            { min: 3, max: 5 },
            { min: 10, max: 20 },
        ])

        const result2 = normalizeRanges([
            { min: 540370845452425, max: 541250620812775 },
            { min: 540370845452425, max: 540919835538807 },
            { min: 540370845452425, max: 541250620812775 },
            { min: 540370845452425, max: 540620249680923 },
        ])
        expect(result2).toEqual([
            { min: 540370845452425, max: 541250620812775 },
        ])
    })
})
