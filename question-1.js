// Question #1
const myTodo = [
  { id: 1, todo: "Buy groceries" },
  { id: 2, todo: "Finish homework" },
  { id: 3, todo: "Call mom" },
  { id: 4, todo: "Wash dishes" },
];
// เริ่มเขียนโค้ดตรงนี้
const addId5Mission = {
  id: 5, todo: "Walk the dog"
}

myTodo.push(addId5Mission);
let idIndex = 4;
myTodo[idIndex-1].todo = "Go to the gym"
myTodo.pop();

console.log(`To-do id: ${myTodo.length}, ${myTodo[myTodo.length-1].todo}`);
