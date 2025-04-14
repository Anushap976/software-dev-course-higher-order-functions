/*
===========================================
🛒 Higher-Order Functions: Product Utilities
===========================================

🎯 Objective:
Students will create and work with higher-order functions to transform and manipulate data.

They will:
- Write higher-order functions that accept callbacks to apply transformations dynamically
- Practice returning functions from higher-order functions for reusable, customizable utilities
- Gain experience using `map`, `filter`, and `reduce` to perform practical data transformations
*/

// ============================================
// 📦 Starting Dataset: Product List
// ============================================

const products = [
  { name: "Laptop", price: 1000, inStock: true },
  { name: "Phone", price: 500, inStock: false },
  { name: "Tablet", price: 800, inStock: true },
  { name: "Monitor", price: 300, inStock: true },
  { name: "Keyboard", price: 100, inStock: false },
];

// ============================================
// 🔧 Tasks
// ============================================

/*
🔹 Task 1: Filter Products by Availability

Create a function `filterProducts` that accepts:
- an array of products
- a callback function

The callback should determine which products to include.
Example: filter by availability or price threshold.

Step-by-Step:
1. Define the `filterProducts` function with appropriate parameters.
2. Use the `filter()` method to apply the callback to the array.
3. Return the filtered result.
*/

function filterProducts(products, callback){
  return products.filter(callback);
}

function isAvailable(product){
  return product.instock;
}
const instockProducts = filterProducts(products, isAvailable);

// const instockProducts = filterProducts(products, (product) => product.inStock);

/*
🔹 Task 2: Transform product Names

Use `map()` to create a new array of product names in UPPERCASE.

Step-by-Step:
1. Use `map()` on the products array.
2. Extract and transform the `name` property to uppercase.
3. Store the result in a new variable.
*/

// transform product array
 function transformProductNames(products, TransCallback){
  return products.map(TransCallback);
}
// transform to uppercase 
function toUpperCaseName(product){
  return product.name.toUpperCase();
}
const uppercasedProductNames = transformProductNames(products, toUpperCaseName);

// const upperCasedProductNames = products.map(product => product.name.toUpperCase());

/*
🔹 Task 3: Generate Discounted Prices

Write a higher-order function `applyDiscount` that:
- Accepts a discount percentage
- Returns a function that takes a product and returns a discounted price

Step-by-Step:
1. Define a function `applyDiscount` that takes `discountPercent`.
2. Return a new function that takes a product object.
3. Use this returned function inside a `map()` call to apply discounts to all products.
*/

function applyDiscount(discountPercent) {
  return (product) => ({
    ...product, // spread operator to keep other properties unchanged
    discountedPrice: product.price * (1 - discountPercent / 100), // Calculate discounted price
  });
}

// Use a reusable function to get all discounted products
function getDiscountedProducts(products, discountFunction) {
  return products.map(discountFunction);
}

const twentyPercentDiscount = applyDiscount(20);
const discountedProducts = getDiscountedProducts(products, twentyPercentDiscount);



/*
🔹 Task 4: Calculate Total Inventory Value

Use `reduce()` to calculate the total value of products that are currently in stock.

Step-by-Step:
1. Use the `reduce()` method on the products array.
2. Add only the prices of products where `inStock` is true.
3. Store the total in a new variable.
*/

// Filter in-stock products
function getInStockProducts(products) {
  return products.filter(product => product.inStock);
}

// Use reduce() to calculate the total value of filtered products
function calculateTotalValue(filteredProducts) {
  return filteredProducts.reduce((total, product) => total + product.price, 0);
}

// Combine the two steps
const inStockProducts = getInStockProducts(products);
const totalInventoryValue = calculateTotalValue(inStockProducts);

// ============================================
// 🧪 Console Test Your Work
// ============================================

 console.log("Filtered products:", instockProducts);
 console.log("Uppercased names:", uppercasedProductNames);
 console.log("Discounted products:", discountedProducts);
 console.log("Total value in stock:", totalInventoryValue);
