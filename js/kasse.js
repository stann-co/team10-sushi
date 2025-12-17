// Tilføjer vare til kurv
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existing = cart.find(item => item.name === name);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ name, price, qty: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + ' tilføjet til kurven');
}



// Henter kurv fra localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const cartItemsEl = document.getElementById('cartItems');
    const cartTotalEl = document.getElementById('cartTotal');

    function renderCart() {
      cartItemsEl.innerHTML = '';
      let total = 0;

      if (cart.length === 0) {
        cartItemsEl.innerHTML = '<p>Din kurv er tom</p>';
      }

      cart.forEach(item => {
        total += item.price * item.qty;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
          <span>${item.name}</span>
          <div>
            <button onclick="updateQty('${item.name}', -1)">−</button>
            <span> ${item.qty} </span>
            <button onclick="updateQty('${item.name}', 1)">+</button>
          </div>
          <span>${item.price * item.qty} kr.</span>
        `;
        cartItemsEl.appendChild(div);
      });

      cartTotalEl.textContent = `Total: ${total} kr.`;
    }

    renderCart();

    function updateQty(name, change) {
      cart = cart
        .map(item => {
          if (item.name === name) {
            return { ...item, qty: item.qty + change };
          }
          return item;
        })
        .filter(item => item.qty > 0);

      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart();
    }


    document.getElementById('orderForm').addEventListener('submit', e => {
      e.preventDefault();
      alert('Tak for din bestilling hos May\'c\'s!');
      localStorage.removeItem('cart');
      renderCart();
    });