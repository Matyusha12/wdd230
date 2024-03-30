// JavaScript to set the current year and the last modified date
document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('currentYear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = document.lastModified;
});


