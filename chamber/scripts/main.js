document.addEventListener('DOMContentLoaded', (event) => {
    const currentYearElement = document.getElementById('currentYear');
    const lastModifiedElement = document.getElementById('lastModified');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const hamburger = document.querySelector('.hamburger');
    const navigation = document.getElementById('navigation');

    currentYearElement.textContent = new Date().getFullYear();
    lastModifiedElement.textContent = document.lastModified;

    darkModeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });

    hamburger.addEventListener('click', () => {
        navigation.classList.toggle('open');
        hamburger.textContent = hamburger.textContent === '☰' ? '✖' : '☰';
    });
});



