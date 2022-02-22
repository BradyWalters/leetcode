export function titleToNumber(columnTitle: string): number {
    const aCharCode = 'A'.charCodeAt(0) - 1
    let column = 0

    for(let i = 0; i < columnTitle.length - 1; i++) {
        column += columnTitle.charCodeAt(i) - aCharCode
        column *= 26
    }
    
    return column + columnTitle.charCodeAt(columnTitle.length - 1) - aCharCode
};