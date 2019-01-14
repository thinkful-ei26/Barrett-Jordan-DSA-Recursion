// write a function that takes an array as input 
//which contains an unknown set of numbers, 
//and outputs an array with each input value doubled. 
//Test your solution by trying a handful of different arrays. For example,

// Input: [1, 2, 3]
// Output: [2, 4, 6]
// take index 1, double and ... into new arr

// const test = [1,2,3]

// function arrayDouble(arr){
//     //base case
//     if (arr === []){
//         return [];
//     }

//     arr.forEach(num => {
//         console.log(num * 2)
//     });
// } 

// arrayDouble(test)

// const test = [1,2,3]

function arrayDouble(arr){
    //base case
    if (arr.length === 0){
        return [];
    }

    const newArr = arr[0] * 2;

    return [newArr, ...arrayDouble(arr.slice(1))]

} 
console.log(arrayDouble([1, 2, 3]))
arrayDouble([1, 2, 3]);


