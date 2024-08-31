// Toggle Sidebar Function
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const isSidebarOpen = !sidebar.classList.contains('-translate-x-full');
    if (isSidebarOpen) {
        sidebar.classList.add('-translate-x-full');
    } else {
        sidebar.classList.remove('-translate-x-full');
    }
}
  // Chart.js Initialization
document.addEventListener('DOMContentLoaded', function () {
    // Follower Growth Chart
    const followerGrowthCtx = document.getElementById('followerGrowthChart').getContext('2d');
    new Chart(followerGrowthCtx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Example labels
            datasets: [{
                label: 'Followers',
                data: [100000, 105000, 110000, 115000, 120000, 125000, 130000], // Example data
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true,
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ': ' + context.parsed.y.toLocaleString();
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Engagement Rate Chart
    const engagementRateCtx = document.getElementById('engagementRateChart').getContext('2d');
    new Chart(engagementRateCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // Example labels
            datasets: [{
                label: 'Engagement Rate (%)',
                data: [7.5, 8.0, 8.3, 8.5, 8.7, 8.8, 8.9], // Example data
                backgroundColor: 'rgba(153, 102, 255, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return context.dataset.label + ': ' + context.parsed.y + '%';
                        }
                    }
                }
            },
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
