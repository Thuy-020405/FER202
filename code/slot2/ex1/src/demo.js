const x =5;
//console.log("The value of x is:", x);
console.log(`The value of x is: ${x}`);
//kiểm tra x có phải số âm hay số dương
if (x >= 0) {
    console.log(`${x} là số dương`);
} else {
    console.log(`${x} là số âm`);
}

//có 2 tham số nhập vào tên tuổi và in ra
const printNameAge = (name, age) => {
    console.log(`Tên tôi là ${name}, tôi ${age} tuổi`);
}
printNameAge("dinh thuy", 20);

//viết arrow function có 2 tham số nhập vào tên tuổi và in ra, viết hàm greet
const greet = (name, age) => {
    return `Xin chào, tôi là ${name}, tôi ${age} tuổi`;
}
console.log(greet("dinh thuy", 20));

// mặc định tuổi = 18
const greetWithDefaultAge = (name, age = 18) => {
    return `Xin chào, tôi là ${name}, tôi ${age} tuổi`;
}
console.log(greetWithDefaultAge("dinh thuy"));

//viết hàm tính bình phương cua một số x
const square = (x) => {
    return x * x;
}
console.log(`Bình phương của ${x} là ${square(x)}`);

// ...existing code...
//viết hàm in 1 dôi tượng student gồm các thuộc tính: id, name, age, grade
const printStudentInfo = (student) => {
    console.log(`ID: ${student.id}`);
    console.log(`Tên: ${student.name}`);
    console.log(`Tuổi: ${student.age}`);
    console.log(`Điểm: ${student.grade}`);
}
const student = {id: 1, name: "dinh thuy", age: 20, grade: 8.5};
printStudentInfo(student);

// khai báo 1 list student và gọi hàm printStudent cho từng student trong list 
const students = [
    {id: 1, name: "dinh thuy", age: 20, grade: 8.5},
    {id: 2, name: "nguyen van a", age: 21, grade: 7.5},    
    {id: 3, name: "tran thi b", age: 19, grade: 9.0}
];
students.forEach(student => printStudentInfo(student));
// cách khác dùng hàm map
students.map(student => printStudentInfo(student));
//sử dụng destructuring để lấy các thuộc tính của student
const printStudentInfoDestructuring = (student) => {
    const {id, name, age, grade} = student;
    console.log(`ID: ${id}`);   
    console.log(`Tên: ${name}`);
    console.log(`Tuổi: ${age}`);
    console.log(`Điểm: ${grade}`);
}
printStudentInfoDestructuring(student);
//dùng rest operator đê lấy phần còn lại của mảng student
const printStudentInfoRest = (student) => {
    const {id, name, ...rest} = student;
    console.log(`ID: ${id}`);
    console.log(`Tên: ${name}`);
    console.log(`Các thuộc tính còn lại: ${JSON.stringify(rest)}`);
}
printStudentInfoRest(student);
//thêm 1 student mới vào restStudent sử dụng spread operator
const newStudent = {id: 4, name: "le van c", age: 22, grade: 8.0};
const restStudent = {...student, ...newStudent};
console.log(`Student sau khi thêm: ${JSON.stringify(restStudent)}`);

