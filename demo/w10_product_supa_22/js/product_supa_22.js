import { _supabase } from './clientSupabase.js';

const productContainer = document.querySelector('.products-container');

let products_22 = [];

const fetchProducts = async () => {
  try {
    let { data, error } = await _supabase.from('product_22').select('*');
    console.log('data', data);
    return data;
  } catch (err) {
    console.log(err);
  }
};
const displayProducts = (products) => {
  let productsContent = products
    .map((product) => {
      const { id, name, price, remote_img } = product;
      return `
        <div class="single-product">
        <img
          src=${remote_img}
          class="single-product-img img"
          alt=${name}
        />
        <footer>
          <h3 class="name">${id}-${name}</h3>
          <span class="price">$${price}</span>
        </footer>
      </div>
    `;
    })
    .join('');
  productContainer.innerHTML = productsContent;
};

document.addEventListener('DOMContentLoaded', async () => {
  products_22 = await fetchProducts();
  displayProducts(products_22);
});

