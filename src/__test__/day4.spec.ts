import { describe, expect, test } from 'vitest'
import { solutionPart1, solutionPart2, gridParser, getNeighbours, tick } from '../day4'

describe('Day 4 Tests', () => {
    test('Example Inputs', () => {
        expect(solutionPart1("..@@.@@@@.\n@@@.@.@.@@\n@@@@@.@.@@\n@.@@@@..@.\n@@.@@@@.@@\n.@@@@@@@.@\n.@.@.@.@@@\n@.@@@.@@@@\n.@@@@@@@@.\n@.@.@@@.@.")).toEqual(13);
        expect(solutionPart2("..@@.@@@@.\n@@@.@.@.@@\n@@@@@.@.@@\n@.@@@@..@.\n@@.@@@@.@@\n.@@@@@@@.@\n.@.@.@.@@@\n@.@@@.@@@@\n.@@@@@@@@.\n@.@.@@@.@.")).toEqual(43);
    })

    test('Parser', () => {
        expect(gridParser('')).toEqual([])
        expect(gridParser('...')).toEqual([['.', '.', '.']])
        expect(gridParser("...\n@@@\n...")).toEqual([['.', '.', '.'],['@', '@', '@'],['.', '.', '.']])
    })

    test('getNeighbours', () => {
        expect(getNeighbours(1, 1, 3, 3)).toEqual([
            { col: 0, row: 0 }, { col: 1, row: 0 }, { col: 2, row: 0 },
            { col: 0, row: 1 },                     { col: 2, row: 1 },
            { col: 0, row: 2 }, { col: 1, row: 2 }, { col: 2, row: 2 },
        ])

        expect(getNeighbours(1, 1, 2, 2)).toEqual([
            { col: 0, row: 0 }, { col: 1, row: 0 },
            { col: 0, row: 1 }
        ])
    })

    test('tick', () => {
        const grid = gridParser("..@@.@@@@.\n@@@.@.@.@@\n@@@@@.@.@@\n@.@@@@..@.\n@@.@@@@.@@\n.@@@@@@@.@\n.@.@.@.@@@\n@.@@@.@@@@\n.@@@@@@@@.\n@.@.@@@.@.")
        const result = tick(grid)
        expect(result.newGrid).toEqual([
            ['.', '.', 'x', 'x', '.', 'x', 'x', '@', 'x', '.'],
            ['x', '@', '@', '.', '@', '.', '@', '.', '@', '@'],
            ['@', '@', '@', '@', '@', '.', 'x', '.', '@', '@'],
            ['@', '.', '@', '@', '@', '@', '.', '.', '@', '.'],
            ['x', '@', '.', '@', '@', '@', '@', '.', '@', 'x'],
            ['.', '@', '@', '@', '@', '@', '@', '@', '.', '@'],
            ['.', '@', '.', '@', '.', '@', '.', '@', '@', '@'],
            ['x', '.', '@', '@', '@', '.', '@', '@', '@', '@'],
            ['.', '@', '@', '@', '@', '@', '@', '@', '@', '.'],
            ['x', '.', 'x', '.', '@', '@', '@', '.', 'x', '.'],
        ])
        expect(result.removed).toEqual(13)
    })
})
