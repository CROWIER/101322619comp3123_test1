//q1
const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']
function lowerCaseWords(array){
    let promise = new Promise(function (resolve, reject) {
        for (let i = 0; i<array.length; i++){
            if (typeof array[i] != 'string' ){
                array.splice(i, 1)
                i--
            }
            else {
                (array[i] = array[i].toLowerCase())
            }
        }
        if (array.length != 0) {
            resolve(array)
        }
        else {
            reject("array is empty")
        }
    })
    return promise
}
console.log(lowerCaseWords(mixedArray));
