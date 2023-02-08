
Highcharts.chart('chart_current', {
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
        min: 20.00,
        max: 20.02,
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
        name: 'Current',
        data: [20.0128, 20.0131, 20.0128, 20.0126, 20.0129, 20.0131, 20.0133, 20.0127, 20.0129, 20.0128]
    }]
});