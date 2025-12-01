import { describe, expect, test } from 'vitest'
import { solution } from '../day1'

describe('Day1 Tests', () => {
    test('No actions', () => {
        expect(solution([])).toEqual({ dialPosition: 50, password: 0 });
    })

    test('Moving right increments the dial number', () => {
        expect(solution(['R10'])).toEqual({ dialPosition: 60, password: 0 });
    })

    test('Moving left decrements the dial number', () => {
        expect(solution(['L20'])).toEqual({ dialPosition: 30, password: 0 });
    })

    test('Moving right past 99', () => {
        expect(solution(['R50'])).toEqual({ dialPosition: 0, password: 1 });
        expect(solution(['R60'])).toEqual({ dialPosition: 10, password: 0 });
        expect(solution(['R210'])).toEqual({ dialPosition: 60, password: 0 });
    })

    test('Moving left past 0', () => {
        expect(solution(['L50'])).toEqual({ dialPosition: 0, password: 1 });
        expect(solution(['L60'])).toEqual({ dialPosition: 90, password: 0 });
        expect(solution(['L68'])).toEqual({ dialPosition: 82, password: 0 });
        expect(solution(['L220'])).toEqual({ dialPosition: 30, password: 0 });
    })

    test('Multiple movements', () => {
        expect(solution(['L68', 'L30', 'R48', 'L5'])).toEqual({ dialPosition: 95, password: 1 });
        expect(solution(['L68', 'L30', 'R48', 'L5', 'R60', 'L55', 'L1', 'L99', 'R14', 'L82'])).toEqual({ dialPosition: 32, password: 3 });
    })
})
