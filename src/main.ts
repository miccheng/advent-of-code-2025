import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { solutionPart1 as day1Part1Solution, solutionPart2 as day1Part2Solution } from './day1'
import { solutionPart1 as day2Part1Solution, solutionPart2 as day2Part2Solution } from './day2'
import { solutionPart1 as day3Part1Solution, solutionPart2 as day3Part2Solution } from './day3'
import { solutionPart1 as day4Part1Solution, solutionPart2 as day4Part2Solution } from './day4'
import { solutionPart1 as day5Part1Solution, solutionPart2 as day5Part2Solution } from './day5'
import { solutionPart1 as day6Part1Solution, solutionPart2 as day6Part2Solution } from './day6'
import { solutionPart1 as day7Part1Solution, solutionPart2 as day7Part2Solution } from './day7'
import { solutionPart1 as day8Part1Solution, solutionPart2 as day8Part2Solution } from './day8'
import { solutionPart1 as day9Part1Solution, solutionPart2 as day9Part2Solution } from './day9'
import { solutionPart1 as day10Part1Solution, solutionPart2 as day10Part2Solution } from './day10'
import { solutionPart1 as day11Part1Solution, solutionPart2 as day11Part2Solution } from './day11'
import { solutionPart1 as day12Part1Solution, solutionPart2 as day12Part2Solution } from './day12'

const fetchInput = (day: string): string => {
    return fs.readFileSync(path.join(__dirname, `/inputs/day${day}.txt`), 'utf-8')
}

let runFor = (process.argv.length > 2) ? process.argv[2] : 'all' 

switch (true) {
    case ['all', '1'].includes(runFor):
        console.log('Day 1 Solution (Part 1):', day1Part1Solution(fetchInput('1')))
        console.log('Day 1 Solution (Part 2):', day1Part2Solution(fetchInput('1')))
        if (runFor === '1') break
    case ['all', '2'].includes(runFor):
        console.log('Day 2 Solution (Part 1):', day2Part1Solution(fetchInput('2')))
        console.log('Day 2 Solution (Part 2):', day2Part2Solution(fetchInput('2')))
        if (runFor === '2') break
    case ['all', '3'].includes(runFor):
        console.log('Day 3 Solution (Part 1):', day3Part1Solution(fetchInput('3')))
        console.log('Day 3 Solution (Part 2):', day3Part2Solution(fetchInput('3')))
        if (runFor === '3') break
    case ['all', '4'].includes(runFor):
        console.log('Day 4 Solution (Part 1):', day4Part1Solution(fetchInput('4')))
        console.log('Day 4 Solution (Part 2):', day4Part2Solution(fetchInput('4')))
        if (runFor === '4') break
    case ['all', '5'].includes(runFor):
        console.log('Day 5 Solution (Part 1):', day5Part1Solution(fetchInput('5')))
        console.log('Day 5 Solution (Part 2):', day5Part2Solution(fetchInput('5')))
        if (runFor === '5') break
    case ['all', '6'].includes(runFor):
        console.log('Day 6 Solution (Part 1):', day6Part1Solution(fetchInput('6')))
        console.log('Day 6 Solution (Part 2):', day6Part2Solution(fetchInput('6')))
        if (runFor === '6') break
    case ['all', '7'].includes(runFor):
        console.log('Day 7 Solution (Part 1):', day7Part1Solution(fetchInput('7')))
        console.log('Day 7 Solution (Part 2):', day7Part2Solution(fetchInput('7')))
        if (runFor === '7') break
    case ['all', '8'].includes(runFor):
        console.log('Day 8 Solution (Part 1):', day8Part1Solution(fetchInput('8'), 1000))
        console.log('Day 8 Solution (Part 2):', day8Part2Solution(fetchInput('8')))
        if (runFor === '8') break
    case ['all', '9'].includes(runFor):
        console.log('Day 9 Solution (Part 1):', day9Part1Solution(fetchInput('9')))
        console.log('Day 9 Solution (Part 2):', day9Part2Solution(fetchInput('9')))
        if (runFor === '9') break
    case ['all', '10'].includes(runFor):
        console.log('Day 10 Solution (Part 1):', day10Part1Solution(fetchInput('10')))
        console.log('Day 10 Solution (Part 2):', day10Part2Solution(fetchInput('10')))
        if (runFor === '10') break
    case ['all', '11'].includes(runFor):
        console.log('Day 11 Solution (Part 1):', day11Part1Solution(fetchInput('11')))
        console.log('Day 11 Solution (Part 2):', day11Part2Solution(fetchInput('11')))
        if (runFor === '11') break
    case ['all', '12'].includes(runFor):
        console.log('Day 12 Solution (Part 1):', day12Part1Solution(fetchInput('12')))
        console.log('Day 12 Solution (Part 2):', day12Part2Solution(fetchInput('12')))
        if (runFor === '12') break
}
