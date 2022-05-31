/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let fizzCounter = 2
    let buzzCounter = 4
    let output = []
    for (let i = 1; i <= n; i++, fizzCounter--, buzzCounter--) {
        if (!fizzCounter && !buzzCounter) {
            output.push('FizzBuzz')
            fizzCounter = 3
            buzzCounter = 5
        } else if (!fizzCounter) {
            output.push('Fizz')
            fizzCounter = 3
        } else if (!buzzCounter) {
            output.push('Buzz')
            buzzCounter = 5
        } else {
            output.push(i.toString())
        }
    }
    return output
}
