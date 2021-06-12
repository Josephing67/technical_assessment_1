
/* 3
----Write a function called addIngridients that takes in the name of
----the ingredient and an array to store it in.
----Please be sure to not let the same ingredient be added on twice.
*/
// Please write your code here

// 1
let ingredient = ["Beets","Carrots","Cabbage"];

function addIngridients() {
    for(let i = 0;i < ingredient.length; i++);
    ingredient.push("Reddish");
    console.log(ingredient)
}
addIngridients()

// 2
function addIngridients() {
  let ingredient = ["Beets", "Carrots", "Cabbage"];
  ingredient.push("Radish");
  return ingredient;
}



/* 4
----Write a function called formatPrice that takes in a price
----and returns a '$' in front of the price passed in
*/

// Please write your code here

function formatPrice(price) {
  console.log("$ " + price);
}

formatPrice(5);









/* 6
----Write a function called decreasePrice that takes in a price
----and returns a price with a 10% reduction
*/

// Please write your code here

function formatPrice(price, decrease, subtract) {
  decrease = price / 10;
  subtract = price - decrease;
  console.log(subtract);
}

formatPrice(18.40);




/* 1
----Write a function called takeOrder that takes in a order and an orderArray
----your function should add to the ordersArray
----ordersArray should not be able to hold more than three orders at a time
*/

// Please write your code here

const orderArray = ["Beets", "Carrots", "Cabbage"];
orderArray.length = 2;

function takeOrder() {
  orderArray.push("Radish");
  console.log(orderArray + "\nHi, your order is limited to three items at a time."
  );
}
takeOrder();





/* 2
----Write a function called refundOrder that takes in a orderNumber and an array of orders
----Your function should remove the order from the array of orders simply by the orderNumber
*/

// Please write your code here







/* 3
----Write a function called addIngridients that takes in the name of
----the ingredient and an array to store it in.
----Please be sure to not let the same ingredient be added on twice.
*/
// Please write your code here

const ingredients = [];
const ingredientsNotAddTwice = [...new Set(ingredients)];

function addIngridients(ingredient) {
  ingredients.push(ingredient);
  console.log(ingredientsNotAddTwice);
}

addIngridients("Beets");
console.log(ingredients);
addIngridients("Radish");
console.log(ingredients);
addIngridients("Beets");
console.log(ingredients);
console.log(ingredientsNotAddTwice);







/* 4
----Write a function called listItems that takes in array of orders and
----lists out all of the order items by name
----HINT: please console log the array that is being passed into listItems
----I Have started out this code for you, just uncomment and continue working
*/


// Please write your code here

// function listItems(arr){
// }






/* 5
----Write a function called searchOrder that takes in array of orders and
----a item. Your function should output if the item is included in the array of orders or not
*/

storeItems = {
  [Order:  "Dog"];
  [Order1: "Cat"];
  [Order2: "Snake"];
};

function searchOrder() {
  
}