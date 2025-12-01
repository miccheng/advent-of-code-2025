import { solution as day1Solution } from './day1/day1'

import fs from 'fs'

const input = fs.readFileSync('./day1/input.txt', 'utf-8').trim().split('\n')
console.log('Day 1', day1Solution(input))