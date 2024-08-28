// FORUM CHART INTEGRATION
const forumCtx = document.getElementById('forumChart').getContext('2d');
const forumChart = new Chart(forumCtx, {
  type: 'bar',
  data: {
    labels: ['Engagement', 'Reach', 'Likes', 'Shares', 'Comments'],
    datasets: [{
      label: 'Post Metrics',
      data: [85, 100, 75, 60, 90],
      backgroundColor: [
        'rgba(29, 38, 154, 0.7)',
        'rgba(46, 125, 50, 0.7)',
        'rgba(255, 111, 0, 0.7)',
        'rgba(213, 0, 0, 0.7)',
        'rgba(0, 99, 132, 0.7)'
      ],
      borderWidth: 1
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
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
