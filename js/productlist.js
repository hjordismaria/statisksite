// "use strict";
const params = new URLSearchParams(window.location.search);

const category = params.get("category");
console.log("CATEGORY", category);
const productContainer = document.querySelector("main");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}&limit=50`)
  .then((response) => response.json())
  .then((data) => {
    showProducts(data);
  });

function showProducts(productsArr) {
  // console.log("productsArr", productsArr);
  productContainer.innerHTML = "";
  productsArr.forEach((product) => {
    console.log("product: ", product.id);

    if (product.soldout) {
      console.log("product status: udsolgt");
    } else {
      console.log("product status: på lager");
    }

    product.soldout ? console.log("product status: udsolgt") : console.log("product status: på lager");

    productContainer.innerHTML += `<article class="product-box ${product.soldout ? "soldout" : ""} ${product.discount ? "discounted" : ""}">
        <div class="img-box">
        ${product.discount ? `<span class='discount-tag'>-${product.discount}%</span>` : ""}
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp" alt="" />
        </div>
        <strong><h3 class="product-title">${product.productdisplayname}</h3></strong>
        <p class="category-title">${product.articletype} | ${product.brandname}</p>
        <div class="price-box">
          <p class="price">
            <span class="old-price">DKK ${product.price},-</span>
          </p>
          <p class="new-price"><span>Now DKK ${Math.ceil((product.price / 100) * product.discount)}</span>,-</p>
          <a href="product.html?id=${product.id}" class="add-to-cart">Read more</a>
        </div>
      </article>
   `;
  });
}
