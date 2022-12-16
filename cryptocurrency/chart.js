const ctx = document.getElementById('linechart').getContext('2d');
const linechart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep'],
        datasets: [{
            label: 'Portfolio 1',
            data: [2,8,6,9,6,10,7,10,6,12,6,8,5,7,11,8,10],
            backgroundColor: [
                'rgba(224, 22, 197,1)'
            ],
            borderColor: [
                'rgba(224, 22, 197,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true
    }
});



const ctx1 = document.getElementById('linechart1').getContext('2d');
const linechart1 = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ['feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep'],
        datasets: [{
            label: 'Portfolio 2',
            data: [3,5,2,8,3,7,5,9,3,7,10,6,9,3,5,7,4],
            backgroundColor: [
                'rgba(224, 22, 197,1)'
            ],
            borderColor: [
                'rgba(224, 22, 197,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true
    }
});

const ctx2 = document.getElementById('linechart2').getContext('2d');
const linechart2 = new Chart(ctx2, {
    type: 'line',
    data: {
        labels: ['feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep'],
        datasets: [{
            label: 'Portfolio 3',
            data: [2,8,6,9,6,10,7,10,6,12,6,8,5,7,11,8,10],
            backgroundColor: [
                'rgba(224, 22, 197,1)'
            ],
            borderColor: [
                'rgba(224, 22, 197,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive:true
    }
});