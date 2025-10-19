
// --- 1. MENU DATA (Reused from Main Site) ---
const menuItems = [
    {
        id: 1, name: "Monggos", price: 15, availability: "Everyday", time: "9:00 AM - 1:00 PM", stock: "High", category: "Breakfast",
        imageUrl: "src/images/monggos.jpg", description: "Savory mung bean stew with garlic and shrimp, perfect with rice."
    },
    {
        id: 2, name: "Hotdog", price: 15, availability: "Everyday", time: "9:00 AM - 1:00 PM", stock: "High", category: "Breakfast",
        imageUrl: "src/images/hotdog.webp", description: "Savory mung bean stew with garlic and shrimp, perfect with rice."
    },
    {
        id: 3, name: "Ham", price: 15, availability: "Everyday", time: "9:00 AM - 1:00 PM", stock: "High", category: "Breakfast",
        imageUrl: "src/images/ham.jpg", description: "Savory mung bean stew with garlic and shrimp, perfect with rice."
    },
    {
        id: 4, name: "Ginaling", price: 15, availability: "Everyday", time: "9:00 AM - 1:00 PM", stock: "High", category: "Breakfast",
        imageUrl: "src/images/ginaling.jpeg", description: "Savory mung bean stew with garlic and shrimp, perfect with rice."
    },
    {
        id: 5, name: "Corned Beef", price: 15, availability: "Everyday", time: "9:00 AM - 1:00 PM", stock: "High", category: "Breakfast",
        imageUrl: "src/images/corned beef.webp", description: "Savory mung bean stew with garlic and shrimp, perfect with rice."
    },
    {
        id: 6, name: "Pancit", price: 15, availability: "Everyday", time: "11:00 AM - 4:00 PM", stock: "High", category: "Lunch",
        imageUrl: "src/images/pancit.jpg", description: "Stir fried noodles with vegetables, meat, and a touch of soy sauce.", ingredients: ["Ham", "Gruyère", "Bechamel", "Bread"]
    },
    {
        id: 7, name: "Otan", price: 20.00, availability: "Everyday", time: "11:00 AM - 3:00 PM", stock: "Medium", category: "Lunch",
        imageUrl: "src/images/otan.jpg", description: "Fresh Visayan vegetables sautéed with garlic and local spices.", ingredients: ["Quinoa", "Avocado", "Seasonal Veg", "Tahini", "Lemon"]
    },
    {
        id: 8, name: "Bola-Bola", price: 15, availability: "Everyday", time: "11:00 AM - 4:00 PM", stock: "High", category: "Lunch",
        imageUrl: "src/images/bola bola.jpg", description: "Stir fried noodles with vegetables, meat, and a touch of soy sauce.", ingredients: ["Ham", "Gruyère", "Bechamel", "Bread"]
    },
    {
        id: 9, name: "Talong Guisado", price: 15, availability: "Everyday", time: "11:00 AM - 4:00 PM", stock: "High", category: "Lunch",
        imageUrl: "src/images/tawng.jpg", description: "Stir fried noodles with vegetables, meat, and a touch of soy sauce.", ingredients: ["Ham", "Gruyère", "Bechamel", "Bread"]
    },
    {
        id: 10, name: "Pinirito Isda", price: 15, availability: "Everyday", time: "11:00 AM - 4:00 PM", stock: "High", category: "Lunch",
        imageUrl: "src/images/pinirito.jpeg", description: "Stir fried noodles with vegetables, meat, and a touch of soy sauce.", ingredients: ["Ham", "Gruyère", "Bechamel", "Bread"]
    },
    {
        id: 11, name: "Bihon", price: 15, availability: "Everyday", time: "11:00 AM - 4:00 PM", stock: "High", category: "Lunch",
        imageUrl: "src/images/bihon.jpg", description: "Stir fried noodles with vegetables, meat, and a touch of soy sauce.", ingredients: ["Ham", "Gruyère", "Bechamel", "Bread"]
    },
    {
        id: 12, name: "Tinuwa", price: 15, availability: "Everyday", time: "11:00 AM - 4:00 PM", stock: "High", category: "Lunch",
        imageUrl: "src/images/tinuwa.avif", description: "Stir fried noodles with vegetables, meat, and a touch of soy sauce.", ingredients: ["Ham", "Gruyère", "Bechamel", "Bread"]
    },

    {
        id: 13, name: "Guisado Baboy", price: 30, availability: "Everyday", time: "4:00 PM - 9:00 PM", stock: "High", category: "Dinner",
        imageUrl: "src/images/Guisado Baboy.jpg", description: "Tender pork sautéed with onions, garlic, and savory seasonings.", ingredients: ["Prime Beef", "Potatoes", "Carrots", "Gravy"]
    },
    {
        id: 14, name: "Nilat-an Baboy", price: 30, availability: "Everyday", time: "4:00 PM - 9:00 PM", stock: "High", category: "Dinner",
        imageUrl: "src/images/nilat an baboy.jpg", description: "Tender pork sautéed with onions, garlic, and savory seasonings.", ingredients: ["Prime Beef", "Potatoes", "Carrots", "Gravy"]
    },
    {
        id: 15, name: "Adobo Pinauga", price: 30, availability: "Everyday", time: "4:00 PM - 9:00 PM", stock: "High", category: "Dinner",
        imageUrl: "src/images/adobo pinauga.jpeg", description: "Tender pork sautéed with onions, garlic, and savory seasonings.", ingredients: ["Prime Beef", "Potatoes", "Carrots", "Gravy"]
    },
    {
        id: 16, name: "Sinabwang Bola-Bola", price: 30, availability: "Everyday", time: "4:00 PM - 9:00 PM", stock: "High", category: "Dinner",
        imageUrl: "src/images/sinabwan bola bola.jpg", description: "Tender pork sautéed with onions, garlic, and savory seasonings.", ingredients: ["Prime Beef", "Potatoes", "Carrots", "Gravy"]
    },
    {
        id: 17, name: "Paklay", price: 30, availability: "Everyday", time: "4:00 PM - 9:00 PM", stock: "High", category: "Dinner",
        imageUrl: "src/images/paklay.webp", description: "Tender pork sautéed with onions, garlic, and savory seasonings.", ingredients: ["Prime Beef", "Potatoes", "Carrots", "Gravy"]
    },
    {
        id: 18, name: "Eskabetche", price: 30, availability: "Everyday", time: "4:00 PM - 9:00 PM", stock: "High", category: "Dinner",
        imageUrl: "src/images/eskabetche.jpg", description: "Tender pork sautéed with onions, garlic, and savory seasonings.", ingredients: ["Prime Beef", "Potatoes", "Carrots", "Gravy"]
    },
    {
        id: 19, name: "Lomi", price: 30, availability: "Everyday", time: "4:00 PM - 9:00 PM", stock: "High", category: "Dinner",
        imageUrl: "src/images/lomi.jpg", description: "Tender pork sautéed with onions, garlic, and savory seasonings.", ingredients: ["Prime Beef", "Potatoes", "Carrots", "Gravy"]
    },
    {
        id: 20, name: "Tortang Talong", price: 30, availability: "Everyday", time: "4:00 PM - 9:00 PM", stock: "High", category: "Dinner",
        imageUrl: "src/images/torta talong.jpg", description: "Tender pork sautéed with onions, garlic, and savory seasonings.", ingredients: ["Prime Beef", "Potatoes", "Carrots", "Gravy"]
    },
    {
        id: 21, name: "Chopsuey", price: 30, availability: "Everyday", time: "4:00 PM - 9:00 PM", stock: "High", category: "Dinner",
        imageUrl: "src/images/chapsoy.jpg", description: "Tender pork sautéed with onions, garlic, and savory seasonings.", ingredients: ["Prime Beef", "Potatoes", "Carrots", "Gravy"]
    },
].sort((a, b) => a.category.localeCompare(b.category)); // Sort by category initially

let cart = []; // State for the shopping cart: [{ id: number, quantity: number }]

const TAX_RATE = 0.3;

// --- 2. CART MANAGEMENT FUNCTIONS ---

function updateCartUI() {
    // Target the single cart container inside the modal
    const cartContainer = document.getElementById('cart-items-container');

    let subtotal = 0;
    let totalItems = 0;

    let cartHtml = '';

    if (cart.length === 0) {
        const emptyMessage = `
                    <div class="text-center py-5 text-secondary">
                        <svg class="mx-auto" style="width: 40px; height: 40px;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5H21M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <p class="mt-2 small">Your basket is empty.</p>
                        <p class="small text-muted">Start adding dishes from the menu!</p>
                    </div>
                `;
        cartHtml = emptyMessage;
    } else {
        cart.forEach(cartItem => {
            const dish = menuItems.find(item => item.id === cartItem.id);
            if (!dish) return;

            const itemTotal = dish.price * cartItem.quantity;
            subtotal += itemTotal;
            totalItems += cartItem.quantity;

            // Updated to use text-theme for quantity controls
            cartHtml += `
                        <div class="d-flex align-items-center justify-content-between py-2 border-bottom border-light">
                            <!-- Quantity Controls -->
                            <div class="d-flex flex-column align-items-center me-3">
                                <button onclick="addToCart(${dish.id})" class="btn btn-sm text-theme p-0">
                                    <svg class="w-4 h-4" style="width: 1rem; height: 1rem;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" /></svg>
                                </button>
                                <span class="small fw-semibold">${cartItem.quantity}</span>
                                <button onclick="removeFromCart(${dish.id})" class="btn btn-sm text-theme p-0">
                                    <svg class="w-4 h-4" style="width: 1rem; height: 1rem;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" /></svg>
                                </button>
                            </div>

                            <!-- Item Details -->
                            <div class="flex-grow-1 me-3">
                                <p class="small fw-medium mb-0">${dish.name}</p>
                                <p class="small text-muted mb-0">₱${dish.price.toFixed(2)}</p>
                            </div>

                            <!-- Price (Updated to use text-theme) -->
                            <div class="text-end">
                                <p class="small fw-semibold text-theme mb-0">$${itemTotal.toFixed(2)}</p>
                            </div>
                        </div>
                    `;
        });
    }

    cartContainer.innerHTML = cartHtml;

    const taxAmount = subtotal * TAX_RATE;
    const finalTotal = subtotal + taxAmount;

    // Update single set of total elements inside the modal
    document.getElementById('subtotal').textContent = `₱${subtotal.toFixed(2)}`;
    document.getElementById('tax-amount').textContent = `₱${taxAmount.toFixed(2)}`;
    document.getElementById('final-total').textContent = `₱${finalTotal.toFixed(2)}`;

    // Update the header cart indicator
    document.getElementById('cart-item-count-badge').textContent = totalItems;

    // Control checkout button state
    const checkoutBtn = document.getElementById('checkout-button');
    const cartButton = document.getElementById('view-cart-button');

    if (cart.length > 0) {
        checkoutBtn.disabled = false;
        checkoutBtn.classList.remove('disabled');
        cartButton.classList.remove('btn-outline-secondary');
        cartButton.classList.add('btn-theme');
        document.getElementById('cart-item-count-badge').classList.remove('d-none');
    } else {
        checkoutBtn.disabled = true;
        checkoutBtn.classList.add('disabled');
        cartButton.classList.remove('btn-theme');
        cartButton.classList.add('btn-outline-secondary');
        document.getElementById('cart-item-count-badge').classList.add('d-none');
    }
}

function addToCart(dishId) {
    const existingItem = cart.find(item => item.id === dishId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id: dishId, quantity: 1 });
    }
    updateCartUI();
}

function removeFromCart(dishId) {
    const existingItemIndex = cart.findIndex(item => item.id === dishId);
    if (existingItemIndex !== -1) {
        if (cart[existingItemIndex].quantity > 1) {
            cart[existingItemIndex].quantity -= 1;
        } else {
            cart.splice(existingItemIndex, 1); // Remove item if quantity is 1
        }
    }
    updateCartUI();
}

// --- 3. RENDERING FUNCTIONS ---

/**
 * Renders the menu items, optionally based on a provided filtered list.
 * @param {Array} itemsToRender The array of menu items to display. Defaults to all menuItems.
 */
function renderMenu(itemsToRender = menuItems) {
    const menuContainer = document.getElementById('menu-list');

    if (itemsToRender.length === 0) {
        menuContainer.innerHTML = `
                    <div class="text-center py-5">
                        <h3 class="text-secondary">No Results Found</h3>
                        <p class="text-muted">Try a different search term or category.</p>
                    </div>
                `;
        return;
    }

    // Grouping the provided items by category
    const groupedItems = itemsToRender.reduce((acc, item) => {
        acc[item.category] = acc[item.category] || [];
        acc[item.category].push(item);
        return acc;
    }, {});

    let html = '';
    for (const category in groupedItems) {
        // Updated to use text-theme and border-theme for category headers
        html += `
                    <div class="mt-4">
                        <h2 class="fs-4 fw-bold border-bottom border-theme pb-2 mb-3 text-theme">${category}</h2>
                        <div class="d-grid gap-3">
                `;

        groupedItems[category].forEach(dish => {
            const priceFixed = dish.price.toFixed(2);

            // Bootstrap Card for Ordering
            html += `
                        <div class="d-flex align-items-center bg-white p-3 rounded-3 shadow-sm hover-shadow-lg transition">
                            <!-- Image (with onerror fallback for best practice) -->
                            <img src="${dish.imageUrl}" onerror="this.onerror=null;this.src='https://placehold.co/64x64/D9D9D9/333?text=Dish';" alt="${dish.name}" class="rounded me-3" style="width: 64px; height: 64px; object-fit: cover;">
                            
                            <!-- Details -->
                            <div class="flex-grow-1">
                                <p class="h6 mb-0">${dish.name}</p>
                                <p class="text-muted small mb-0">Price: ₱${priceFixed}</p>
                            </div>
                            
                            <!-- Add Button (Updated to use btn-theme) -->
                            <button onclick="addToCart(${dish.id})" class="btn btn-theme btn-sm rounded-circle d-flex align-items-center justify-content-center ms-3 shadow-sm" style="width: 38px; height: 38px;">
                                <svg class="w-5 h-5" style="width: 1.25rem; height: 1.25rem;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" /></svg>
                            </button>
                        </div>
                    `;
        });

        html += `</div></div>`;
    }
    menuContainer.innerHTML = html;
}

/**
 * Reads the search input and filters the menu, then re-renders the displayed menu.
 */
function filterMenuAndRender() {
    const searchTerm = document.getElementById('menu-search-input').value.toLowerCase().trim();

    let filteredItems = menuItems; // Start with all items

    if (searchTerm) {
        filteredItems = menuItems.filter(item => {
            const nameMatch = item.name.toLowerCase().includes(searchTerm);
            const categoryMatch = item.category.toLowerCase().includes(searchTerm);
            return nameMatch || categoryMatch;
        });
    }

    renderMenu(filteredItems);
}

// --- 4. CHECKOUT & MODAL FUNCTIONS ---

function simulateCheckout() {
    if (cart.length === 0) {
        console.error("Cart is empty!");
        return;
    }

    // Close the cart modal before opening the confirmation
    toggleCartModal();

    // Calculate final total for the message
    let subtotal = 0;
    cart.forEach(item => {
        const dish = menuItems.find(d => d.id === item.id);
        subtotal += dish.price * item.quantity;
    });
    const finalTotal = subtotal * (1 + TAX_RATE);

    // Display a custom non-alert confirmation
    const confirmationMessage = `
                <h3 class="modal-title text-success mb-2">Order Placed!</h3>
                <p class="mb-3">Thank you for your order!</p>
                <p class="fs-4 fw-semibold mb-3 text-theme">₱${finalTotal.toFixed(2)}</p>
                <p class="small text-muted mb-4">Your order will be ready for pickup in approximately 25 minutes.</p>
                <button onclick="document.getElementById('confirmation-overlay').classList.add('d-none'); resetOrder();" class="btn btn-theme btn-lg rounded-pill shadow">Start New Order</button>
            `;

    document.getElementById('confirmation-content').innerHTML = confirmationMessage;
    document.getElementById('confirmation-overlay').classList.remove('d-none');
}

function resetOrder() {
    cart = [];
    updateCartUI();
}

/**
 * Toggles the universal cart modal visibility.
 */
function toggleCartModal() {
    const modal = document.getElementById('universal-cart-modal');
    modal.classList.toggle('d-none');
    // Prevent body scrolling when modal is open
    document.body.style.overflow = modal.classList.contains('d-none') ? '' : 'hidden';
}


// --- 5. INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    renderMenu(); // Initial render of the full menu
    updateCartUI(); // Initialize cart view
});

// Ensure the global functions are available via the window object for onclick handlers
window.addToCart = addToCart;
window.removeFromCart = removeFromCart;
window.simulateCheckout = simulateCheckout;
window.toggleCartModal = toggleCartModal;
window.filterMenuAndRender = filterMenuAndRender;
