
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
];

// --- 2. UTILITY FUNCTIONS ---

function getCurrentDay() {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[new Date().getDay()];
}


// --- 3. RENDERING LOGIC ---

function filterAndRenderMenu(filterType = 'today', searchTerm = '') {
    const gridContainer = document.getElementById('menu-grid-view');
    const statusIndicator = document.getElementById('status-indicator');
    const currentDay = getCurrentDay();

    let filteredItems = menuItems;
    let titleText = "Menu";
    const lowerSearchTerm = searchTerm.toLowerCase();

    // CRITICAL FIX: Clear the grid before re-rendering
    gridContainer.innerHTML = '';

    // 1. Availability Filter (Today vs. All)
    if (filterType === 'today') {
        filteredItems = filteredItems.filter(item => {
            const availability = item.availability.toLowerCase();
            const dayMatch = availability.includes(currentDay.toLowerCase());
            const everyday = availability.includes('everyday');
            return dayMatch || everyday;
        });
        titleText = `${currentDay}'s Fresh Availability`;
    } else {
        titleText = `The Full Menu`;
    }

    // 2. Search Filter (by Name or Description)
    if (lowerSearchTerm) {
        filteredItems = filteredItems.filter(item =>
            item.name.toLowerCase().includes(lowerSearchTerm) ||
            item.description.toLowerCase().includes(lowerSearchTerm)
        );
    }

    statusIndicator.textContent = titleText + (searchTerm ? ' (Filtered Results)' : '');

    if (filteredItems.length === 0) {
        const message = `
                    <div class="col-12 text-center py-5 text-muted">
                        <svg xmlns="http://www.w3.org/2000/svg" class="mx-auto text-secondary mb-3" style="height: 48px; width: 48px;" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <h3 class="mt-2 fs-6 fw-medium text-dark">No dishes match your criteria.</h3>
                        <p class="mt-1 small text-secondary">Try checking the Full Menu tab or adjusting your search terms.</p>
                    </div>
                `;
        gridContainer.style.display = 'flex';
        gridContainer.innerHTML = message;
        return;
    }

    // --- GROUPING LOGIC ---
    let groupedItems = {};

    if (filterType === 'today') {
        // Group by category for 'Today's Menu'
        groupedItems = filteredItems.reduce((acc, item) => {
            acc[item.category] = acc[item.category] || [];
            acc[item.category].push(item);
            return acc;
        }, {});
    } else {
        // For 'Full Menu', flatten the list and sort by name. Use a single key.
        filteredItems.sort((a, b) => a.name.localeCompare(b.name));
        groupedItems['All Dishes'] = filteredItems;
    }
    // --- END GROUPING LOGIC ---

    renderGrid(groupedItems, gridContainer, filterType);
    gridContainer.style.display = 'flex';

    // Highlight the active button/tab
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    const activeTab = document.getElementById(filterType === 'today' ? 'tab-today' : 'tab-all');
    activeTab.classList.add('active');
}

// --- Render function for Grid View (Used for Today and Full Menu) ---
function renderGrid(groupedItems, container, filterType) {
    for (const category in groupedItems) {
        // Category Header: Only show if filterType is 'today' or if it's the 'All Dishes' group
        if (filterType === 'today' || (filterType === 'all' && category !== 'All Dishes')) {
            container.innerHTML += `<div class="col-12"><h2 class="playfair-heading fs-3 fw-bold text-dark mt-5 mb-3 border-bottom pb-2">${category}</h2></div>`;
        }

        groupedItems[category].forEach(item => {

            const cardHtml = `
                        <div class="col-12 col-sm-6 col-lg-4 mb-4">
                            <div class="card menu-card h-100 bg-white" data-dish-id="${item.id}">
                                <img src="${item.imageUrl}" class="card-img-top" alt="${item.name}" 
                                    onerror="this.onerror=null; this.src='https://placehold.co/600x400/e0e0e0/${encodeURIComponent('2C3E50')}?text=Image+Unavailable';">
                                <div class="card-body p-4 d-flex flex-column">
                                    <div class="d-flex justify-content-between align-items-start mb-2">
                                        <h3 class="card-title fs-5 fw-semibold text-dark me-3 mb-0">${item.name}</h3>
                                        <!-- text-danger is now text-accent-color (Elegant Teal) -->
                                        <span class="fs-4 fw-bold text-accent-color flex-shrink-0">₱${item.price.toFixed(2)}</span>
                                    </div>
                                    
                                    <p class="small text-muted mb-3">${item.description.substring(0, 100)}</p>

                                    <div class="mt-auto pt-2 d-flex justify-content-between align-items-center">
                                        <span class="small text-muted fw-medium">${item.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
            container.innerHTML += cardHtml;
        });
    }
}

// --- 4. INITIALIZATION ---

document.addEventListener('DOMContentLoaded', () => {
    let currentFilterType = 'today';

    const triggerRender = () => {
        const searchTerm = document.getElementById('menu-search').value;
        filterAndRenderMenu(currentFilterType, searchTerm);
    };

    // Setup Availability Tab Listeners
    document.getElementById('tab-today').addEventListener('click', (e) => {
        e.preventDefault();
        currentFilterType = 'today';
        triggerRender();
    });
    document.getElementById('tab-all').addEventListener('click', (e) => {
        e.preventDefault();
        currentFilterType = 'all';
        triggerRender();
    });

    // Setup Search Listener
    document.getElementById('menu-search').addEventListener('input', triggerRender);

    // Initial Load
    triggerRender();
});
