import { describe, expect, test } from 'vitest'
import { solution } from '../day2'

describe('Day2 Tests', () => {
    test('No actions', () => {
        expect(solution('')).toEqual({ invalidIds: [], sum: 0 });
    })

    test('small range', () => {
        expect(solution('11-22')).toEqual({ invalidIds: [11, 22], sum: 33 });
    })

    test('full range', () => {
        const result = solution('11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124')
        expect(result.sum).toEqual(1227775554);
    })
})
