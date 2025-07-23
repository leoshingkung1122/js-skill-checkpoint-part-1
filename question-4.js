// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
	{ name: "Banana", price: 10, quantity: 50 },
	{ name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let minQuantity = inventory[0].quantity;
let productMinQuantity = inventory[0].name;

for (let objectInList of inventory) {
  if (objectInList.quantity < minQuantity) {
    minQuantity = objectInList.quantity;
    productMinQuantity = objectInList.name;
  }
}

console.log(`สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${productMinQuantity} ซึ่งมี ${minQuantity} ชิ้น`)
