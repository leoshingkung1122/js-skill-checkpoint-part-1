// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;

const newItem = {
  name: "Orange",
  price: 20,
  quantity: 300
}

inventory.push(newItem);

totalResult = 0;

for (objectInList of inventory){
  totalResult += objectInList.price * objectInList.quantity; 
}

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalResult} บาท`);
