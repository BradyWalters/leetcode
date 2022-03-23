export function brokenCalc(startValue: number, target: number): number {
    let steps = 0
    while(startValue !== target) {
        if(startValue >= target) return (startValue - target) + steps

        if(target % 2 === 0) target /= 2
        else target++

        steps++
    }

    return steps
};