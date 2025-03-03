 function car(color,model,name){
    this.color=color,
    this.model=model,
    this.name=name
}

const mycar= new car('red',2020,'maruti')
const yourcar= new car('blue',2022,'BMW')

console.log(mycar.color)