class Car {
    constructor(model,make,year,costmin,costmax){
        this.model = model,
        this.make = make,
        this.year = year,
        this.age = this.ageCar(year),
        this.cost = this.random_cost(costmin,costmax)
    }

    ageCar(year){
        return 2023 -year;
    }
    random_cost(costmin,costmax) {
        return (costmin + (costmax-costmin)*Math.random());
    }
    get_Description(){
        return `A ${this.model} made by ${this.make} at ${this.year} its age ${this.age} and its cost ${this.cost}`;
    }
}

    car1 = new Car("Camry","Toyota","2000",10000,15000);

    console.log(car1.get_Description());

//////////////////////////////////////////////////////////////
const counterFunc=(counter)=>counter> 100 ? 0 :counter++ ;
 console.log(counterFunc(105))

//  counterFunc=(counter)=> {
//     if (counter > 100) {
//       counter = 0;
//     }else {
//       counter++;
//     }
    
//     return counter;
//   }
  
   nameAge=(name, age)=> {
    console.log("Hello " + name);
    console.log("You are " + age + " years old");
  }

  nameAge("karam ",26);


  /////////////////////////////////////////////

  /// •	Rewrite the following three functions as arrow functions. Make sure to assign them to a const identifier

   const createFullName = (firstName, lastName) => {
        return firstName + " " + lastName;
  }
  
  const doubleNumber = (number)=> {
        return number * 2;
  }
  
  const getEvenNumbers = (array)=> {
    let evenNumbers = [];
        for (let i of array) {
            if (i % 2 === 0) {
            evenNumbers.push(i);
      }
    }
    return evenNumbers;
  }
  
//////////////////////////////////////////////////
// •	Rewrite the following if condition to arrow notation:

const karam = ()=>{
    if (1<2){ 
        for (let index = 0; index < 5; index++) 
        {
         console.log("hi");
         }
         } else{ 
        console.log("bye"); 
        }
}
karam()

//////////////////////////////////////////////// 
    // ** Arrow function

    // let nums = [2, 4, 5];
    // const sum= nums.reduce((acc,cur)=>acc+cur**2,0)/nums.length
    // console.log(sum);

///////////////////////////////////////////

// •	Square and sum the elements of this array using arrow functions and in 1 line of code. Then find the average of the array


  
let nums = [2, 4, 5];

const sum = nums.reduce((a, b) => a + b**2, 0);

const avg = (sum / nums.length) || 0;

console.log(`The sum is: ${sum}. The average is: ${avg}.`);

///////////////////////////////////////
// •	Use the map() function with arrow notation => to multiply each by 10 and return the result number of following array

// ** Map fun

let list=[1,2,3,4,5,6,7,8];

let arr=list.map(e=>e*10);
console.log(arr);

///////////////////////////////////////////

 // •	Make an array of strings of the names saying whether or not they can go to The Matrix


 rrr= [{  name: "Angelina Jolie",
 age: 80   },
{   name: "Eric Jones",
 age: 2
},
{   name: "Paris Hilton",
 age: 5
},
{   name: "Kayne West",
 age: 16
},
{   name: "Bob Ziroll",
 age: 100
}
];
 function makeStrings(arr) {
      

   let x= arr.map(person => {
console.log(person.age,"person age");
      if (person.age < 18) {
        return `${person.name} is under age and cannot go to The Matrix.`;
      } 
      else {
        return `${person.name} can go to The Matrix.`;
      }
    });
    return x
  }
  console.log(makeStrings(rrr));





 ///////////////////////////////////////////////

 //•	Using Reduce 

 var persons = [
    { name: { first: 'John', last: 'Hob' }, age: 35 },
    { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
    { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
    { name: { first: 'Zues', last: 'Odin' }, age: 55 },
    { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
  ];

 function avgAge (array){
    let Age = array.reduce((acc , cur )=>{
        return acc + cur.age ;
    },0)
     return Age/array.length;

 }
console.log(avgAge(persons));

///////////////////////////////////////////////////

// •	Using Filter

let evenOnly = [1,8,6,4];
  const newEven = evenOnly.filter(e => e % 2 == 0);
  console.log(newEven);



