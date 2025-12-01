import { describe, expect, test } from 'vitest'
import { solution } from '../day1'

describe('Day1 Tests', () => {
    test('No actions', () => {
        expect(solution([])).include({ dialPosition: 50 });
    })

    test('Moving right increments the dial number', () => {
        expect(solution(['R10'])).include({ dialPosition: 60 });
    })

    test('Moving left decrements the dial number', () => {
        expect(solution(['L20'])).include({ dialPosition: 30 });
    })

    test('Moving right past 99', () => {
        expect(solution(['R50'])).include({ dialPosition: 0 });
        expect(solution(['R60'])).include({ dialPosition: 10 });
        expect(solution(['R210'])).include({ dialPosition: 60 });
    })

    test('Moving left past 0', () => {
        expect(solution(['L50'])).include({ dialPosition: 0, password: 1 });
        expect(solution(['L60'])).include({ dialPosition: 90 });
        expect(solution(['L68'])).include({ dialPosition: 82 });
        expect(solution(['L220'])).include({ dialPosition: 30 });
    })

    test('Multiple movements', () => {
        expect(solution(['L68', 'L30'])).include({ dialPosition: 52, password: 0, '0x434C49434B': 1 });
        expect(solution(['L68', 'L30', 'R48'])).include({ dialPosition: 0, password: 1, '0x434C49434B': 2 });
        expect(solution(['L68', 'L30', 'R48', 'L5', 'R60', 'L55', 'L1', 'L99', 'R14', 'L82'])).include({ dialPosition: 32, password: 3, '0x434C49434B': 6 });
        expect(solution(['R1000'])).include({ dialPosition: 50, password: 0, '0x434C49434B': 10 });
    })
})
