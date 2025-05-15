const cart = [];
function addToCart(name, price) {
  cart.push({ name, price });
  renderCart();
}
function removeFromCart(index) {
  cart.splice(index, 1);
  renderCart();
}
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} - €${item.price.toFixed(2)} <button class="remove-btn" onclick="removeFromCart(${index})">Remover</button>`;
    cartItems.appendChild(li);
    total += item.price;
  });
  cartTotal.textContent = total.toFixed(2);
}
function submitOrder(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  const address = document.getElementById('address').value;
  const payment = document.getElementById('payment-method').value;
  if (cart.length === 0) {
    alert('O carrinho está vazio!');
    return;
  }
  document.getElementById('confirmation').textContent = `Obrigado, ${name}! A sua encomenda será enviada para ${address}. Método de pagamento: ${payment}.`;
}
