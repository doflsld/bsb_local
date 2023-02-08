var count = normal + warning + fault;
var rate = normal/count*100;

var today = new Date();
var month = (today.getMonth() + 1) + '.';
var date = today.getDate();

Highcharts.chart('chart_div', {
    colors : ['#EF7B00'],
    chart: {
        type: 'area'
    },
    title: {
        text: ' '
    },
    xAxis: {
        categories: [month+(date-9), month+(date-8), month+(date-7), month+(date-6), month+(date-5), month+(date-4), month+(date-3), month+(date-2), month+(date-1), month+date]
    },
    yAxis: {
        labels : {
            formatter : function() {
                return this.value + ' %';
            }
        },
        max: 100,
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
        valueSuffix:'%'
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
        name: 'Percent',
        data: [50, 50, 50, 50, 50, 50, 50, 50, 50, rate]
    }]
});