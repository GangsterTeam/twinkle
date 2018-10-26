var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];
/* 3 donut charts */
var donutOptions = {
    cutoutPercentage: 85,
    legend: {
        position: 'bottom',
        padding: 5,
        labels: {
            pointStyle: 'circle',
            usePointStyle: true
        }
    }
};
// donut 2
var chDonutData2 = {
    labels: ['React', 'Vue', 'Angular'],
    datasets: [{
        backgroundColor: colors.slice(0, 3),
        borderWidth: 0,
        data: [40, 45, 30]
    }]
};
var chDonut2 = document.getElementById("chDonut2");
if (chDonut2) {
    new Chart(chDonut2, {
        type: 'pie',
        data: chDonutData2,
        options: donutOptions
    });
}

/* chart.js chart examples */

// chart colors

/* large line chart */
var chLine = document.getElementById("chLine");
var chartData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
            data: [589, 445, 483, 503, 689, 692, 634],
            backgroundColor: 'transparent',
            borderColor: colors[0],
            borderWidth: 4,
            pointBackgroundColor: colors[0]
        },
        {
            data: [639, 465, 493, 478, 589, 632, 674],
            backgroundColor: colors[3],
            borderColor: colors[1],
            borderWidth: 4,
            pointBackgroundColor: colors[1]
        }
    ]
};

if (chLine) {
    new Chart(chLine, {
        type: 'line',
        data: chartData,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });
}

var chBar = document.getElementById("chBar");
var chBarData = {
    labels: ["S", "M", "T", "W", "T", "F", "S"],
    datasets: [{
            data: [589, 445, 483, 503, 689, 692, 634],
            backgroundColor: colors[0]
        },
        {
            data: [209, 245, 383, 403, 589, 692, 580],
            backgroundColor: colors[1]
        },
    ]
};

if (chBar) {
    new Chart(chBar, {
        type: 'bar',
        data: chBarData,
        options: {
            scales: {
                xAxes: [{
                    barPercentage: 0.7,
                    categoryPercentage: 0.8
                }],
                yAxes: [{
                    ticks: {
                        beginAtZero: false
                    }
                }]
            },
            legend: {
                display: false
            }
        }
    });
}