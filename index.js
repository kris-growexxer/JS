let a=20;
console.log(a);

a=1.20;
console.log(a);


const isBool=true;

const obj={
    name:"Kris",
    empId:1073
}

console.log(obj.name);

const arr=[1,2,3,4];

console.log(arr);


console.log(obj.__proto__);

console.log(arr.__proto__.__proto__)



const liabrary=[

    {
        title:"The Book 1",
        author: "Author 1",
        status:{
            own:true,
            reading:true,
            read:false     
        }
    },
    {
        title:"The Book 2",
        author: "Author 2",
        status:{
            own:true,
            reading:true,
            read:false     
        }
    },
    {
        title:"The Book 2",
        author: "Author 2",
        status:{
            own:true,
            reading:true,
            read:false     
        }
    }
]

//this is destructuring the Object

const {title:nameOfBook} =liabrary[0];

console.log(nameOfBook);

//
const jsonObj1=JSON.stringify(liabrary);
console.log(jsonObj1);

let x=20;
console.log(x);
{
    let x=10;
    console.log(x);
}
console.log(x);


var z=20;
console.log(x);
{
    var z=10;
    console.log(x);
}
console.log(x);

var z=20;


const clickme=()=>{
    return function clickEvent(){
        clickCnt++;
        console.log(clickCnt); }
    }
    let clickCnt=0;

const clickApi=clickme();
clickApi();
clickApi();
clickApi();
clickApi();
clickApi();

const meta=()=>console.log("Meta Function Access!!");

meta();

var z=function(){
    console.log("Z function is Invoked!!");
}
z();


// a=false;
// console.log(a||0||20);

// a ||= 10;
// console.log(a);
// a ||= 0;

// console.log(a);

let newArr=[1,2,3,4,5];

for (let item in newArr){
    console.log(item);
}