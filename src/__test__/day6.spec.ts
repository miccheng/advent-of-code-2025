import { describe, expect, test } from 'vitest'
import { solutionPart1, solutionPart2, parserInput } from '../day6'

describe('Day 6 Tests', () => {
    const exampleInput = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `

    test('Example Inputs', () => {
        // expect(solutionPart1(exampleInput)).toEqual(4277556);
        expect(solutionPart2(exampleInput)).toEqual(3263827);
    })

    test('Parser', () => {
        expect(parserInput(exampleInput)).toEqual({
            values: [
                ['123', '328', ' 51', '64 '],
                [' 45', '64 ', '387', '23 '],
                ['  6', '98 ', '215', '314'],
            ],
            operations: ['*', '+', '*', '+'],
            colWidth: [3, 3, 3, 3]
        })
    })
})
