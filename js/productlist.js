"use strict";

const productContainer = document.querySelector("main");

fetch("https://kea-alt-del.dk/t7/api/products")
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

function showProducts(productsArr) {
  console.log("productsArr", productsArr);
  productContainer.innerHTML = "";
  productsArr.forEach((product) => {
    console.log("product: ", product.id);

    productContainer.innerHTML += `<article class="product-box">
        <div class="img-box">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
        </div>
        <strong><h3 class="product-title">Sporty bag</h3></strong>
        <p class="category-title">${product.articletype} | ${product.brandname}</p>
        <div class="price-box">
          <p class="price">DKK 350,-</p>
          <a href="products.html?id=${product.id}" class="add-to-cart">Read more</a>
        </div>
      </article>`;
  });
}
