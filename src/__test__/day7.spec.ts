import { describe, expect, test } from 'vitest'
import { solutionPart1, solutionPart2, parserInput, locateAllSplitters, locateAllTachyonBeams } from '../day7'

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
        expect(solutionPart2(exampleInput)).toEqual(40);
    })

    test('Parser', () => {
        const result = parserInput(exampleInput)
        expect(result.width).toEqual(15)
        expect(result.startingPoint).toEqual(7)
        expect(result.manifold).toEqual([
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
        ])
    })

    describe('buildGrid', () => {
        test('builds a small grid', () => {
            expect(parserInput(``).grid).toEqual([])
            expect(parserInput(`.S
..
..`).grid).toEqual([
    [
        { type: '.', row: 0, col: 0 },
        { type: '.', row: 0, col: 1 },
    ],
    [
        { type: '.', row: 1, col: 0 },
        { type: '.', row: 1, col: 1 },
    ],
])
        })

        test('builds a grid with splitter', () => {
            expect(parserInput(`.S.
...
.^.`).grid).toEqual([
    [
        { type: '.', row: 0, col: 0 },
        { type: '.', row: 0, col: 1 },
        { type: '.', row: 0, col: 2 },
    ],
    [
        { type: '.', row: 1, col: 0 },
        { type: '^', row: 1, col: 1 },
        { type: '.', row: 1, col: 2 },
    ],
])
        })
    })

    describe('locateAllSplitters', () => {
        test('no spliter', () => {
            expect(locateAllSplitters('')).toEqual([])
        })

        test('find 1 splitter', () => {
            expect(locateAllSplitters('.......^.......')).toEqual([7])
        })
    })

    describe('locateAllTachyonBeams', () => {
        test('no spliter', () => {
            expect(locateAllTachyonBeams('')).toEqual([])
        })

        test('find 1 splitter', () => {
            expect(locateAllTachyonBeams('......|^|......')).toEqual([6, 8])
        })
    })
})
