/**
 * @param {string} s
 * @return {boolean}
 */

const ALPHA_NUM = /^[a-zA-Z0-9]$/

var isPalindrome = function (s) {
    let left = 0
    let right = s.length - 1

    while (left < right) {
        while (left < right && !ALPHA_NUM.test(s[left])) {
            left++
        }
        while (left < right && !ALPHA_NUM.test(s[right])) {
            right--
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false
        }

        left++
        right--
    }
    return true
}
