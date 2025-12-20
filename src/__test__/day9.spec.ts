import { describe, expect, test } from 'vitest'
import { solutionPart1, solutionPart2, parserInput, calculateTiles } from '../day9'

describe('Day 9 Tests', () => {
    const exampleInput = `7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3`

    test('Example Inputs', () => {
        expect(solutionPart1(exampleInput)).toEqual(50);
        expect(solutionPart2("")).toEqual(0);
    })

    test('Parser', () => {
        expect(parserInput(exampleInput)).toEqual([
            { col: 7, row: 1 },
            { col: 11, row: 1 },
            { col: 11, row: 7 },
            { col: 9, row: 7 },
            { col: 9, row: 5 },
            { col: 2, row: 5 },
            { col: 2, row: 3 },
            { col: 7, row: 3 },
        ])
    })

    describe('calculateTiles', () => {
        test('1x1 grid', () => {
            const p = { col: 0, row: 0 }
            const q = { col: 0, row: 0 }
            expect(calculateTiles(p, q)).toEqual(1)
        })

        test('2x1 grid', () => {
            const p = { col: 0, row: 0 }
            const q = { col: 1, row: 0 }
            expect(calculateTiles(p, q)).toEqual(2)
        })

        test('1x2 grid', () => {
            const p = { col: 0, row: 0 }
            const q = { col: 0, row: 1 }
            expect(calculateTiles(p, q)).toEqual(2)
        })

        test('2x2 grid', () => {
            const p = { col: 0, row: 0 }
            const q = { col: 1, row: 1 }
            expect(calculateTiles(p, q)).toEqual(4)
        })

        test('2x2 grid reversed', () => {
            const p = { col: 1, row: 0 }
            const q = { col: 0, row: 1 }
            expect(calculateTiles(p, q)).toEqual(4)
        })

        test('3x3 grid', () => {
            const p = { col: 0, row: 0 }
            const q = { col: 2, row: 2 }
            expect(calculateTiles(p, q)).toEqual(9)
        })

        test('example 1', () => {
            const p = { col: 2, row: 5 }
            const q = { col: 9, row: 7 }
            expect(calculateTiles(p, q)).toEqual(24)
        })

        test('example 2', () => {
            const p = { col: 7, row: 1 }
            const q = { col: 11, row: 7 }
            expect(calculateTiles(p, q)).toEqual(35)
        })

        test('example 3', () => {
            const p = { col: 7, row: 3 }
            const q = { col: 2, row: 3 }
            expect(calculateTiles(p, q)).toEqual(6)
        })

        test('example 4', () => {
            const p = { col: 2, row: 5 }
            const q = { col: 11, row: 1 }
            expect(calculateTiles(p, q)).toEqual(50)
        })
    })
})
