// script.js

// Toggle sidebar visibility on mobile
function toggleSidebar() {
    var sidebar = document.getElementById('sidebar');
    if (window.getComputedStyle(sidebar).transform === 'matrix(1, 0, 0, 0, 0, 0)') {
        sidebar.style.transform = 'translateX(-100%)';
    } else {
        sidebar.style.transform = 'translateX(0)';
    }
}

// Handle window resize to ensure sidebar remains visible on larger screens
window.addEventListener('resize', function () {
    var sidebar = document.getElementById('sidebar');
    if (window.innerWidth >= 768) {
        sidebar.style.transform = 'translateX(0)';
    } else {
        sidebar.style.transform = 'translateX(-100%)';
    }
});
