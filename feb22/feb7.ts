/* Not my best work but I'm tired lol */

function addDigits2(num: number): number {
    let sum = 0

    while(Math.floor(num / 10) !== 0) {
        sum += num % 10
        num = Math.floor(num / 10)
    }

    return sum + num
};

function addDigits(num: number): number {
    let total = addDigits2(num)

    while(total >= 10) {
        total = addDigits2(total)
    }

    return total
}

module.exports = addDigits