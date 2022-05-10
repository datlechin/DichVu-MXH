/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Sellers init js
*/


// get colors array from the string
function getChartColorsArray(chartId) {
    if (document.getElementById(chartId) !== null) {
        var colors = document.getElementById(chartId).getAttribute("data-colors");
        colors = JSON.parse(colors);
        return colors.map(function (value) {
            var newValue = value.replace(" ", "");
            if (newValue.indexOf(",") === -1) {
                var color = getComputedStyle(document.documentElement).getPropertyValue(
                    newValue
                );
                if (color) return color;
                else return newValue;
            } else {
                var val = value.split(",");
                if (val.length == 2) {
                    var rgbaColor = getComputedStyle(
                        document.documentElement
                    ).getPropertyValue(val[0]);
                    rgbaColor = "rgba(" + rgbaColor + "," + val[1] + ")";
                    return rgbaColor;
                } else {
                    return newValue;
                }
            }
        });
    }
}

//Chart-seller 1
var sellerlinecolor1 = getChartColorsArray("chart-seller1");
var sparklineoptions1 = {
    series: [{
        data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
    }, ],
    chart: {
        type: "area",
        height: 50,
        sparkline: {
            enabled: true,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: sellerlinecolor1,
    tooltip: {
        fixed: {
            enabled: false,
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return "";
                },
            },
        },
        marker: {
            show: false,
        },
    },
};
var sparklinechart1 = new ApexCharts(
    document.querySelector("#chart-seller1"),
    sparklineoptions1
);
sparklinechart1.render();

//Chart-seller 2
var sellerlinecolor2 = getChartColorsArray("chart-seller2");
var sparklineoptions1 = {
    series: [{
        data: [12, 14, 2, 47, 42, 15, 35, 75, 20, 67, 89],
    }, ],
    chart: {
        type: "area",
        height: 50,
        sparkline: {
            enabled: true,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: sellerlinecolor2,
    tooltip: {
        fixed: {
            enabled: false,
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return "";
                },
            },
        },
        marker: {
            show: false,
        },
    },
};
var sparklinechart2 = new ApexCharts(
    document.querySelector("#chart-seller2"),
    sparklineoptions1
);
sparklinechart2.render();

//Chart-seller 3
var sellerlinecolor3 = getChartColorsArray("chart-seller3");
var sparklineoptions1 = {
    series: [{
        data: [45, 20, 8, 42, 30, 5, 35, 79, 22, 54, 64],
    }, ],
    chart: {
        type: "area",
        height: 50,
        sparkline: {
            enabled: true,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: sellerlinecolor3,
    tooltip: {
        fixed: {
            enabled: false,
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return "";
                },
            },
        },
        marker: {
            show: false,
        },
    },
};
var sparklinechart2 = new ApexCharts(
    document.querySelector("#chart-seller3"),
    sparklineoptions1
);
sparklinechart2.render();

//Chart-seller 4
var sellerlinecolor4 = getChartColorsArray("chart-seller4");
var sparklineoptions1 = {
    series: [{
        data: [26, 15, 48, 12, 47, 19, 35, 19, 85, 68, 50],
    }, ],
    chart: {
        type: "area",
        height: 50,
        sparkline: {
            enabled: true,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: sellerlinecolor4,
    tooltip: {
        fixed: {
            enabled: false,
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return "";
                },
            },
        },
        marker: {
            show: false,
        },
    },
};
var sparklinechart2 = new ApexCharts(
    document.querySelector("#chart-seller4"),
    sparklineoptions1
);
sparklinechart2.render();


//Chart-seller 5
var sellerlinecolor5 = getChartColorsArray("chart-seller5");
var sparklineoptions1 = {
    series: [{
        data: [60, 67, 12, 49, 6, 78, 63, 51, 33, 8, 16],
    }, ],
    chart: {
        type: "area",
        height: 50,
        sparkline: {
            enabled: true,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: sellerlinecolor5,
    tooltip: {
        fixed: {
            enabled: false,
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return "";
                },
            },
        },
        marker: {
            show: false,
        },
    },
};
var sparklinechart2 = new ApexCharts(
    document.querySelector("#chart-seller5"),
    sparklineoptions1
);
sparklinechart2.render();


//Chart-seller 6
var sellerlinecolor6 = getChartColorsArray("chart-seller6");
var sparklineoptions1 = {
    series: [{
        data: [78, 63, 51, 33, 8, 16, 60, 67, 12, 49, ],
    }, ],
    chart: {
        type: "area",
        height: 50,
        sparkline: {
            enabled: true,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: sellerlinecolor6,
    tooltip: {
        fixed: {
            enabled: false,
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return "";
                },
            },
        },
        marker: {
            show: false,
        },
    },
};
var sparklinechart2 = new ApexCharts(
    document.querySelector("#chart-seller6"),
    sparklineoptions1
);
sparklinechart2.render();


//Chart-seller 7
var sellerlinecolor7 = getChartColorsArray("chart-seller7");
var sparklineoptions1 = {
    series: [{
        data: [15, 35, 75, 20, 67, 8, 42, 30, 5, 35],
    }, ],
    chart: {
        type: "area",
        height: 50,
        sparkline: {
            enabled: true,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: sellerlinecolor7,
    tooltip: {
        fixed: {
            enabled: false,
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return "";
                },
            },
        },
        marker: {
            show: false,
        },
    },
};
var sparklinechart2 = new ApexCharts(
    document.querySelector("#chart-seller7"),
    sparklineoptions1
);
sparklinechart2.render();


//Chart-seller 8
var sellerlinecolor8 = getChartColorsArray("chart-seller8");
var sparklineoptions1 = {
    series: [{
        data: [45, 32, 68, 55, 36, 10, 48, 25, 74, 54],
    }, ],
    chart: {
        type: "area",
        height: 50,
        sparkline: {
            enabled: true,
        },
    },
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100],
        },
    },
    stroke: {
        curve: "smooth",
        width: 2,
    },
    colors: sellerlinecolor8,
    tooltip: {
        fixed: {
            enabled: false,
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: function (seriesName) {
                    return "";
                },
            },
        },
        marker: {
            show: false,
        },
    },
};
var sparklinechart2 = new ApexCharts(
    document.querySelector("#chart-seller8"),
    sparklineoptions1
);
sparklinechart2.render();