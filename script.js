import { products } from './data.js';

const container = document.getElementById('product-container');
const teamFilter = document.getElementById('teamFilter');
const sizeSelect = document.getElementById('sizeSelect');

function render(list) {
  container.innerHTML = '';

  list.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'card';

    const discounted = Math.round(
      product.price - (product.price * product.discount) / 100
    );

    card.innerHTML = `

${product.new ? '<span class="badge">New Season</span>' : ''}

<img src="${product.image}">

<h3>${product.name}</h3>

<p>Rating: ${product.rating} ⭐</p>

<p>Team: ${product.team}</p>

<p>Size: ${sizeSelect.value}</p>

<p class="old">₹${product.price}</p>

<p class="new">₹${discounted}</p>

<button>Add to Cart</button>

`;

    container.appendChild(card);
  });
}

render(products);

teamFilter.addEventListener('change', () => {
  const value = teamFilter.value;

  if (value === 'all') {
    render(products);
  } else {
    const filtered = products.filter((p) => p.team === value);
    render(filtered);
  }
});

sizeSelect.addEventListener('change', () => {
  render(products);
});
