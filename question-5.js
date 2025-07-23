// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "";
// เริ่มเขียนโค้ดตรงนี้

function calculateTotalPrice(product,promotion) {
  let totalPrice = 0;
  let discount = 0;

  for (let item of product) {
    totalPrice += item.price * item.quantity
  }

  if (promotion === "SALE20") {
    discount = totalPrice*0.2;
  } else if (promotion === "SALE50") {
    discount = totalPrice*0.5;
  } else {
    discount = 0;
  }
  
  return totalPrice - discount;
}

console.log(calculateTotalPrice(products,""));
console.log(calculateTotalPrice(products,"SALE20"));
console.log(calculateTotalPrice(products,"SALE50"));


