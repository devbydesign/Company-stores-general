document.addEventListener('DOMContentLoaded', function() {
  const footerHTML = `
  <footer>
    <div class="container footer-grid">
      <div class="footer-section footer-company">
        <h3>Acrobat Branding</h3>
        <p>sales@acrobatbranding.com<br>(786) 304-2044</p>
      </div>
      <div class="footer-section footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Search</a></li>
          <li><a href="contact.html">Contact Us</a></li>
          <li><a href="contact.html">Support</a></li>
          <li><a href="contact.html">Feedback and Suggestions</a></li>
        </ul>
      </div>
      <div class="footer-section footer-social">
        <h3>Follow Us</h3>
        <div class="social-icons">
          <a href="https://www.facebook.com/Acrobatbranding/" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://www.linkedin.com/company/acrobatbranding/about/" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/acrobatbranding/" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div class="container copyright">
      <p>&copy; <span id="current-year"></span>Website built by RBB Marketing. All rights reserved.</p>
    </div>
  </footer>
  `;

  document.body.insertAdjacentHTML('beforeend', footerHTML);

  // Dynamically update the copyright year
  const currentYear = new Date().getFullYear();
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = currentYear;
  }
});
