
Highcharts.chart('chart_voltage', {
    colors : ['#EF7B00'],
    chart: {
        type: 'area'
    },
    title: {
        text: ' '
    },
    xAxis: {
        /*categories: ['09.13', '09.14', '09.15', '09.16', '09.17', '09.18', '09.19', '09.20', '09.21', '09.22']*/
        categories: ['2022-11-18 09:55', '2022-11-18 09:56', '2022-11-18 09:57', '2022-11-18 09:58', '2022-11-18 09:59', '2022-11-18 10:00', '2022-11-18 10:01', '2022-11-18 10:02', '2022-11-18 10:03', '2022-11-18 10:04']
    },
    yAxis: {
        /*max: 100,*/
        max: 89,
        title: {
            text: ' '
        }
    },
    legend: {
        enabled: false
    },
    // 하단 highchart.com 글씨 삭제
    credits: {
        enabled: false
    },
    // 상단 context menu 제거
    exporting: {
        enabled: false
    },
    tooltip: {
        valueSuffix:''
    },
    plotOptions: {
        series: {

        },
        area: {
            stacking: 'normal',
            lineColor: '#FFFFFF',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#FFFFFF'
            }
        }
    },
    series: [{
        name: 'Voltage',
        data: [88.1287, 88.1741, 88.2913, 88.3738, 88.4277, 88.4717, 88.4993, 88.5215, 88.5347, 88.5723]
    }]
});