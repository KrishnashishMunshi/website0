
document.addEventListener('DOMContentLoaded', function () {
    const themeToggleButton = document.getElementById('theme-toggle');

    // Check if the user already has a theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.setAttribute('data-theme', savedTheme);
    }
    
    // Add an event listener to toggle themes
    themeToggleButton.addEventListener('click', () => {
      const currentTheme = document.body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.body.setAttribute('data-theme', newTheme);
    
      // Save the preference to localStorage
      localStorage.setItem('theme', newTheme);
    });
})
