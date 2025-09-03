document.addEventListener('DOMContentLoaded', function() {
    const modalHTML = `
        <div id="productModal" class="modal">
            <div class="modal-content">
                <span class="modal-close-btn">&times;</span>
                <img id="modal-img" src="" alt="Product Image">
                <h2 id="modal-title"></h2>
                <p id="modal-desc"></p>
                <button class="btn modal-quote-btn" onclick="window.location.href='contact.html?inquiry=product-quote'">
                    <i class="fas fa-envelope"></i> Request Quote
                </button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);
});