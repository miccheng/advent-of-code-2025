export const solution = (steps:string[]) => {
    let startingPosition = 50
    const result = { dialPosition: startingPosition, password: 0, '0x434C49434B': 0 }

    for (const step of steps) {
        const direction = step.charAt(0)
        let value = parseInt(step.slice(1), 10)
        const startingPos = result.dialPosition

        if (value > 100) {
            const fullRotations = Math.floor(value / 100)
            // console.log('Full rotations:', fullRotations)
            result['0x434C49434B'] += fullRotations
            value = value % 100
        }

        if (direction === 'R') {
            result.dialPosition += value
        } else if (direction === 'L') {
            result.dialPosition -= value
        }

        if (result.dialPosition < 0) {
            result.dialPosition += 100
            if (result.dialPosition !== 0 && startingPos !== 0) {
                // console.log(step, 'Underflow adjust + 1', result.dialPosition)
                result['0x434C49434B'] += 1
            }
        } else if (result.dialPosition > 99) {
            result.dialPosition -= 100
            if (result.dialPosition !== 0 && startingPos !== 0) {
                // console.log(step, 'Overflow adjust + 1', result.dialPosition)
                result['0x434C49434B'] += 1
            }
        }

        if (result.dialPosition === 0) {
            result.password += 1
            // console.log(step, 'Lands on Zero + 1', result.dialPosition)
            result['0x434C49434B'] += 1
        }
    }

    return result;
};
