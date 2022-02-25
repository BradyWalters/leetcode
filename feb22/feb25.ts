export function compareVersion(version1: string, version2: string): number {
    const v1 = version1.split('.')
    const v2 = version2.split('.')

    while(v1.length > v2.length) {
        v2.push("0")
    }

    while(v2.length > v1.length) {
        v1.push("0")
    }

    for(let i = 0; i < v1.length; i++) {
        if(parseInt(v1[i]) > parseInt(v2[i])) {
            return 1
        } else if(parseInt(v2[i]) > parseInt(v1[i])) {
            return -1
        }
    }
    
    return 0
};