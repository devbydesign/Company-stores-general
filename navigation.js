// Centralized Navigation HTML
const navigationHTML = `
<header>
  <div class="container">
    <a href="index.html" class="logo">
      <img src="assets/images/Logo.png" alt="Logo">
    </a>
    <nav>
      <button class="menu-toggle" id="mobile-menu" aria-label="Toggle menu" aria-expanded="false">☰</button>
      <ul id="nav-list">
        <li><a href="index.html">Company Stores</a></li>
        <li><a href="build-program.html">Build Your Company store</a></li>
        
        <li><a href="contact.html">Contact Us</a></li>
      </ul>
      <form class="search-form" id="search-form-header">
        <input type="search" name="query" placeholder="Search Products..." aria-label="Search">
        <button type="submit">Search</button>
      </form>
    </nav>
  </div>
</header>
`;

// Function to load navigation and set active states
function loadNavigation() {
  // Insert navigation HTML
  document.body.insertAdjacentHTML('afterbegin', navigationHTML);
  
  // Set active states based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  
  // First, remove active class from all links
  const allLinks = document.querySelectorAll('nav a');
  allLinks.forEach(link => link.classList.remove('active'));
  
  // Set active state for main navigation links (excluding dropdown items)
  const mainNavLinks = document.querySelectorAll('#nav-list > li > a');
  mainNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Set active state for current page
    if (href === currentPage || 
        (currentPage === '' && href === 'index.html') ||
        (currentPage === 'index.html' && href === 'index.html')) {
      link.classList.add('active');
    }
    
    // Set active state for Program Resources dropdown (main link only)
    if (href === 'resources.html' && 
        ['resources.html', 'vital-statistics.html', 'welcome-kits.html', 
         'years-of-service.html', 'performance-bonuses.html', 'wellness-programs.html',
         'spot-recognition.html', 'peer-to-peer.html', 'point-based-rewards.html',
         'general-awards.html', 'incentive-programs.html', 'attendance-recognition.html',
         'safety-recognition.html', 'community-impact.html',
         'volunteer-recognition.html'].includes(currentPage)) {
      link.classList.add('active');
    }
  });
  
  // Set active state for specific dropdown items only
  const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
  dropdownLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
}

// Load navigation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadNavigation);
} else {
  loadNavigation();
} 
