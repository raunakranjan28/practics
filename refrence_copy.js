let Person={
    name:'raunak',
    age:20,
    details:{
        height:182,
        weight:60
    }
}

let obj1=Person
console.log(obj1.details.height)
delete obj1.name
console.log(obj1.name)