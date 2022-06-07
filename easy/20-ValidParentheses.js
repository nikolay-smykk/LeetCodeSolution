/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    const hashMap = {
        '(': ')',
        '[': ']',
        '{': '}',
    }
    for (let el of s) {
        if (hashMap[el]) stack.push(hashMap[el])
        else if (stack.length > 0 && stack[stack.length - 1] === el) stack.pop()
        else return false
    }
    return stack.length === 0
}
