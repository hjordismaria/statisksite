// const params = new URLSearchParams(window.location.search);
// console.log(params);
// const id = params.get("id");
// console.log(id);

// fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.price);

//     const productContainer = document.querySelector("#productContainer");
//     console.log(data.category);

//     productContainer.innerHTML = `
//     <figure>
//         <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="Product Image" class="productImage" />
//         <span class="${data.discount ? "discount" : ""}">Udsalg!</span>
//       </figure>

//     <section class="productDetails">
//         <div class="productInfo">
//           <h2 class="productnameInfo">Product Information</h2>

//           <p class="productModelName"><span class="bold">Model name</span>${data.productdisplayname}</p>

//           <p class="productBrand"><span class="bold">Brand</span>${data.brandname}</p>

//           <p class="productNumber"><span class="bold">Inventory number</span>1163</p>
//         </div>

//         <div class="purchaseArea">
//           <h2 class="productName">${data.productdisplayname}</h2>

//           <div class="productMeta">
//             <p class="articleType"><span class="bold">Type</span>${data.articletype}</p>
//             <p class="productCategory"><span class="bold">Category</span>${data.category}</p>
//              <div class="price-box">
//           <p class="price">DKK
//             <span class="old-price">${data.price}</span>,-
//           </p>
//           <p class="new-price">Now DKK <span>${Math.ceil((data.price / 100) * data.discount)}</span>,-</p>

//         </div>

//             <p>Choose a size</p>
//             <select>
//               <option value="small">Small</option>
//               <option value="medium">Medium</option>
//               <option value="large">Large</option>
//             </select>
//           </div>

//           <button class="buyButton">Buy Now</button>
//         </div>
//     </section>`;
//   });

// "use strict";
const params = new URLSearchParams(window.location.search);
console.log(params);

const id = params.get("id");
console.log(id);

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data.price);

    const productContainer = document.querySelector("#productContainer");
    console.log(data.category);

    productContainer.innerHTML = `
    <figure class="img-box">
        ${data.discount ? `<span class="discount-tag">-${data.discount}%</span>` : ""}
        <img src="https://kea-alt-del.dk/t7/images/webp/640/${data.id}.webp" alt="Product Image" class="productImage" />
    </figure>

    <section class="productDetails">
        <div class="productInfo">
          <h2 class="productnameInfo">Product Information</h2>

          <p class="productModelName"><span class="bold">Model name</span> ${data.productdisplayname}</p>

          <p class="productBrand"><span class="bold">Brand</span> ${data.brandname}</p>

          <p class="productNumber"><span class="bold">Inventory number</span> ${data.id}</p>
        </div>

        <div class="purchaseArea ${data.discount ? "discounted" : ""}">
          <h2 class="productName">${data.productdisplayname}</h2>

          <div class="productMeta">
            <p class="articleType"><span class="bold">Type</span> ${data.articletype}</p>
            <p class="productCategory"><span class="bold">Category</span> ${data.category}</p>

            <div class="price-box">
              <p class="price">
              <span class="${data.discount ? "old-price" : ""}">DKK ${data.price},-</span></p>

              ${
                data.discount
                  ? `<p class="new-price">
                <span>Now DKK ${Math.round(data.price - (data.price * data.discount) / 100)},-</span>
                </p>`
                  : ""
              }
            </div>

            <p>Choose a size</p>
            <select>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </div>

          <button class="buyButton">Buy Now</button>
        </div>
    </section>`;
  });
