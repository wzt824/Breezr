
$(function(){
    table1();
    table2();

})
function table1(){
    var myChart1 = echarts.init(document.getElementById("chartone"));
    options = {
        backgroundColor:'#FFFFFF',
        title: {
            text: 'OverView of Latest Month',
            x:'center',
            textStyle:{
                fontSize:14,
                textAlign:'center'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer:{
                type:"shadow"
            }
        },
        legend: {
            data:['SiteA','SiteB'],
            top:'18',            // 距离容器顶端的距离
            icon: "rect",
            //  这个字段控制形状  类型包括 circle，rect ，roundRect，triangle，diamond，pin，arrow，none

            itemWidth: 20,  // 设置宽度

            itemHeight: 10, // 设置高度

            itemGap: 40 // 设置间距

        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            x2: 80,
            y2: 30,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,         // 坐标轴两边留白策略
            splitLine: {                // 网格线 x轴对应的是否显示
                show: true
            },
            //x的文字
            axisLabel: {
                interval: 0,    //强制文字产生间隔
                textStyle: {    //文字样式
                    color: "black",
                    fontSize: 14,
                    fontFamily: 'Microsoft YaHei'
                }
            },
            axisLine:{
                lineStyle:{
                    color:'#c7c7c7',
                    width:2,//这里是为了突出显示加上的
                }
            },
            data: ['January','February','March','April','May','June','July']
        },

        yAxis: {
            type: 'value',
            min: -100,
            max: 100,
            interval: 50,
            splitLine: {                // 网格线 y轴对应的是否显示
                show: true
            },
            axisLine:{
                lineStyle:{
                    color:'#c7c7c7',
                    width:2,//这里是为了突出显示加上的
                }
            }
        },

        series: [

            {
                name:'SiteA',
                type:'line',
                symbol:'circle',//拐点样式
                symbolSize: 6,//拐点大小
                symbolColor:'#ff6384',
                itemStyle : {
                    normal : {
                        color:"#ff6384",
                        lineStyle:{
                            width:3,//折线宽度
                            color:"#ff6384"//折线颜色
                        }
                    }
                },
                smooth:true,
                data:[30, -92, 62, 41,  79, 68, 69]

            },
            {
                name:'SiteB',
                type:'line',
                symbol:'circle',//拐点样式
                symbolSize: 6,//拐点大小
                itemStyle : {
                    normal : {
                        color:"#3fa6ec",
                        lineStyle:{
                            width:3,//折线宽度
                            color:"#3fa6ec"//折线颜色
                        }
                    }
                },

                smooth:true,
                data:[-39, 12, -3,37, -21, -93, -11]

            }
        ]
    }
    myChart1.setOption(options);
}
function table2(){
    var myChart2 = echarts.init(document.getElementById("charttwo"));
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)",
            border:'5px solid transparents',//默认值，提示边框颜色
            borderWidth: 0,//默认值，提示边框线宽，单位px，默认为0（无边框）

            padding: 5,//默认值，提示内边距，单位px，默认各方向内边距为5，接受数组分别设定上右下左边距，同css
        },

        legend: {
            orient: 'horizontal',
            x: 'center',               // 水平安放位置，默认为全图居中，可选为：                    // 'center' ¦ 'left' ¦ 'right'                    // ¦ {number}（x坐标，单位px）
            y: 'top',                             // 'top' ¦ 'bottom' ¦ 'center'

            data: ['USA','Canada','Indai','China','Russia'],
            // orient: 'horizontal',      // 布局方式，默认为水平布局，可选为：
            // 'horizontal' ¦ 'vertical'

        },
        series: [{
            type:'pie',
            radius: '68%',
            clockwise: false,
            data: [{
                value: 57,
                name:'USA'

            }, {
                value: 51,
                name:'Canada'

            }, {
                value: 70,
                name:'Indai'

            }, {
                value: 12,
                name:'China'
            }, {
                value: 10,
                name:'Russia'

            }],
            label: {
                normal: {
                    textStyle: {
                        color: '#999',
                        fontSize: 14,
                    }
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    borderWidth: 4,
                    borderColor: '#ffffff',
                },
                emphasis: {
                    borderWidth: 0,
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }],
        color: [
            '#ff6384',
            '#ff9f40',
            '#ffcd56',
            '#4bc0c0',
            '#36a2eb'
        ],
        backgroundColor: '#fff'
    };
    myChart2.setOption(option);
}