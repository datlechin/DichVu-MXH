/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Analytics sales init js
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

// world map with line & markers

var vectorMapWorldLineColors = getChartColorsArray("users-by-country");
var worldlinemap = new jsVectorMap({
    map: "world_merc",
    selector: "#users-by-country",
    zoomOnScroll: false,
    zoomButtons: false,
    markers: [{
            name: "Greenland",
            coords: [72, -42]
        },
        {
            name: "Canada",
            coords: [56.1304, -106.3468]
        },
        {
            name: "Brazil",
            coords: [-14.2350, -51.9253]
        },
        {
            name: "Egypt",
            coords: [26.8206, 30.8025]
        },
        {
            name: "Russia",
            coords: [61, 105]
        },
        {
            name: "China",
            coords: [35.8617, 104.1954]
        },
        {
            name: "United States",
            coords: [37.0902, -95.7129]
        },
        {
            name: "Norway",
            coords: [60.472024, 8.468946]
        },
        {
            name: "Ukraine",
            coords: [48.379433, 31.16558]
        },
    ],
    lines: [{
            from: "Canada",
            to: "Egypt"
        },
        {
            from: "Russia",
            to: "Egypt"
        },
        {
            from: "Greenland",
            to: "Egypt"
        },
        {
            from: "Brazil",
            to: "Egypt"
        },
        {
            from: "United States",
            to: "Egypt"
        },
        {
            from: "China",
            to: "Egypt"
        },
        {
            from: "Norway",
            to: "Egypt"
        },
        {
            from: "Ukraine",
            to: "Egypt"
        },
    ],
    regionStyle: {
        initial: {
            stroke: "#9599ad",
            strokeWidth: 0.25,
            fill: vectorMapWorldLineColors,
            fillOpacity: 1,
        },
    },
    lineStyle: {
        animation: true,
        strokeDasharray: "6 3 6",
    },
})


// Countries charts

var barchartCountriesColors = getChartColorsArray("countries_charts");
var options = {
    series: [{
        data: [1010, 1640, 490, 1255, 1050, 689, 800, 420, 1085, 589],
        name: 'Sessions',
    }],
    chart: {
        type: 'bar',
        height: 436,
        toolbar: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            horizontal: true,
            distributed: true,
            dataLabels: {
                position: 'top',
            },
        }
    },
    colors: barchartCountriesColors,
    dataLabels: {
        enabled: true,
        offsetX: 32,
        style: {
            fontSize: '12px',
            fontWeight: 400,
            colors: ['#adb5bd']
        }
    },

    legend: {
        show: false,
    },
    grid: {
        show: false,
    },
    xaxis: {
        categories: ['India', 'United States', 'China', 'Indonesia', 'Russia', 'Bangladesh', 'Canada', 'Brazil', 'Vietnam', 'UK'],
    },
};

var chart = new ApexCharts(document.querySelector("#countries_charts"), options);
chart.render();

// Heatmap Charts Generatedata

function generateData(count, yrange) {
    var i = 0;
    var series = [];
    while (i < count) {
        var x = (i + 1).toString() + "h";
        var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

        series.push({
            x: x,
            y: y
        });
        i++;
    }
    return series;
}

// Basic Heatmap Charts
var chartHeatMapBasicColors = getChartColorsArray("audiences-sessions-country-charts");
var options = {
    series: [{
            name: 'Sat',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Fri',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Thu',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Wed',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Tue',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Mon',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Sun',
            data: generateData(18, {
                min: 0,
                max: 90
            })
        }
    ],
    chart: {
        height: 400,
        type: 'heatmap',
        offsetX: 0,
        offsetY: -8,
        toolbar: {
            show: false
        }
    },
    plotOptions: {
        heatmap: {
            colorScale: {
                ranges: [{
                        from: 0,
                        to: 50,
                        color: chartHeatMapBasicColors[0]
                    },
                    {
                        from: 51,
                        to: 100,
                        color: chartHeatMapBasicColors[1]
                    },
                ],
            },

        }
    },
    dataLabels: {
        enabled: false
    },
    legend: {
        show: true,
        horizontalAlign: 'center',
        offsetX: 0,
        offsetY: 20,
        markers: {
            width: 20,
            height: 6,
            radius: 2,
        },
        itemMargin: {
            horizontal: 12,
            vertical: 0
        },
    },
    colors: chartHeatMapBasicColors,
    tooltip: {
        y: [{
            formatter: function (y) {
                if (typeof y !== "undefined") {
                    return y.toFixed(0) + "k";
                }
                return y;
            }
        }]
    }
};

var chart = new ApexCharts(document.querySelector("#audiences-sessions-country-charts"), options);
chart.render();

// Audiences metrics column charts

var chartAudienceColumnChartsColors = getChartColorsArray("audiences_metrics_charts");
var columnoptions = {
    series: [{
        name: 'Last Year',
        data: [25.3, 12.5, 20.2, 18.5, 40.4, 25.4, 15.8, 22.3, 19.2, 25.3, 12.5, 20.2]
    }, {
        name: 'Current Year',
        data: [36.2, 22.4, 38.2, 30.5, 26.4, 30.4, 20.2, 29.6, 10.9, 36.2, 22.4, 38.2]
    }],
    chart: {
        type: 'bar',
        height: 309,
        stacked: true,
        toolbar: {
            show: false,
        }
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '20%',
            borderRadius: 6,
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
        fontWeight: 400,
        fontSize: '8px',
        offsetX: 0,
        offsetY: 0,
        markers: {
            width: 9,
            height: 9,
            radius: 4,
        },
    },
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    grid: {
        show: false,
    },
    colors: chartAudienceColumnChartsColors,
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisTicks: {
            show: false,
        },
        axisBorder: {
            show: true,
            strokeDashArray: 1,
            height: 1,
            width: '100%',
            offsetX: 0,
            offsetY: 0
        },
    },
    yaxis: {
        show: false
    },
    fill: {
        opacity: 1
    }
};
var chart = new ApexCharts(document.querySelector("#audiences_metrics_charts"), columnoptions);
chart.render();


// User by devices

var dountchartUserDeviceColors = getChartColorsArray("user_device_pie_charts");
var options = {
    series: [78.56, 105.02, 42.89],
    labels: ["Desktop", "Mobile", "Tablet"],
    chart: {
        type: "donut",
        height: 219,
    },
    plotOptions: {
        pie: {
            size: 100,
            donut: {
                size: "76%",
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
        position: 'bottom',
        horizontalAlign: 'center',
        offsetX: 0,
        offsetY: 0,
        markers: {
            width: 20,
            height: 6,
            radius: 2,
        },
        itemMargin: {
            horizontal: 12,
            vertical: 0
        },
    },
    stroke: {
        width: 0
    },
    yaxis: {
        labels: {
            formatter: function (value) {
                return value + "k" + " Users";
            }
        },
        tickAmount: 4,
        min: 0
    },
    colors: dountchartUserDeviceColors,
};

var chart = new ApexCharts(document.querySelector("#user_device_pie_charts"), options);
chart.render();