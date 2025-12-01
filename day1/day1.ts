export const solution = (steps:string[]) => {
    let startingPosition = 50
    const result = { dialPosition: startingPosition, password: 0 }

    for (const step of steps) {
        const direction = step.charAt(0)
        let value = parseInt(step.slice(1), 10)

        if (value > 100) {
            value = value % 100
        }

        if (direction === 'R') {
            result.dialPosition += value
        } else if (direction === 'L') {
            result.dialPosition -= value
        }

        if (result.dialPosition < 0) {
            result.dialPosition += 100
        } else if (result.dialPosition > 99) {
            result.dialPosition -= 100
        }

        if (result.dialPosition === 0) {
            result.password += 1
        }
    }

    return result;
};
