import { solution as day1Solution } from './day1/day1'
import { solution as day2Solution } from './day2/day2'

import fs from 'fs'

const inputDay1 = fs.readFileSync('./day1/input.txt', 'utf-8').trim().split('\n')
console.log('Day 1 Solution:', day1Solution(inputDay1))

const inputDay2 = fs.readFileSync('./day2/input.txt', 'utf-8')
console.log('Day 2 Solution:', day2Solution(inputDay2))