
Highcharts.chart('chart_test', {


    chart : {
        type : 'area',    			// 곡선형 그래프

        zoomType : 'x',				// x축 방향으로 그래프 그리기 가능
        events : {	        		// 차트 이벤트
            load : function() {
                var series = this.series[0];	// Series의 index 0을 대입
                var i = 0;

                /*
                 * 500ms단위로 데이터를 받아서 동적 그래프에 그려주기 위한 Interval함수
                 */
                setInterval(function() {

                    x = (new Date()).getTime(); 	// 현재 시간
                    y = arr[i];			// 파싱한 데이터
                    i++;				// index값 증가

                    console.log("X Data insert : " + y);
                    series.addPoint([ x, y ], true, true);		// series에 데이터 추가

                }, 500);			// interval end
            }		        		// load     end
        }						// events   end
    },					        	// charts   end

    tooltip : {
        valueSuffix:'%',
        crosshairs : [ false, true ],	// 특정 포인트를 짚으면 [x, y] 축 둘중 하나의 축에 대한 라인이 생긴다.
        valueDecimals : 2		// long형 데이터를 받기 위함
    },

    xAxis : {
        type : 'int'					// x축 단위

    },

    yAxis : {
        labels : {
            formatter : function() {
                return this.value + ' %';     // y축 단위
            }					// formatter end
        },						// labels    end
        type : 'linear',				// 선형 그래프
        gridLineWidth : 1				// 선 굵기
    },
    title: {
        text: ' '
    },
    legend: {
        enabled: false
    },
    /*
     * 데이터 -> 그래프 삽입 부분
     */
    series : [ {
        data: [1,2,3,4,5,6,7,8,9],
/*        data : (function() {

            var data = [], time = (new Date()).getTime(), i;	// 보여질 데이터, 시간, 반복문 인자

            for (i = -19; i <= 0; i++) {
                data.push({
                    x : time + i * 1000
                });
            }
            return data;
        })(),*/
        name : 'Percent'            				// 데이터 이름
    }

    ],
    // 하단 highchart.com 글씨 삭제
    credits: {
        enabled: false
    },
    // 상단 context menu 제거
    exporting: {
        enabled: false
    }
});