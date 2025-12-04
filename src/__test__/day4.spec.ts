import { describe, expect, test } from 'vitest'
import { solutionPart1, solutionPart2, gridParser } from '../day4'

describe('Day 4 Tests', () => {
    test('Example Inputs', () => {
        expect(solutionPart1("")).toEqual(0);
        expect(solutionPart2("")).toEqual(0);
    })

    test('Parser', () => {
        expect(gridParser('')).toEqual([])
        expect(gridParser('...')).toEqual([['.', '.', '.']])
        expect(gridParser("...\n@@@\n...")).toEqual([['.', '.', '.'],['@', '@', '@'],['.', '.', '.']])
    })
})
