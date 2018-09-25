/**
 * Module for obtaining descriptive information about a set of data.
 *
 * @author Marcus Cvjeticanin
 * @version 1.1.0
 */

'use strict'

const argNotArray = 'The passed argument is not an array.'
const noElementsInArray = 'The passed array contains no elements.'
const containsNotJustNumbers = 'The passed array contains not just numbers.'

/**
 * Returns the descriptive information (maximum, mean, median, minimum,
 * mode, range and standard deviation) from a set of numbers.
 *
 * @param {number[]} numbers The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {{maximum: number, mean: number, median: number, minimum: number, mode: number[], range: number, standardDeviation: number}}
 */
function descriptiveStatistics (numbers) {
    let stats = {
        maximum: maximum(numbers),
        mean: mean(numbers),
        median: median(numbers),
        minimum: minimum(numbers),
        mode: mode(numbers),
        range: range(numbers),
        standardDeviation: standardDeviation(numbers),
    }
    return stats
}

/**
 * Returns boolean value true if array contains other data types than Number in it.
 *
 * @param {number[]} numbers The array to check 
 * @returns {boolean} 
 */
function containsOtherDataTypes(numbers) {
    let newArr = [...numbers]
    
    for (let i = 0; i < newArr.length; i++) {
        if (typeof newArr[i] != 'number') {
            return true
        }
    }
    return false
}


/**
 * Returns the maximum number of the array.
 *
 * @param {number[]} numbers
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number}
 */
function maximum(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError(argNotArray)
    } else if (numbers.length < 1) {
        throw new Error(noElementsInArray)
    } else if (containsOtherDataTypes(numbers)) {
        throw new TypeError(containsNotJustNumbers)
    }

    let newArr = [...numbers]
    newArr.sort((a, b) => a - b)

    return newArr[newArr.length-1]
}


/**
 * Returns the mean value of the array.
 *
 * @param {number[]} numbers
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number}
 */
function mean(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError(argNotArray)
    } else if (numbers.length < 1) {
        throw new Error(noElementsInArray)
    } else if (containsOtherDataTypes(numbers)) {
        throw new TypeError(containsNotJustNumbers)
    }

    let newArr = [...numbers]
    let total = 0

    for (let i = 0; i < newArr.length; i++) {
        total += newArr[i]
    }
    
    return total / newArr.length
}


/**
 * Returns the median value of the array.
 *
 * @param {number[]} numbers
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number}
 */
function median(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError(argNotArray)
    } else if (numbers.length < 1) {
        throw new Error(noElementsInArray)
    } else if (containsOtherDataTypes(numbers)) {
        throw new TypeError(containsNotJustNumbers)
    }

    let newArr = [...numbers]
    newArr.sort((a, b) => a - b)

    if (newArr.length % 2 === 0) {
        for (let i = 0; i < newArr.length; i++) {
            if (newArr.length > 2) {
                newArr.pop()
                newArr.shift()
            }
        }
        return (newArr[0] + newArr[1]) / 2
    } else {
        for (let i = 0; i < newArr.length; i++) {
            if (newArr.length > 1) {
                newArr.pop()
                newArr.shift()
            }
        }
        return newArr[0]
    }
}


/**
 * Returns the minimum value of the array.
 *
 * @param {number[]} numbers
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number}
 */
function minimum(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError(argNotArray)
    } else if (numbers.length < 1) {
        throw new Error(noElementsInArray)
    } else if (containsOtherDataTypes(numbers)) {
        throw new TypeError(containsNotJustNumbers)
    }

    let newArr = [...numbers]
    newArr.sort((a, b) => a - b)

    return newArr[0]
}


/**
 * Returns the mode value(s) of the array.
 *
 * @param {number[]} numbers
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {Array<Number>} Array of results for the mode values.
 */
function mode(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError(argNotArray)
    } else if (numbers.length < 1) {
        throw new Error(noElementsInArray)
    } else if (containsOtherDataTypes(numbers)) {
        throw new TypeError(containsNotJustNumbers)
    }

    let newArr = [...numbers]
    let arrObj = []

    for (let i = 0; i < newArr.length; i++) {
        let count = 0

        for (let d = 0; d < newArr.length; d++) {
            if (newArr[d] === newArr[i]) {
                count++
            }
        }
        arrObj.push({n: newArr[i], c: count})
    }

    arrObj.sort((a, b) => a.c - b.c)
    arrObj.reverse()

    let largestCount = arrObj[0].c
    let results = []

    for (let i = 0; i < arrObj.length; i++) {
        if (largestCount === arrObj[i].c) {
            if (!results.includes(arrObj[i].n)) {
                results.push(arrObj[i].n)
            }
        }
    }
    
    return results.sort((a, b) => a - b)
}


/**
 * Returns the range value of the array. Subtracts the maximum with the minimum.
 *
 * @param {number[]} numbers
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number}
 */
function range(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError(argNotArray)
    } else if (numbers.length < 1) {
        throw new Error(noElementsInArray)
    } else if (containsOtherDataTypes(numbers)) {
        throw new TypeError(containsNotJustNumbers)
    }

    let newArr = [...numbers]

    return maximum(newArr) - minimum(newArr)
}


/**
 * Returns the standard deviation value of the array.
 *
 * @param {number[]} numbers
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 * @returns {number}
 */
function standardDeviation(numbers) {
    if (!Array.isArray(numbers)) {
        throw new TypeError(argNotArray)
    } else if (numbers.length < 1) {
        throw new Error(noElementsInArray)
    } else if (containsOtherDataTypes(numbers)) {
        throw new TypeError(containsNotJustNumbers)
    }
    
    let newArr = [...numbers]
    let total = 0

    for (let i = 0; i < newArr.length; i++) {
        total += Math.pow(newArr[i] - mean(newArr), 2)
    }

    return Math.sqrt(total / newArr.length)
}


// Exports
exports.descriptiveStatistics = descriptiveStatistics
exports.maximum = maximum
exports.mean = mean
exports.median = median
exports.minimum = minimum
exports.mode = mode
exports.range = range
exports.standardDeviation = standardDeviation
