/**
 * Module for obtaining descriptive information about a set of data.
 *
 * @author Marcus Cvjeticanin
 * @version 1.1.0
 */

'use strict'

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
    // TODO: Write your code here.
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
        throw new TypeError('The passed argument is not an array.')
    } else if (numbers.length < 1) {
        throw new Error('The passed array contains no elements.')
    } else if (containsOtherDataTypes(numbers)) {
        throw new TypeError('The passed array contains not just numbers.')
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
        throw new TypeError('The passed argument is not an array.')
    } else if (numbers.length < 1) {
        throw new Error('The passed array contains no elements.')
    } else if (containsOtherDataTypes(numbers)) {
        throw new TypeError('The passed array contains not just numbers.')
    }

    let newArr = [...numbers]
    let total = 0

    for (let i = 0; i < newArr.length; i++) {
        total += newArr[i]
    }

    let sum = total / newArr.length
    
    return sum
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
        throw new TypeError('The passed argument is not an array.')
    } else if (numbers.length < 1) {
        throw new Error('The passed array contains no elements.')
    } else if (containsOtherDataTypes(numbers)) {
        throw new TypeError('The passed array contains not just numbers.')
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


// Exports
exports.descriptiveStatistics = descriptiveStatistics
exports.maximum = maximum
exports.mean = mean
exports.median = median
exports.minimum = undefined
exports.mode = undefined
exports.range = undefined
exports.standardDeviation = undefined
