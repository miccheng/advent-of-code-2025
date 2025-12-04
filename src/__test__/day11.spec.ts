import { describe, expect, test } from 'vitest'
import { solutionPart1, solutionPart2, parserInput } from '../day11'

describe('Day 11 Tests', () => {
    test('Example Inputs', () => {
        expect(solutionPart1("")).toEqual(0);
        expect(solutionPart2("")).toEqual(0);
    })

    test('Parser', () => {
        expect(parserInput('')).toEqual([])
    })
})
