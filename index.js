function findMinAndRemove(array){
    let i = 0
    let min = array[i]
    let storedI
    while (i < array.length) {
        if (array[i] < min) {
            min = array[i]
            storedI = i
        }
        i++
    }
    array.splice(storedI, 1)
    return min
}

function insertionSort(array){
    let result = []

    while (array.length > 0) {
        result.push(findMinAndRemove(array))
    }
    
    return result
}
