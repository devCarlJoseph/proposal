
// --- CONSTANTS ---
const INVENTORY_KEY = 'inventoryData';
// Key to simulate a logged-in session (since there's no real backend auth)
const SESSION_KEY = 'eateryAppLoggedIn';

// --- LOCAL STORAGE & DATA MANAGEMENT ---

let inventory = [];

function loadFromLocalStorage() {
    return JSON.parse(localStorage.getItem(INVENTORY_KEY)) || [];
}

function saveToLocalStorage() {
    // Sort inventory by name before saving and rendering
    inventory.sort((a, b) => a.name.localeCompare(b.name));
    localStorage.setItem(INVENTORY_KEY, JSON.stringify(inventory));
    renderTable();
}

// --- SESSION MANAGEMENT ---

function isUserLoggedIn() {
    return localStorage.getItem(SESSION_KEY) === 'true';
}

function performLogin() {
    localStorage.setItem(SESSION_KEY, 'true');
    // Reload the page to transition from login view to app view
    window.location.reload();
}

function showLogoutConfirmModal() {
    showModal('logoutConfirmModal');
}

function performLogout() {
    localStorage.setItem(SESSION_KEY, 'false');
    hideModal('logoutConfirmModal');
    // Reload the page to transition from app view to login view
    window.location.reload();
}

// --- MODAL UTILITIES ---

function showModal(modalId) {
    document.getElementById(modalId).classList.remove('d-none');
    document.body.style.overflow = 'hidden';
}

function hideModal(modalId) {
    const modalElement = document.getElementById(modalId);
    if (modalElement) {
        modalElement.classList.add('d-none');
    }
    // Check if any other modal is still visible before resetting body overflow
    const visibleModals = document.querySelectorAll('.custom-modal-overlay:not(.d-none)');
    if (visibleModals.length === 0) {
        document.body.style.overflow = '';
    }

    // Reset the form and clear error styles for the item modal
    if (modalId === 'itemModal') {
        document.getElementById('itemForm').reset();
        document.getElementById('quantity').classList.remove('is-invalid');
        document.getElementById('modalErrorMsg').classList.add('d-none');
        document.getElementById('currentStockDisplay').classList.add('d-none');
    }
}

// --- RENDERING AND UI LOGIC ---

function renderTable() {
    const tableBody = document.getElementById('inventory-list');
    if (!tableBody) return; // Exit if not in main app view

    tableBody.innerHTML = '';

    if (inventory.length === 0) {
        tableBody.innerHTML = `<tr><td colspan="5" class="text-center py-4 text-muted">No inventory items found. Add one above!</td></tr>`;
        return;
    }

    inventory.forEach((item, index) => {
        // Low stock threshold is set to 2 units
        const status = item.quantity <= 2 ? 'Low Stock' : 'Sufficient';
        const row = document.createElement('tr');
        row.innerHTML = `
                    <td>${item.name}</td>
                    <td>${item.quantity}</td>
                    <td>${item.unit}</td>
                    <td class="${item.quantity <= 2 ? 'low-stock' : 'text-success'}">${status}</td>
                    <td class="text-center">
                        <!-- Action buttons calling modal functions -->
                        <button class="btn btn-sm btn-outline-primary action-btn" onclick="showUseModal('${item.id}')">Use</button>
                        <button class="btn btn-sm btn-outline-secondary action-btn" onclick="showAddEditModal('${item.id}')">Update</button>
                        <button class="btn btn-sm btn-outline-danger action-btn" onclick="showDeleteConfirmModal('${item.id}', '${item.name}')">Delete</button>
                    </td>
                `;
        tableBody.appendChild(row);
    });
}


// --- CRUD OPERATIONS (Local Storage) ---

async function createOrUpdateItem(event) {
    event.preventDefault();
    const form = event.target;
    const itemId = form.itemId.value;
    const name = form.itemName.value.trim();
    const quantityInput = document.getElementById('quantity');
    const errorElement = document.getElementById('modalErrorMsg');
    const quantity = parseFloat(quantityInput.value);
    const unit = form.unit.value.trim();

    // Clear previous errors
    quantityInput.classList.remove('is-invalid');
    errorElement.classList.add('d-none');
    errorElement.textContent = '';

    if (document.getElementById('itemName').disabled) {
        // Logic for 'Use' mode is now handled in the custom onsubmit handler for showUseModal
        // This block is only for standard Add/Edit
    } else {
        // --- Explicit Validation for Add/Edit ---
        if (name === '' || unit === '') {
            return; // Rely on native HTML validation
        }

        if (isNaN(quantity) || quantity < 0) {
            quantityInput.classList.add('is-invalid');
            errorElement.textContent = "Please enter a valid quantity (number greater than or equal to zero).";
            errorElement.classList.remove('d-none');
            return;
        }
        // --- End Validation ---

        if (itemId) {
            // Update existing item
            const index = inventory.findIndex(i => i.id === itemId);
            if (index !== -1) {
                inventory[index] = { id: itemId, name, quantity, unit };
            }
        } else {
            // Add new item 
            const id = crypto.randomUUID();
            inventory.push({ id, name, quantity, unit });
        }

        saveToLocalStorage();
        hideModal('itemModal');
    }
}

async function updateQuantity(itemId, newQuantity) {
    const index = inventory.findIndex(i => i.id === itemId);
    if (index !== -1) {
        if (!isNaN(newQuantity)) {
            // Use toFixed(3) for potential floating point precision issues, then convert back to number
            inventory[index].quantity = parseFloat(newQuantity.toFixed(3));
            saveToLocalStorage();
        }
    }
}

async function deleteItem(itemId) {
    const index = inventory.findIndex(i => i.id === itemId);
    if (index !== -1) {
        // Remove the item from the array
        inventory.splice(index, 1);
        // Save the updated array and re-render the table
        saveToLocalStorage();
    }
    // Hide the confirmation modal 
    hideModal('confirmModal');
}

// --- Reset Functionality ---
function showResetConfirmModal() {
    showModal('resetConfirmModal');
}

function resetInventory() {
    // Clear the local storage key
    localStorage.removeItem(INVENTORY_KEY);
    // Reset the in-memory array
    inventory = [];
    // Hide the confirmation modal
    hideModal('resetConfirmModal');
    // Rerender the now empty table
    renderTable();
}

// --- MODAL HANDLING FOR CRUD ---

function showAddEditModal(itemId = null) {
    const modalTitle = document.getElementById('modalTitle');
    const submitBtn = document.getElementById('modalSubmitBtn');
    const nameGroup = document.getElementById('nameGroup');
    const unitGroup = document.getElementById('unitGroup');
    const quantityInput = document.getElementById('quantity');

    // Clear any lingering state from previous modal use
    hideModal('itemModal');

    // Enable fields and ensure required attributes are respected for Add/Edit
    document.getElementById('itemName').disabled = false;
    document.getElementById('unit').disabled = false;

    // Show fields
    nameGroup.classList.remove('d-none');
    unitGroup.classList.remove('d-none');

    // Set to default ADD mode
    modalTitle.textContent = 'Add New Ingredient';
    submitBtn.textContent = 'Add Item';
    quantityInput.placeholder = 'e.g., 50';

    // Reset form and clear hidden ID
    document.getElementById('itemForm').reset();
    document.getElementById('itemId').value = '';

    if (itemId) {
        // Set to EDIT mode
        const item = inventory.find(i => i.id === itemId);
        if (!item) return;

        modalTitle.textContent = `Edit: ${item.name}`;
        submitBtn.textContent = 'Save Changes';
        document.getElementById('itemId').value = itemId;
        document.getElementById('itemName').value = item.name;
        document.getElementById('quantity').value = item.quantity;
        document.getElementById('unit').value = item.unit;
    }

    // Set submit handler to the main CRUD function
    document.getElementById('itemForm').onsubmit = createOrUpdateItem;
    showModal('itemModal');
}

function showUseModal(itemId) {

    const item = inventory.find(i => i.id === itemId);
    if (!item) return;

    const currentQuantity = item.quantity;
    const itemName = item.name;

    const modalTitle = document.getElementById('modalTitle');
    const submitBtn = document.getElementById('modalSubmitBtn');
    const nameGroup = document.getElementById('nameGroup');
    const unitGroup = document.getElementById('unitGroup');
    const quantityInput = document.getElementById('quantity');
    const errorElement = document.getElementById('modalErrorMsg');
    const currentStockDisplay = document.getElementById('currentStockDisplay');

    hideModal('itemModal');

    // Show current stock display and populate
    currentStockDisplay.classList.remove('d-none');
    currentStockDisplay.textContent = `Current Stock: ${currentQuantity} ${item.unit}`;

    // Set to USE mode
    modalTitle.textContent = `Use Ingredient: ${itemName}`;
    submitBtn.textContent = 'Confirm Usage';
    quantityInput.placeholder = `Quantity to Use`;

    // Hide fields not needed for 'Use'
    nameGroup.classList.add('d-none');
    unitGroup.classList.add('d-none');

    // Disable fields for 'Use' mode
    document.getElementById('itemName').disabled = true;
    document.getElementById('unit').disabled = true;

    // Reset form but set hidden ID
    document.getElementById('itemForm').reset();
    document.getElementById('itemId').value = itemId;

    // Custom handler for Use action
    document.getElementById('itemForm').onsubmit = async (e) => {
        e.preventDefault();
        const usedQty = parseFloat(e.target.quantity.value);

        // Clear previous errors
        quantityInput.classList.remove('is-invalid');
        errorElement.classList.add('d-none');
        errorElement.textContent = '';

        // --- Validation Check 1: Valid Positive Number ---
        if (isNaN(usedQty) || usedQty <= 0 || e.target.quantity.value.trim() === '') {
            quantityInput.classList.add('is-invalid');
            errorElement.textContent = "Please enter a valid quantity greater than zero to use.";
            errorElement.classList.remove('d-none');
            return;
        }

        const newQty = currentQuantity - usedQty;

        // --- Validation Check 2: Sufficient Stock ---
        if (newQty < -0.0001) { // Floating point safety margin
            quantityInput.classList.add('is-invalid');
            errorElement.textContent = `Insufficient stock. Cannot use ${usedQty} ${item.unit}. Only ${currentQuantity} available.`;
            errorElement.classList.remove('d-none');
            return;
        }

        // If validation passes, proceed with update and close modal
        await updateQuantity(itemId, newQty);
        hideModal('itemModal');
    };

    showModal('itemModal');
}


function showDeleteConfirmModal(itemId, itemName) {
    document.getElementById('confirmItemName').textContent = itemName;
    const confirmDeleteBtn = document.getElementById('confirmDeleteBtn');

    // Set the delete action directly
    confirmDeleteBtn.onclick = () => deleteItem(itemId);

    showModal('confirmModal');
}

// --- APP INITIALIZATION ---

function renderLoginScreen() {
    const container = document.getElementById('appContainer');
    container.innerHTML = `
                <div class="d-flex flex-column align-items-center justify-content-center" style="height: 80vh;">
                    <div class="card shadow-lg p-5 text-center" style="max-width: 470px; border-top: 5px solid var(--theme-color);">
                        <a class="fw-bold mb-3 text-dark href="restaurant.html"></a>
                        <p class="text-muted mb-4">Inventory data is stored locally on your browser.</p>
                        <button type="button" class="btn btn-theme btn-lg w-100 rounded-pill shadow" onclick="performLogin()">
                            Log In to Inventory
                        </button>
                    </div>
                </div>
            `;
}

function renderAppContent() {
    const container = document.getElementById('appContainer');

    // Use backticks for multi-line string HTML template
    container.innerHTML = `
                <header class="d-flex justify-content-between align-items-center mb-4">
                    <h1 class="display-6 fw-bold text-dark">Inventory</h1>
                    <!-- NEW LOGOUT BUTTON -->
                    <button type="button" class="btn btn-sm btn-outline-danger shadow" onclick="showLogoutConfirmModal()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                          <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"/>
                        </svg>
                        Logout
                    </button>
                </header>

                <!-- Action Buttons Row -->
                <div class="d-flex flex-wrap mb-4">
                    <!-- Add Item Button -->
                    <button type="button" class="btn btn-theme shadow me-2 mb-2" onclick="showAddEditModal()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-plus-lg me-1" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/>
                        </svg>
                        Add New Ingredient
                    </button>
                    
                    <!-- Reset Button -->
                    <button type="button" class="btn btn-theme shadow mb-2" onclick="showResetConfirmModal()">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-octagon-fill me-1" viewBox="0 0 16 16">
                            <path d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353zM8.708 8.5l2.846 2.846a.5.5 0 0 1-.708.708L8 9.207l-2.846 2.847a.5.5 0 0 1-.708-.708L7.293 8 4.446 5.154a.5.5 0 1 1 .708-.708L8 7.293l2.846-2.847a.5.5 0 0 1 .708.708z"/>
                        </svg>
                        Reset Inventory
                    </button>
                </div>
                
                <!-- Inventory Table -->
                <div class="table-responsive">
                    <table class="table table-hover align-middle bg-white" id="inventoryTable">
                        <thead>
                            <tr>
                                <th class="text-start">Ingredient</th>
                                <th>Quantity</th>
                                <th>Unit</th>
                                <th>Status</th>
                                <th class="text-center" style="width: 250px;">Actions</th>
                            </tr>
                        </thead>
                        <tbody id="inventory-list">
                            <!-- Inventory items will be rendered here by JavaScript -->
                        </tbody>
                    </table>
                </div>
            `;

    // Re-load inventory data and render the table after injecting the HTML
    inventory = loadFromLocalStorage();
    renderTable();
}

// --- Initial call to load and render the appropriate screen ---
document.addEventListener('DOMContentLoaded', () => {
    if (isUserLoggedIn()) {
        renderAppContent();
    } else {
        renderLoginScreen();
    }
});
