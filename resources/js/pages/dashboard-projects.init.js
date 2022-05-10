/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Project Dashboard init js
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

// Projects Overview

var linechartcustomerColors = getChartColorsArray("projects-overview-chart");
var options = {
    series: [{
        name: 'Number of Projects',
        type: 'bar',
        data: [34, 65, 46, 68, 49, 61, 42, 44, 78, 52, 63, 67]
    }, {
        name: 'Revenue',
        type: 'area',
        data: [89.25, 98.58, 68.74, 108.87, 77.54, 84.03, 51.24, 28.57, 92.57, 42.36, 88.51, 36.57]
    }, {
        name: 'Active Projects',
        type: 'bar',
        data: [8, 12, 7, 17, 21, 11, 5, 9, 7, 29, 12, 35]
    }],
    chart: {
        height: 374,
        type: 'line',
        toolbar: {
            show: false,
        }
    },
    stroke: {
        curve: 'smooth',
        dashArray: [0, 3, 0],
        width: [0,1, 0],
    },
    fill: {
        opacity: [1, 0.1, 1]
    },
    markers: {
        size: [0, 4, 0],
        strokeWidth: 2,
        hover: {
            size: 4,
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisTicks: {
            show: false
        },
        axisBorder: {
            show: false
        }
    },
    grid: {
        show: true,
        xaxis: {
            lines: {
                show: true,
            }
        },
        yaxis: {
            lines: {
                show: false,
            }
        },
        padding: {
            top: 0,
            right: -2,
            bottom: 15,
            left: 10
        },
    },
    legend: {
        show: true,
        horizontalAlign: 'center',
        offsetX: 0,
        offsetY: -5,
        markers: {
            width: 9,
            height: 9,
            radius: 6,
        },
        itemMargin: {
            horizontal: 10,
            vertical: 0
        },
    },
    plotOptions: {
        bar: {
            columnWidth: '30%',
            barHeight: '70%'
        }
    },
    colors: linechartcustomerColors,
    tooltip: {
        shared: true,
        y: [{
            formatter: function (y) {
              if(typeof y !== "undefined") {
                return  y.toFixed(0);
              }
              return y;
              
            }
          }, {
            formatter: function (y) {
              if(typeof y !== "undefined") {
                return   "$" + y.toFixed(2) + "k";
              }
              return y;
              
            }
          }, {
            formatter: function (y) {
              if(typeof y !== "undefined") {
                return y.toFixed(0);
              }
              return y;
              
            }
          }]
    }
};
var chart = new ApexCharts(document.querySelector("#projects-overview-chart"), options);
chart.render();

//Radial chart data
var isApexSeriesData = {};
var isApexSeries = document.querySelectorAll("[data-chart-series]");
isApexSeries.forEach(function (element) {    
    var isApexSeriesVal = element.attributes;
    if (isApexSeriesVal["data-chart-series"]) { 
        isApexSeriesData.series =  isApexSeriesVal["data-chart-series"].value.toString();
        var radialbarhartoneColors = getChartColorsArray(isApexSeriesVal["id"].value.toString());
        var options = {
            series: [isApexSeriesData.series],
            
            chart: {
                type: 'radialBar',
                width: 36,
                height: 36,
                sparkline: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: false
            },
            plotOptions: {
                radialBar: {
                    hollow: {
                        margin: 0,
                        size: '50%'
                    },
                    track: {
                        margin: 1
                    },
                    dataLabels: {
                        show: false
                    }
                }
            },
            colors: radialbarhartoneColors
        };

        var chart = new ApexCharts(document.querySelector("#"+isApexSeriesVal["id"].value.toString()), options);
        chart.render();

    }
})

// Project Status charts

var donutchartProjectsStatusColors = getChartColorsArray("prjects-status");
var options = {
    series: [125, 42, 58, 89],
    labels: ["Completed", "In Progress", "Yet to Start", "Cancelled"],
    chart: {
        type: "donut",
        height: 230,
    },
    plotOptions: {
        pie: {
            size: 100,
            offsetX: 0,
            offsetY: 0,
            donut: {
                size: "90%",
                labels: {
                    show: false,
                }
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    legend: {
        show: false,
    },
    stroke: {
        lineCap: "round",
        width: 0
    },
    colors: donutchartProjectsStatusColors,
};

var chart = new ApexCharts(document.querySelector("#prjects-status"), options);
chart.render();