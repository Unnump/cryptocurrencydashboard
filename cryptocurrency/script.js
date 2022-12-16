
const doughnutChart = document.getElementById('doughnutChart').getContext('2d');

//DONUT CHART
new Chart(doughnutChart, {
    type: 'doughnut',
    data: {
         //labels: ['Bitcoin', 'Ethereum', 'Monero'],
        datasets: [
            {
                data: [30, 60, 25],
                backgroundColor: ['rgb(228, 58, 199)', 'rgb(228, 155, 216)', 'rgb(218, 184, 212)'],
                // hoverBackgroundColor: ['#56aabd', '#67c97a', '#6368c0'],
            }
        ]
    },
    options: {
        legend: {
            display: true,
            position: 'right'
        },
    }
});