import { describe, expect, test } from 'vitest'
import { solutionPart1, solutionPart2, parserInput, buildFreshList } from '../day5'

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
})
