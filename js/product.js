const params = new URLSearchParams(window.location.search);
console.log(params);
const id = params.get("id");
console.log(id);
const productContainer = document.querySelector("#productContainer");
fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
  .then((response) => response.json())
  .then((data) => {
    productContainer.innerHTML = ` <article class="product">
        <div class="product-img">
          <img src="https://kea-alt-del.dk/t7/images/webp/640/${id}.webp" alt="" />
        </div>
        <div class="product-info">
          <h1>Product Information</h1>
          <h3>Model Name</h3>
          <p>Product Description</p>
          <h3>Color</h3>
          <p>Red</p>
          <h3>Inventory Number</h3>
          <p>1234</p>
          <div>
            <h2>Puma</h2>
            <p>Brand Description</p>
          </div>
        </div>
        <div class="product-purchase">
          <h2>Blablabla</h2>
          <p>Puma | ${data.articletype}</p>
          <div>
            <p>Choose a size</p>
            <select>
              <option value="small">Small</option>
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
            <button class="buybutton">Add to basket</button>
          </div>
        </div>
      </article>`;
  });
