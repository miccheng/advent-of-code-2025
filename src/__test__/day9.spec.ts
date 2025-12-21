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
        expect(solutionPart2(exampleInput)).toEqual(24);
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

            const result = calculateTiles(p, q)

            expect(result.total).toEqual(1)
            expect(result.tiles).toEqual([p])
        })

        test('2x1 grid', () => {
            const p = { col: 0, row: 0 }
            const q = { col: 1, row: 0 }

            const result = calculateTiles(p, q)

            expect(result.total).toEqual(2)
            expect(result.tiles).toEqual([p, q])
        })

        test('1x2 grid', () => {
            const p = { col: 0, row: 0 }
            const q = { col: 0, row: 1 }

            const result = calculateTiles(p, q)

            expect(result.total).toEqual(2)
            expect(result.tiles).toEqual([p, q])
        })

        test('2x2 grid', () => {
            const p = { col: 0, row: 0 }
            const q = { col: 1, row: 1 }

            const result = calculateTiles(p, q)

            expect(result.total).toEqual(4)
            expect(result.tiles).toEqual([p, { col: 1, row: 0 }, { col: 0, row: 1 }, q])
        })

        test('2x2 grid reversed', () => {
            const p = { col: 1, row: 0 }
            const q = { col: 0, row: 1 }

            const result = calculateTiles(p, q)

            expect(result.total).toEqual(4)
            expect(result.tiles).toEqual([p, { col: 0, row: 0 }, { col: 1, row: 1 }, q])
        })

        test('3x3 grid', () => {
            const p = { col: 0, row: 0 }
            const q = { col: 2, row: 2 }
            const result = calculateTiles(p, q)
            expect(result.total).toEqual(9)
            expect(result.tiles).toEqual([p, { col: 1, row: 0 }, { col: 2, row: 0 }, 
                                        { col: 0, row: 1 }, { col: 1, row: 1 }, { col: 2, row: 1 },
                                        { col: 0, row: 2 }, { col: 1, row: 2 }, q])
        })

        test('example 1', () => {
            const p = { col: 2, row: 5 }
            const q = { col: 9, row: 7 }
            const result = calculateTiles(p, q)
            expect(result.total).toEqual(24)
        })

        test('example 2', () => {
            const p = { col: 7, row: 1 }
            const q = { col: 11, row: 7 }
            const result = calculateTiles(p, q)
            expect(result.total).toEqual(35)
        })

        test('example 3', () => {
            const p = { col: 7, row: 3 }
            const q = { col: 2, row: 3 }
            const result = calculateTiles(p, q)
            expect(result.total).toEqual(6)
        })

        test('example 4', () => {
            const p = { col: 2, row: 5 }
            const q = { col: 11, row: 1 }
            const result = calculateTiles(p, q)
            expect(result.total).toEqual(50)
        })

        test('part 2 example 1', () => {
            const p = { col: 7, row: 3 }
            const q = { col: 11, row: 1 }
            const result = calculateTiles(p, q)
            expect(result.total).toEqual(15)
        })

        test('part 2 example 2', () => {
            const p = { col: 9, row: 7 }
            const q = { col: 9, row: 5 }
            const result = calculateTiles(p, q)
            expect(result.total).toEqual(3)
        })

        test('part 2 example 3', () => {
            const p = { col: 9, row: 5 }
            const q = { col: 2, row: 3 }
            const result = calculateTiles(p, q)
            expect(result.total).toEqual(24)
        })
    })
})
