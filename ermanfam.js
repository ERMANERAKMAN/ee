// let  mama= ['name','age','sex','from'];
// mama[0]= ' melek';
// console.log(mama[0]);

// let obj = {
//     name: 'melek',
//     sex: 'female',
//     age: 59,

//     printMama() {
//         console.log(this.mama[0])
//         console.log(this.mama[1])
//         console.log(this.mama[2])
//         console.log(this.mama[3])
//     },
//     baba: ['melih','60','male','istanbul'],
//     printBaba() {
//         console.log(this.baba[0])
//         console.log(this.baba[1])
//         console.log(this.baba[2])
//         console.log(this.baba[3])
//     }

// }
// obj.printMama();
// obj.printBaba();

// let name = 'erman'
// let number = 5
// let obj = {
//      pet: 'odin',
// }
// let asd= [1,2,3,4];


// let firstObj = {name: 'erman'};
// let secondObj = firstObj;
// console.log(secondObj)
// secondObj.name = 'ersin';

// console.log(firstObj);

// let myAge = 15;
// let esraAge = myAge;
// esraAge = 23;

// esraAge += 'esranınyasi';
// console.log(esraAger);




//---------FUNCTIONS-----------

//named function
//function myFunction(firstName, secondName) {
  //  const fullName = firstName + ' ' + secondName;
    //console.log(fullName);
    //return fullName;
//};


//const esraName = myFunction('esra');

//console.log(myFunction('erman', 'erakman'));


//console.log(myFunction());

//function arrFuction(a,b){
  //  let x = a+b;
    //if (x>0) {
      //  x=a;
    //} else {
      //  x=b;
    //}
    //return x;
//};

//console.log(arrFuction(-6,4));

function erman(x,y,z){
    let w = x+y+z;
    return w;
};
    let x = [1,2,3];
    let y = [4,5,6];
    let z = [7,8,9];
console.log(erman(x[0],y[2],z[1]));
