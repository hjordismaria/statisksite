const categoryContainer = document.querySelector("#categorylist");

const categories = ["Accessories", "Apparel", "Footwear", "Free Items", "Personal Care", "Sporting Goods"];

// categories.forEach((category) => {
//   categoryContainer.innerHTML += `<a href="productlist.html">${category}</a>`;
// });

// console.log("category: ", categories[3]);

fetch("https://kea-alt-del.dk/t7/api/categories")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((category) => {
      categoryContainer.innerHTML += `<a href="productlist.html">${category.category}</a>`;
    });
  });
