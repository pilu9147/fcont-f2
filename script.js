/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((stud)=>{
    if(stud.marks > 50){
      console.log(stud);
    }
  })
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
   
  arr.forEach((stud)=>{
    if(stud.marks > 50){
      console.log(stud);
    }
  })
    
}

function addData() {
  //Write your code here, just console.log
  let stud = {
    id:4,
    name:"susan",
    age:"20",
    marks:45
  }
  arr.push(stud);
  console.log(arr);
}


function removeFailedStudent() {
  //Write your code here, just console.log
  let res = arr.filter((student)=>{
    if(student.marks < 50){
      return false;
    }else{
      return true;
    }
  })
  console.log(res);
}

function concatenateArray() {
  //Write your code here, just console.log
  let arr1 = [
    { id: 5, name: "wickjhon", age: "22", marks: 45 },
    { id: 6, name: "jacksparrow", age: "25", marks: 95 },
    { id: 7, name: "pilu", age: "26", marks: 75},
  ];
  let ans = arr.concat(arr1);
  console.log(ans)
}