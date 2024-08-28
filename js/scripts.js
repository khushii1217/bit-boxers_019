// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// Toggle Section Content
function toggleSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  sections.forEach(section => {
    section.classList.add('hide');
  });

  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.toggle('hide');
}

// MAIN CHART INTEGRATION
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [{
      label: 'Likes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// LEADERBOARD CHART INTEGRATION
const leaderboardCtx = document.getElementById('leaderboardChart').getContext('2d');
const leaderboardChart = new Chart(leaderboardCtx, {
  type: 'line',
  data: {
    labels: ['User 1', 'User 2', 'User 3', 'User 4', 'User 5'],
    datasets: [{
      label: 'Engagement Score',
      data: [85, 90, 78, 88, 76],
      backgroundColor: 'rgba(29, 38, 154, 0.2)',
      borderColor: 'rgba(29, 38, 154, 1)',
      borderWidth: 2,
      fill: true
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
  }
});

// REPORTS CHART INTEGRATION
const reportsCtx = document.getElementById('reportsChart').getContext('2d');
const reportsChart = new Chart(reportsCtx, {
  type: 'pie',
  data: {
    labels: ['Twitter', 'Instagram', 'Facebook', 'LinkedIn'],
    datasets: [{
      label: 'Engagement',
      data: [40, 30, 20, 10],
      backgroundColor: [
        'rgba(29, 38, 154, 0.7)',
        'rgba(46, 125, 50, 0.7)',
        'rgba(255, 111, 0, 0.7)',
        'rgba(213, 0, 0, 0.7)'
      ],
      borderWidth: 0
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
      },
    },
  }
});
