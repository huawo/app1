$(function(){



	  var myChart = echarts.init(document.getElementById('main'));

        // 指定图表的配置项和数据
       // app.title = '堆叠条形图';

option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['直接访问', '邮件营销','联盟广告','视频广告','搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['周一','周二','周三','周四','周五','周六','周日']
    },
    series: [
        {
            name: '直接访问',
            type: 'bar',
            stack: '总量',
            itemStyle:{
            	normal:{
            		
            			color:'#330000'
            		
            	}
            },
            label: {
                normal: {
                    show: true,
                    position: 'insideRight',

                }
            },
            data: [320, 302, 301, 334, 390, 330, 320]
        },
        {
            name: '邮件营销',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [420, 232, 301, 234, 190, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [320, 282, 291, 334, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [350, 332, 311, 364, 390, 330, 410]
        },
        {
            name: '搜索引擎',
            type: 'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: [720, 732, 801, 834, 1190, 1230, 1220]

        }
    ]
};

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);



;	
	var toggleMenu = function(){
			if (swiper.previousIndex == 0)
				swiper.slidePrev()
		}
		, menuButton = document.getElementsByClassName('menu-button')[0]
		, swiper = new Swiper('.swiper-container', {
			slidesPerView: 'auto'
			, initialSlide: 1
			, resistanceRatio: .00000000000001
			, onSlideChangeStart: function(slider) {
				if (slider.activeIndex == 0) {
					menuButton.classList.add('cross')
					menuButton.removeEventListener('click', toggleMenu, false)
				} else
					menuButton.classList.remove('cross')
			}
			, onSlideChangeEnd: function(slider) {
				if (slider.activeIndex == 0)
					menuButton.removeEventListener('click', toggleMenu, false)
				else
					menuButton.addEventListener('click', toggleMenu, false)
			}
			, slideToClickedSlide: true
		});
























		$("#alert").click(function(){
			
			$("#hd").animate({
				right:0
			},200);

			$("#max").css({
				display:"block",

			})

		});


		$("#max").click(function(){
			$("#hd").animate({
				right:"-16rem"
			},100);

			$("#max").css({
				display:"none",

			})


		})


		$(".xiala").click(function(){

			$(".q").animate({

				display:"block"
			},2000)

		});






		 $('#container').highcharts({
	        chart: {
	            type: 'line'
	        },
	        title: {
	            text: '月平均气温'
	        },
	        subtitle: {
	            text: '随便玩玩'
	        },
	        xAxis: {
	            categories: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
	        },
	        yAxis: {
	            title: {
	                text: '气温 (°C)'
	            }
	        },
	        plotOptions: {
	            line: {
	                dataLabels: {
	                    enabled: true          // 开启数据标签
	                },
	                enableMouseTracking: false // 关闭鼠标跟踪，对应的提示框、点击事件会失效
	            }
	        },
	        series: [{
	            name: '上海',
	            data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
	        }, {
	            name: '杭州',
	            data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
	        }]
	    });





console.log(111111)






})