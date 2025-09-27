document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartCountElement = document.getElementById('cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const card = event.target.closest('.product-card');
            const product = {
                id: card.dataset.id,
                name: card.dataset.name,
                price: parseFloat(card.dataset.price)
            };

            cart.push(product);
            updateCartCount();
            console.log('Cart:', cart); // For debugging: view the cart contents in the console
        });
    });

    function updateCartCount() {
        cartCountElement.textContent = cart.length;
    }
});