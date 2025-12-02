import { describe, expect, test } from 'vitest'
import { solutionPart1, isRepeatingSequence } from '../day2'

describe('Day2 Tests', () => {
    test('No actions', () => {
        expect(solutionPart1('')).toEqual({ invalidIds: [], sum: 0 });
    })

    test('small range', () => {
        expect(solutionPart1('11-22')).toEqual({ invalidIds: [11, 22], sum: 33 });
    })

    test('full range', () => {
        const result = solutionPart1('11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124')
        expect(result.sum).toEqual(1227775554);
    })

    describe('isRepeatingSequence', () => {
        test('returns true for repeating sequence', () => {
            expect(isRepeatingSequence(11)).toBe(true);
            expect(isRepeatingSequence(1111111)).toBe(true); // Repeating single digit
            expect(isRepeatingSequence(12341234)).toBe(true);
            expect(isRepeatingSequence(123123123)).toBe(true);
            expect(isRepeatingSequence(1212121212)).toBe(true);
            expect(isRepeatingSequence(12121212121)).toBe(false);
        });
    });
})
