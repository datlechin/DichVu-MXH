/*
Template Name: Velzon - Admin & Dashboard Template
Author: Themesbrand
Website: https://Themesbrand.com/
Contact: Themesbrand@gmail.com
File: Echarts Init Js File
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


//  line chart
var chartLineColors = getChartColorsArray("chart-line");
var chartDom = document.getElementById('chart-line');
var myChart = echarts.init(chartDom);
var option;
option = {
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '4%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
    }],
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
    color: chartLineColors
};

if (option && typeof option === "object") {
    option && myChart.setOption(option);
}


// line stacked charts
var chartLineStackedColors = getChartColorsArray("chart-line-stacked");
var chartDom = document.getElementById('chart-line-stacked');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
        textStyle: { //The style of the legend text
            color: '#858d98',
        },
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    series: [{
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210],
        },
        {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ],
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
    color: chartLineStackedColors
};

option && myChart.setOption(option);

// area chart
var chartAreaColors = getChartColorsArray("chart-area");
var chartDom = document.getElementById('chart-area');
var myChart = echarts.init(chartDom);
var option;

option = {
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '4%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }],
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
    color: chartAreaColors[0],
    backgroundColor: chartAreaColors[1],
};

option && myChart.setOption(option);

// area stacked chart
var chartAreaStackedColors = getChartColorsArray("chart-area-stacked");
var chartDom = document.getElementById('chart-area-stacked');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
        textStyle: { //The style of the legend text
            color: '#858d98',
        },
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
    }],
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
    color: chartAreaStackedColors,
    series: [{
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

option && myChart.setOption(option);

// chart-step-line

var chartStepLineColors = getChartColorsArray("chart-step-line");
var chartDom = document.getElementById('chart-step-line');
var myChart = echarts.init(chartDom);
var option;

option = {

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Step Start', 'Step Middle', 'Step End'],
        textStyle: { //The style of the legend text
            color: '#858d98',
        },
    },
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
    color: chartStepLineColors,
    series: [{
            name: 'Step Start',
            type: 'line',
            step: 'start',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Step Middle',
            type: 'line',
            step: 'middle',
            data: [220, 282, 201, 234, 290, 430, 410]
        },
        {
            name: 'Step End',
            type: 'line',
            step: 'end',
            data: [450, 432, 401, 454, 590, 530, 510]
        }
    ]
};

option && myChart.setOption(option);


//chart-line-y-category
var chartLineYColors = getChartColorsArray("chart-line-y-category");
var chartDom = document.getElementById('chart-line-y-category');
var myChart = echarts.init(chartDom);
var option;

option = {
    legend: {
        data: ['Altitude (km) vs. temperature (°C)'],
        textStyle: { //The style of the legend text
            color: '#858d98',
        },
    },
    tooltip: {
        trigger: 'axis',
        formatter: 'Temperature : <br/>{b}km : {c}°C'
    },
    grid: {
        left: '1%',
        right: '0%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} °C'
        },
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    yAxis: {
        type: 'category',
        axisLine: {
            onZero: false,
            lineStyle: {
                color: '#858d98'
            },
        },
        axisLabel: {
            formatter: '{value} km'
        },
        boundaryGap: false,
        data: ['0', '10', '20', '30', '40', '50', '60', '70', '80'],
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
    color: chartLineYColors,
    series: [{
        name: 'Altitude (km) vs. temperature (°C)',
        type: 'line',
        symbolSize: 10,
        symbol: 'circle',
        smooth: true,
        lineStyle: {
            width: 3,
            shadowColor: 'rgba(0,0,0,0.3)',
            shadowBlur: 10,
            shadowOffsetY: 8
        },
        data: [15, -50, -56.5, -46.5, -22.1, -2.5, -27.7, -55.7, -76.5]
    }]
};

option && myChart.setOption(option);

// chart-bar
var chartBarColors = getChartColorsArray("chart-bar");
var chartDom = document.getElementById('chart-bar');
var myChart = echarts.init(chartDom);
var option;

option = {
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
    color: chartBarColors,
    series: [{
        data: [120, 200, 150, 80, 70, 110, 130],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
        }
    }]
};

option && myChart.setOption(option);

// chart-bar-label-rotation

var app = {};
var chartBarLabelRotationColors = getChartColorsArray("chart-bar-label-rotation");
var chartDom = document.getElementById('chart-bar-label-rotation');
var myChart = echarts.init(chartDom);
var option;

var posList = [
    'left',
    'right',
    'top',
    'bottom',
    'inside',
    'insideTop',
    'insideLeft',
    'insideRight',
    'insideBottom',
    'insideTopLeft',
    'insideTopRight',
    'insideBottomLeft',
    'insideBottomRight'
];
app.configParameters = {
    rotate: {
        min: -90,
        max: 90
    },
    align: {
        options: {
            left: 'left',
            center: 'center',
            right: 'right'
        }
    },
    verticalAlign: {
        options: {
            top: 'top',
            middle: 'middle',
            bottom: 'bottom'
        }
    },
    position: {
        options: posList.reduce(function (map, pos) {
            map[pos] = pos;
            return map;
        }, {})
    },
    distance: {
        min: 0,
        max: 100
    }
};
app.config = {
    rotate: 90,
    align: 'left',
    verticalAlign: 'middle',
    position: 'insideBottom',
    distance: 15,
    onChange: function () {
        var labelOption = {
            rotate: app.config.rotate,
            align: app.config.align,
            verticalAlign: app.config.verticalAlign,
            position: app.config.position,
            distance: app.config.distance
        };
        myChart.setOption({
            series: [{
                    label: labelOption
                },
                {
                    label: labelOption
                },
                {
                    label: labelOption
                },
                {
                    label: labelOption
                }
            ]
        });
    }
};
var labelOption = {
    show: true,
    position: app.config.position,
    distance: app.config.distance,
    align: app.config.align,
    verticalAlign: app.config.verticalAlign,
    rotate: app.config.rotate,
    formatter: '{c}  {name|{a}}',
    fontSize: 16,
    rich: {
        name: {}
    }
};
option = {
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        containLabel: true
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['Forest', 'Steppe', 'Desert', 'Wetland'],
        textStyle: { //The style of the legend text
            color: '#858d98',
        },
    },
    color: chartBarLabelRotationColors,
    toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {
                show: true
            },
            dataView: {
                show: true,
                readOnly: false
            },
            magicType: {
                show: true,
                type: ['line', 'bar', 'stack']
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
            }
        }
    },
    xAxis: [{
        type: 'category',
        axisTick: {
            show: false
        },
        data: ['2012', '2013', '2014', '2015', '2016'],
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
    }],
    yAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
    series: [{
            name: 'Forest',
            type: 'bar',
            barGap: 0,
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390]
        },
        {
            name: 'Steppe',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290]
        },
        {
            name: 'Desert',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190]
        },
        {
            name: 'Wetland',
            type: 'bar',
            label: labelOption,
            emphasis: {
                focus: 'series'
            },
            data: [98, 77, 101, 99, 40]
        }
    ]
};

option && myChart.setOption(option);

// chart-horizontal-bar
var chartBarHorizontalColors = getChartColorsArray("chart-horizontal-bar");
var chartDom = document.getElementById('chart-horizontal-bar');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        textStyle: { //The style of the legend text
            color: '#858d98',
        },
    },
    grid: {
        left: '0%',
        right: '4%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        boundaryGap: [0, 0.01],
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World'],
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
    color: chartBarHorizontalColors,
    series: [{
            name: '2011',
            type: 'bar',
            data: [18203, 23489, 29034, 104970, 131744, 630230]
        },
        {
            name: '2012',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
        }
    ]
};

option && myChart.setOption(option);

// chart-horizontal-bar-stacked
var chartBarStackedColors = getChartColorsArray("chart-horizontal-bar-stacked");
var chartDom = document.getElementById('chart-horizontal-bar-stacked');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            // Use axis to trigger tooltip
            type: 'shadow' // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    legend: {
        textStyle: { //The style of the legend text
            color: '#858d98',
        },
    },
    grid: {
        left: '1%',
        right: '3%',
        bottom: '0%',
        containLabel: true
    },
    xAxis: {
        type: 'value',
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    color: chartBarStackedColors,
    yAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
    series: [{
            name: 'Direct',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: 'Mail Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Affiliate Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Video Ad',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [150, 212, 201, 154, 190, 330, 410]
        },
        {
            name: 'Search Engine',
            type: 'bar',
            stack: 'total',
            label: {
                show: true
            },
            emphasis: {
                focus: 'series'
            },
            data: [820, 832, 901, 934, 1290, 1330, 1320]
        }
    ]
};

option && myChart.setOption(option);

// Pie charts
var chartPieColors = getChartColorsArray("chart-pie");
var chartDom = document.getElementById('chart-pie');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        textStyle: { //The style of the legend text
            color: '#858d98',
        },
    },
    color: chartPieColors,
    series: [{
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [{
                value: 1048,
                name: 'Search Engine'
            },
            {
                value: 735,
                name: 'Direct'
            },
            {
                value: 580,
                name: 'Email'
            },
            {
                value: 484,
                name: 'Union Ads'
            },
            {
                value: 300,
                name: 'Video Ads'
            }
        ],
        emphasis: {
            itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
        }
    }],
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
};

option && myChart.setOption(option);


// chart doughnut
var chartDoughnutColors = getChartColorsArray("chart-doughnut");
var chartDom = document.getElementById('chart-doughnut');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'item'
    },
    legend: {
        top: '5%',
        left: 'center',
        textStyle: { //The style of the legend text
            color: '#858d98',
        },
    },
    color: chartDoughnutColors,
    series: [{
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        label: {
            show: false,
            position: 'center'
        },
        emphasis: {
            label: {
                show: true,
                fontSize: '16',
                fontWeight: 'bold'
            }
        },
        labelLine: {
            show: false
        },
        data: [{
                value: 1048,
                name: 'Search Engine'
            },
            {
                value: 735,
                name: 'Direct'
            },
            {
                value: 580,
                name: 'Email'
            },
            {
                value: 484,
                name: 'Union Ads'
            },
            {
                value: 300,
                name: 'Video Ads'
            }
        ]
    }],
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
};

option && myChart.setOption(option);


// Basic Scatter Chart
var chartScatterColors = getChartColorsArray("chart-scatter");
var chartDom = document.getElementById('chart-scatter');
var myChart = echarts.init(chartDom);
var option;

option = {
    grid: {
        left: '1%',
        right: '0%',
        bottom: '0%',
        top: '2%',
        containLabel: true
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
    series: [{
        symbolSize: 12,
        data: [
            [10.0, 8.04],
            [8.07, 6.95],
            [13.0, 7.58],
            [9.05, 8.81],
            [11.0, 8.33],
            [14.0, 7.66],
            [13.4, 6.81],
            [10.0, 6.33],
            [14.0, 8.96],
            [12.5, 6.82],
            [9.15, 7.2],
            [11.5, 7.2],
            [3.03, 4.23],
            [12.2, 7.83],
            [2.02, 4.47],
            [1.05, 3.33],
            [4.05, 4.96],
            [6.03, 7.24],
            [12.0, 6.26],
            [12.0, 8.84],
            [7.08, 5.82],
            [5.02, 5.68]
        ],
        type: 'scatter'
    }],
    color: chartScatterColors,
};

option && myChart.setOption(option);


// chart-candlestick
var chartCandlestickColors = getChartColorsArray("chart-candlestick");
var chartDom = document.getElementById('chart-candlestick');
var myChart = echarts.init(chartDom);
var option;

option = {
    grid: {
        left: '1%',
        right: '0%',
        bottom: '0%',
        top: '2%',
        containLabel: true
    },
    xAxis: {
        data: ['2017-10-24', '2017-10-25', '2017-10-26', '2017-10-27'],
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#858d98'
            },
        },
        splitLine: {
            lineStyle: {
                color: "rgba(133, 141, 152, 0.1)"
            }
        }
    },
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
    series: [{
        type: 'candlestick',
        data: [
            [20, 34, 10, 38],
            [40, 35, 30, 50],
            [31, 38, 33, 44],
            [38, 15, 5, 42]
        ],
        itemStyle: {
            normal: {
                color: chartCandlestickColors[0],
                color0: chartCandlestickColors[1],
                borderColor: chartCandlestickColors[0],
                borderColor0: chartCandlestickColors[1]
            }
        }
    }]
};

option && myChart.setOption(option);


// Graph chart
var chartGraphColors = getChartColorsArray("chart-graph");
var chartDom = document.getElementById('chart-graph');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    color: chartGraphColors,
    series: [{
        type: 'graph',
        layout: 'none',
        symbolSize: 50,
        roam: true,
        label: {
            show: true
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
            fontSize: 20
        },
        data: [{
                name: 'Node 1',
                x: 300,
                y: 300
            },
            {
                name: 'Node 2',
                x: 800,
                y: 300
            },
            {
                name: 'Node 3',
                x: 550,
                y: 100
            },
            {
                name: 'Node 4',
                x: 550,
                y: 500
            }
        ],
        // links: [],
        links: [{
                source: 0,
                target: 1,
                symbolSize: [5, 20],
                label: {
                    show: true
                },
                lineStyle: {
                    width: 5,
                    curveness: 0.2
                }
            },
            {
                source: 'Node 2',
                target: 'Node 1',
                label: {
                    show: true
                },
                lineStyle: {
                    curveness: 0.2
                }
            },
            {
                source: 'Node 1',
                target: 'Node 3'
            },
            {
                source: 'Node 2',
                target: 'Node 3'
            },
            {
                source: 'Node 2',
                target: 'Node 4'
            },
            {
                source: 'Node 1',
                target: 'Node 4'
            }
        ],
        lineStyle: {
            opacity: 0.9,
            width: 2,
            curveness: 0
        }
    }],
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
};

option && myChart.setOption(option);

// chart treemap
var chartTreemapColors = getChartColorsArray("chart-treemap");
var chartDom = document.getElementById('chart-treemap');
var myChart = echarts.init(chartDom);
var option;

option = {
    color: chartTreemapColors,
    series: [{
        type: 'treemap',
        data: [{
                name: 'nodeA',
                value: 10,
                children: [{
                        name: 'nodeAa',
                        value: 4
                    },
                    {
                        name: 'nodeAb',
                        value: 6
                    }
                ]
            },
            {
                name: 'nodeB',
                value: 20,
                children: [{
                    name: 'nodeBa',
                    value: 20,
                    children: [{
                        name: 'nodeBa1',
                        value: 20
                    }]
                }]
            }
        ]
    }],
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
};

option && myChart.setOption(option);

// chart-sunburst
var chartSunburstColors = getChartColorsArray("chart-sunburst");
var chartDom = document.getElementById('chart-sunburst');
var myChart = echarts.init(chartDom);
var option;

var data = [{
        name: 'Grandpa',
        children: [{
                name: 'Uncle Leo',
                value: 15,
                children: [{
                        name: 'Cousin Jack',
                        value: 2
                    },
                    {
                        name: 'Cousin Mary',
                        value: 5,
                        children: [{
                            name: 'Jackson',
                            value: 2
                        }]
                    },
                    {
                        name: 'Cousin Ben',
                        value: 4
                    }
                ]
            },
            {
                name: 'Father',
                value: 10,
                children: [{
                        name: 'Me',
                        value: 5
                    },
                    {
                        name: 'Brother Peter',
                        value: 1
                    }
                ]
            }
        ]
    },
    {
        name: 'Nancy',
        children: [{
            name: 'Uncle Nike',
            children: [{
                    name: 'Cousin Betty',
                    value: 1
                },
                {
                    name: 'Cousin Jenny',
                    value: 2
                }
            ]
        }]
    }
];
option = {
    color: chartSunburstColors,
    series: {
        type: 'sunburst',
        // emphasis: {
        //     focus: 'ancestor'
        // },
        data: data,
        radius: [0, '90%'],
        label: {
            rotate: 'radial'
        }
    },
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
};

option && myChart.setOption(option);

// Parallel
var chartParallelColors = getChartColorsArray("chart-parallel");
var chartDom = document.getElementById('chart-parallel');
var myChart = echarts.init(chartDom);
var option;

option = {
    parallelAxis: [{
            dim: 0,
            name: 'Price'
        },
        {
            dim: 1,
            name: 'Net Weight'
        },
        {
            dim: 2,
            name: 'Amount'
        },
        {
            dim: 3,
            name: 'Score',
            type: 'category',
            data: ['Excellent', 'Good', 'OK', 'Bad']
        }
    ],
    grid: {
        left: '0%',
        right: '0%',
        bottom: '0%',
        top: '2%',
        containLabel: true
    },
    color: chartParallelColors,
    series: {
        type: 'parallel',
        lineStyle: {
            width: 4
        },
        data: [
            [12.99, 100, 82, 'Good'],
            [9.99, 80, 77, 'OK'],
            [20, 120, 60, 'Excellent']
        ]
    },
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
};

option && myChart.setOption(option);


// sankey chart
var chartSankeyColors = getChartColorsArray("chart-sankey");
var chartDom = document.getElementById('chart-sankey');
var myChart = echarts.init(chartDom);
var option;

option = {
    color: chartSankeyColors,
    series: {
        type: 'sankey',
        layout: 'none',
        emphasis: {
            focus: 'adjacency'
        },
        data: [{
                name: 'a'
            },
            {
                name: 'b'
            },
            {
                name: 'a1'
            },
            {
                name: 'a2'
            },
            {
                name: 'b1'
            },
            {
                name: 'c'
            }
        ],
        links: [{
                source: 'a',
                target: 'a1',
                value: 5
            },
            {
                source: 'a',
                target: 'a2',
                value: 3
            },
            {
                source: 'b',
                target: 'b1',
                value: 8
            },
            {
                source: 'a',
                target: 'b1',
                value: 3
            },
            {
                source: 'b1',
                target: 'a1',
                value: 1
            },
            {
                source: 'b1',
                target: 'c',
                value: 2
            }
        ]
    },
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
};

option && myChart.setOption(option);

// funnel chart
var chartFunnelColors = getChartColorsArray("chart-sankey");
var chartDom = document.getElementById('chart-funnel');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c}%'
    },
    toolbox: {
        feature: {
            dataView: {
                readOnly: false
            },
            restore: {},
            saveAsImage: {}
        }
    },
    legend: {
        data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order'],
        textStyle: { //The style of the legend text
            color: '#858d98',
        },
    },
    color: chartFunnelColors,
    series: [{
        name: 'Funnel',
        type: 'funnel',
        left: '10%',
        top: 60,
        bottom: 60,
        width: '80%',
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
            show: true,
            position: 'inside'
        },
        labelLine: {
            length: 10,
            lineStyle: {
                width: 1,
                type: 'solid'
            }
        },
        itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
        },
        emphasis: {
            label: {
                fontSize: 20
            }
        },
        data: [{
                value: 60,
                name: 'Visit'
            },
            {
                value: 40,
                name: 'Inquiry'
            },
            {
                value: 20,
                name: 'Order'
            },
            {
                value: 80,
                name: 'Click'
            },
            {
                value: 100,
                name: 'Show'
            }
        ]
    }],
    textStyle: {
        fontFamily: 'Poppins, sans-serif'
    },
};

option && myChart.setOption(option);

// Simple Gauge
var chartGaugeColors = getChartColorsArray("chart-gauge");
var chartDom = document.getElementById('chart-gauge');
var myChart = echarts.init(chartDom);
var option;

option = {
    tooltip: {
        formatter: '{a} <br/>{b} : {c}%'
    },
    color: chartGaugeColors,
    textStyle: {
        fontFamily: 'Poppins, sans-serif',
    },
    series: [{
        name: 'Pressure',
        type: 'gauge',
        progress: {
            show: true
        },
        detail: {
            valueAnimation: true,
            formatter: '{value}',
            color: '#858d98',
        },
        axisLabel: {
            color: '#858d98',
        },
        data: [{
            title: {
                color: '#858d98',
            },
            value: 50,
            name: 'SCORE',
        }]
    }]
};

option && myChart.setOption(option);


// Calendar Heatmap
var chartHeatmapColors = getChartColorsArray("chart-heatmap");
var chartDom = document.getElementById('chart-heatmap');
var myChart = echarts.init(chartDom);
var option;

function getVirtulData(year) {
    year = year || '2017';
    var date = +echarts.number.parseDate(year + '-01-01');
    var end = +echarts.number.parseDate(year + '-12-31');
    var dayTime = 3600 * 24 * 1000;
    var data = [];
    for (var time = date; time <= end; time += dayTime) {
        data.push([
            echarts.format.formatTime('yyyy-MM-dd', time),
            Math.floor(Math.random() * 10000)
        ]);
    }
    return data;
}
option = {
    visualMap: {
        show: false,
        min: 0,
        max: 10000,
    },
    calendar: {
        range: '2017'
    },
    color: chartHeatmapColors,
    textStyle: {
        fontFamily: 'Poppins, sans-serif',
    },
    series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: getVirtulData('2017'),
    },
};

option && myChart.setOption(option);