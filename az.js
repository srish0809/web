// var student={age:20};
// var Student=function(){
//     return this.age;
// };
// console.log(Student.bind(student));

let student=function(age){
    console.log(age);
}
let printage=student.bind(this,20);
printage();