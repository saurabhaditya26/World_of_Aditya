   document.addEventListener('DOMContentLoaded', () => {
      const darkModeToggle = document.getElementById('darkModeToggle');
      const body = document.body;

      // Check localStorage for dark mode preference
      if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = '<span class="icon">☀️</span><span class="text">Light Mode</span>';
      }

      // Toggle Dark Mode
      darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        // Update button text and icon
        if (body.classList.contains('dark-mode')) {
          darkModeToggle.innerHTML = '<span class="icon">☀️</span><span class="text">Light Mode</span>';
          localStorage.setItem('dark-mode', 'enabled'); // Save preference
        } else {
          darkModeToggle.innerHTML = '<span class="icon">🌙</span><span class="text">Dark Mode</span>';
          localStorage.setItem('dark-mode', 'disabled'); // Save preference
        }
      });
    });