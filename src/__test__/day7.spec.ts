import { describe, expect, test } from 'vitest'
import { solutionPart1, solutionPart2, parserInput, buildTachyonTrail, locateAllSplitters, locateAllTachyonBeams } from '../day7'

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
        // expect(result.manifold).toEqual([
        //     '...............',
        //     '.......^.......',
        //     '...............',
        //     '......^.^......',
        //     '...............',
        //     '.....^.^.^.....',
        //     '...............',
        //     '....^.^...^....',
        //     '...............',
        //     '...^.^...^.^...',
        //     '...............',
        //     '..^...^.....^..',
        //     '...............',
        //     '.^.^.^.^.^...^.',
        //     '...............',
        // ])
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

    describe('buildTachyonTrail', () => {
        test('small grid with 1 splitter', () => {
            const input = parserInput(`.S.
...
.^.
...`)
            const result = buildTachyonTrail(input)

            expect(result.grid).toEqual([
                [
                    { type: '.', row: 0, col: 0 },
                    { type: '|', row: 0, col: 1, next: { row: 1, col: 1 } },
                    { type: '.', row: 0, col: 2 },
                ],
                [
                    { type: '|', row: 1, col: 0, next: { row: 2, col: 0 } },
                    { type: '^', row: 1, col: 1, left: { row: 1, col: 0 }, right: { row: 1, col: 2 } },
                    { type: '|', row: 1, col: 2, next: { row: 2, col: 2 } },
                ],
                [
                    { type: '|', row: 2, col: 0 },
                    { type: '.', row: 2, col: 1 },
                    { type: '|', row: 2, col: 2 },
                ],
            ])
        })

        test('small grid with 2 splitters', () => {
            const input = parserInput(`.S..
....
.^..
..^.
....`)
            const result = buildTachyonTrail(input)

            expect(result.grid).toEqual([
                [
                    { type: '.', row: 0, col: 0 },
                    { type: '|', row: 0, col: 1, next: { row: 1, col: 1 } },
                    { type: '.', row: 0, col: 2 },
                    { type: '.', row: 0, col: 3 },
                ],
                [
                    { type: '|', row: 1, col: 0, next: { row: 2, col: 0 } },
                    { type: '^', row: 1, col: 1, left: { row: 1, col: 0 }, right: { row: 1, col: 2 } },
                    { type: '|', row: 1, col: 2, next: { row: 2, col: 2 } },
                    { type: '.', row: 1, col: 3 },
                ],
                [
                    { type: '|', row: 2, col: 0, next: { row: 3, col: 0 } },
                    { type: '|', row: 2, col: 1, next: { row: 3, col: 1 } },
                    { type: '^', row: 2, col: 2, left: { row: 2, col: 1 }, right: { row: 2, col: 3 } },
                    { type: '|', row: 2, col: 3, next: { row: 3, col: 3 } },
                ],
                [
                    { type: '|', row: 3, col: 0 },
                    { type: '|', row: 3, col: 1 },
                    { type: '.', row: 3, col: 2 },
                    { type: '|', row: 3, col: 3 },
                ]
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
