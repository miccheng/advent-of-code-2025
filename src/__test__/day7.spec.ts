import { describe, expect, test } from 'vitest'
import { solutionPart1, solutionPart2, parserInput } from '../day7'

describe('Day 7 Tests', () => {
    const exampleInput = `.......S.......
...............
.......^.......
...............
......^.^......
...............
.....^.^.^.....
...............
....^.^...^....
...............
...^.^...^.^...
...............
..^...^.....^..
...............
.^.^.^.^.^...^.
...............`

    test('Example Inputs', () => {
        expect(solutionPart1(exampleInput)).toEqual(21);
        expect(solutionPart2(exampleInput)).toEqual(0);
    })

    test('Parser', () => {
        expect(parserInput(exampleInput)).toEqual({
            width: 15,
            startingPoint: 7,
            manifold: [
                '...............',
                '.......^.......',
                '...............',
                '......^.^......',
                '...............',
                '.....^.^.^.....',
                '...............',
                '....^.^...^....',
                '...............',
                '...^.^...^.^...',
                '...............',
                '..^...^.....^..',
                '...............',
                '.^.^.^.^.^...^.',
                '...............',
            ]
        })
    })
})
