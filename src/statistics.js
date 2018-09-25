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
 * Throws Error/TypeError when one of the statements is not true.
 *
 * @param {number[]} array The set of data to be analyzed.
 * @throws {TypeError} The passed argument is not an array.
 * @throws {Error} The passed array contains no elements.
 * @throws {TypeError} The passed array contains not just numbers.
 */
function checkArray(array) {
    if (!Array.isArray(array)) {
        throw new TypeError('The passed argument is not an array.')
    } else if (array.length < 1) {
        throw new Error('The passed array contains no elements.')
    } else if (containsOtherDataTypes(array)) {
        throw new TypeError('The passed array contains not just numbers.')
    }
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
    // Call checkArray() with the argument numbers to do the check
    checkArray(numbers)

    let newArr = [...numbers]
    newArr.sort((a, b) => a - b)

    // Returning the last value on the index, subtracts with -1 to match index
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
    checkArray(numbers)

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
    checkArray(numbers)

    let newArr = [...numbers]
    newArr.sort((a, b) => a - b)

    // Check if the array is even or odd
    if (newArr.length % 2 === 0) {
        for (let i = 0; i < newArr.length; i++) {

            // If the array length is more than two, then it needs to remove the last and first element again to the array.
            if (newArr.length > 2) {
                newArr.pop()
                newArr.shift()
            }
        }

        // Adding the last two of the array and dividing it by two to get the median.
        return (newArr[0] + newArr[1]) / 2
    } else {
        for (let i = 0; i < newArr.length; i++) {

            // If it's more than one it must be three because it's a odd array. Then we remove the last and first element to get the median.
            if (newArr.length > 1) {
                newArr.pop()
                newArr.shift()
            }
        }

        // Returning the first (only) element of the array.
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
    checkArray(numbers)

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
    checkArray(numbers)

    let newArr = [...numbers]
    let arrObj = []

    for (let i = 0; i < newArr.length; i++) {
        let count = 0

        // Increment count everytime the element matches the other element the second for loop is going through.
        for (let d = 0; d < newArr.length; d++) {
            if (newArr[d] === newArr[i]) {
                count++
            }
        }

        // Push the elements into a array of objects.
        arrObj.push({n: newArr[i], c: count})
    }

    arrObj.sort((a, b) => a.c - b.c)

    // Reverse the count sorting order to largest to smallest to easely get the largest object count number.
    arrObj.reverse()

    let largestCount = arrObj[0].c
    let results = []

    for (let i = 0; i < arrObj.length; i++) {
        if (largestCount === arrObj[i].c) {
            
            // Check if the value is not already included in the array and do a push (add) to the array otherwise.
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
    checkArray(numbers)

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
    checkArray(numbers)
    
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
