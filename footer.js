// Standardized footer injection matching index.html
(function injectFooter() {
  function renderFooter() {
    if (document.querySelector('body > footer')) return; // avoid duplicate
    const footerHTML = `
      <footer>
        <div class="container footer-grid">
          <div class="footer-section footer-company">
            <h3>RBB Marketing</h3>
            <p>555 Street<br>Example Address, Example State<br>(847) 555-2240</p>
          </div>
          <div class="footer-section footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#" onclick="document.querySelector('#search-form-header input[type=\\'search\\']')?.focus(); return false;">Search</a></li>
              <li><a href="contact.html">Contact Us</a></li>
              <li><a href="contact.html">Support</a></li>
              <li><a href="contact.html">Feedback and Suggestions</a></li>
            </ul>
          </div>
          <div class="footer-section footer-social">
            <h3>Follow Us</h3>
            <div class="social-icons">
              <a href="https://www.facebook.com/rbbmarketing" target="_blank" aria-label="Facebook">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="https://x.com/rbbmarketing" target="_blank" aria-label="X (Twitter)">
                <i class="fab fa-x-twitter"></i>
              </a>
              <a href="https://www.instagram.com/rbbmarketing/" target="_blank" aria-label="Instagram">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/company/rbb-marketing/" target="_blank" aria-label="LinkedIn">
                <i class="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div class="container copyright">
          <p>&copy; <span id="current-year"></span> RBB Marketing. All rights reserved.</p>
        </div>
      </footer>
    `;
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
  } else {
    renderFooter();
  }
})();


