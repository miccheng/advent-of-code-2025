import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { solution as day1Solution } from './day1'
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

let runFor = (process.argv.length > 2) ? process.argv[2] : 'all' 

switch (true) {
    case ['all', '1'].includes(runFor):
        const inputDay1 = fs.readFileSync(path.join(__dirname, '/inputs/day1.txt'), 'utf-8')
        console.log('Day 1 Solution:', day1Solution(inputDay1))        
        if (runFor === '1') break
    case ['all', '2'].includes(runFor):
        const inputDay2 = fs.readFileSync(path.join(__dirname, '/inputs/day2.txt'), 'utf-8')
        console.log('Day 2 Solution (Part 1):', day2Part1Solution(inputDay2))
        console.log('Day 2 Solution (Part 2):', day2Part2Solution(inputDay2))
        if (runFor === '2') break
    case ['all', '3'].includes(runFor):
        const inputDay3 = fs.readFileSync(path.join(__dirname, '/inputs/day3.txt'), 'utf-8')
        console.log('Day 3 Solution (Part 1):', day3Part1Solution(inputDay3))
        console.log('Day 3 Solution (Part 2):', day3Part2Solution(inputDay3))
        if (runFor === '3') break
    case ['all', '4'].includes(runFor):
        const inputDay4 = fs.readFileSync(path.join(__dirname, '/inputs/day4.txt'), 'utf-8')
        console.log('Day 4 Solution (Part 1):', day4Part1Solution(inputDay4))
        console.log('Day 4 Solution (Part 2):', day4Part2Solution(inputDay4))
        if (runFor === '4') break
    case ['all', '5'].includes(runFor):
        const inputDay5 = fs.readFileSync(path.join(__dirname, '/inputs/day5.txt'), 'utf-8')
        console.log('Day 5 Solution (Part 1):', day5Part1Solution(inputDay5))
        console.log('Day 5 Solution (Part 2):', day5Part2Solution(inputDay5))
        if (runFor === '5') break
    case ['all', '6'].includes(runFor):
        const inputDay6 = fs.readFileSync(path.join(__dirname, '/inputs/day6.txt'), 'utf-8')
        console.log('Day 6 Solution (Part 1):', day6Part1Solution(inputDay6))
        console.log('Day 6 Solution (Part 2):', day6Part2Solution(inputDay6))
        if (runFor === '6') break
    case ['all', '7'].includes(runFor):
        const inputDay7 = fs.readFileSync(path.join(__dirname, '/inputs/day7.txt'), 'utf-8')
        console.log('Day 7 Solution (Part 1):', day7Part1Solution(inputDay7))
        console.log('Day 7 Solution (Part 2):', day7Part2Solution(inputDay7))
        if (runFor === '7') break
    case ['all', '8'].includes(runFor):
        const inputDay8 = fs.readFileSync(path.join(__dirname, '/inputs/day8.txt'), 'utf-8')
        console.log('Day 8 Solution (Part 1):', day8Part1Solution(inputDay8))
        console.log('Day 8 Solution (Part 2):', day8Part2Solution(inputDay8))
        if (runFor === '8') break
    case ['all', '9'].includes(runFor):
        const inputDay9 = fs.readFileSync(path.join(__dirname, '/inputs/day9.txt'), 'utf-8')
        console.log('Day 9 Solution (Part 1):', day9Part1Solution(inputDay9))
        console.log('Day 9 Solution (Part 2):', day9Part2Solution(inputDay9))
        if (runFor === '9') break
    case ['all', '10'].includes(runFor):
        const inputDay10 = fs.readFileSync(path.join(__dirname, '/inputs/day10.txt'), 'utf-8')
        console.log('Day 10 Solution (Part 1):', day10Part1Solution(inputDay10))
        console.log('Day 10 Solution (Part 2):', day10Part2Solution(inputDay10))
        if (runFor === '10') break
    case ['all', '11'].includes(runFor):
        const inputDay11 = fs.readFileSync(path.join(__dirname, '/inputs/day11.txt'), 'utf-8')
        console.log('Day 11 Solution (Part 1):', day11Part1Solution(inputDay11))
        console.log('Day 11 Solution (Part 2):', day11Part2Solution(inputDay11))
        if (runFor === '11') break
    case ['all', '12'].includes(runFor):
        const inputDay12 = fs.readFileSync(path.join(__dirname, '/inputs/day12.txt'), 'utf-8')
        console.log('Day 12 Solution (Part 1):', day12Part1Solution(inputDay12))
        console.log('Day 12 Solution (Part 2):', day12Part2Solution(inputDay12))
        if (runFor === '12') break
}
