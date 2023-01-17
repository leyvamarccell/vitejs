let array = [1, 2, 3, 4, 5]

//Map
const map = array.map(num => num * 2)
console.log(map)

//Filter
const filter = array.filter(num => num % 2 === 0)
console.log(filter)

//forEach
array.forEach((num, index) => {
    console.log(num)
    console.log(index)
})

//At 
console.log(array.at(0))

//splice 
const splice = array.splice(0, 2)
console.log(splice)