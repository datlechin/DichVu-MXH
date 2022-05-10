/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: CRM Dashboard init js
*/

// get colors array from the string
function getChartColorsArray(chartId) {
    if (document.getElementById(chartId) !== null) {
        var colors = document.getElementById(chartId).getAttribute("data-colors");
        colors = JSON.parse(colors);
        return colors.map(function (value) {
            var newValue = value.replace(" ", "");
            if (newValue.indexOf(",") === -1) {
                var color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
                if (color) return color;
                else return newValue;;
            } else {
                var val = value.split(',');
                if (val.length == 2) {
                    var rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
                    rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                    return rgbaColor;
                } else {
                    return newValue;
                }
            }
        });
    }
}

// Sales forecast charts
var areachartSalesColors = getChartColorsArray("sales-forecast-chart");
var options = {
    series: [{
        name: 'Goal',
        data: [37]
    }, {
        name: 'Pending Forcast',
        data: [12]
    }, {
        name: 'Revenue',
        data: [18]
    }],
    chart: {
        type: 'bar',
        height: 341,
        toolbar: {
            show: false,
        },
    },
    plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '65%',
        },
    },
    stroke: {
        show: true,
        width: 5,
        colors: ['transparent']
    },
    xaxis: {
        categories: [''],
        axisTicks: {
            show: false,
            borderType: 'solid',
            color: '#78909C',
            height: 6,
            offsetX: 0,
            offsetY: 0
        },
        title: {
            text: 'Total Forecasted Value',
            offsetX: 0,
            offsetY: -30,
            style: {
                color: '#78909C',
                fontSize: '12px',
                fontWeight: 400,
            },
        },
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return "$" + value + "k";
            }
        },
        tickAmount: 4,
        min: 0
    },
    fill: {
        opacity: 1
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        fontWeight: 500,
        offsetX: 0,
        offsetY: -14,
        itemMargin: {
            horizontal: 8,
            vertical: 0
        },
        markers: {
            width: 10,
            height: 10,
        }
    },
    colors: areachartSalesColors
};
var chart = new ApexCharts(document.querySelector("#sales-forecast-chart"), options);
chart.render();

// Deal Type Charts
var dealTypeChartsColors = getChartColorsArray("deal-type-charts");
var options = {
    series: [{
            name: 'Pending',
            data: [80, 50, 30, 40, 100, 20],
        },
        {
            name: 'Loss',
            data: [20, 30, 40, 80, 20, 80],
        },
        {
            name: 'Won',
            data: [44, 76, 78, 13, 43, 10],
        }
    ],
    chart: {
        height: 341,
        type: 'radar',
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
        },
        toolbar: {
            show: false
        },
    },
    stroke: {
        width: 2
    },
    fill: {
        opacity: 0.2
    },
    legend: {
        show: true,
        fontWeight: 500,
        offsetX: 0,
        offsetY: -8,
        markers: {
            width: 8,
            height: 8,
            radius: 6,
        },
        itemMargin: {
            horizontal: 10,
            vertical: 0
        }
    },
    markers: {
        size: 0
    },
    colors: dealTypeChartsColors,
    xaxis: {
        categories: ['2016', '2017', '2018', '2019', '2020', '2021']
    }
};
var chart = new ApexCharts(document.querySelector("#deal-type-charts"), options);
chart.render();

// Balance Overview charts
var revenueExpensesChartsColors = getChartColorsArray("revenue-expenses-charts");
var options = {
    series: [{
        name: 'Revenue',
        data: [20, 25, 30, 35, 40, 55, 70, 110, 150, 180, 210, 250]
    },{
        name: 'Expenses',
        data: [12, 17, 45, 42, 24, 35, 42, 75, 102, 108, 156, 199]
    }],
    chart: {
        height: 290,
        type: 'area',
        toolbar: 'false',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return "$" + value + "k";
            }
        },
        tickAmount: 5,
        min: 0,
        max: 260
    },
    colors: revenueExpensesChartsColors,
    fill: {
        opacity: 0.06,
        colors: revenueExpensesChartsColors,
        type: 'solid'
    }
};

var chart = new ApexCharts(document.querySelector("#revenue-expenses-charts"), options);
chart.render();