//Array Find

const a = [1,2,3,8,9,10]

const arrfind =a.find(value => value > 7)

console.log("Find",arrfind)

// Array Filter

const auxArr = [1,2,3,4,5]

const arrFilter = auxArr.filter((value)=> {
    return value > 3
})

console.log("filter", arrFilter)

// Array Foreach

const auxArr2 = ["hola", "como", "estas"]

auxArr2.forEach((value, index, arr)=>console.log(value, index, arr))