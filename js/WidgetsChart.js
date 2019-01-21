$(function(){
    myWChart1();
    myWChart2();
    myWChart3();
    myWChart4();
    myWChart5();
    myWChart6();
    newchart1();
    newchart2();
    newchart3();
    newchart4();
    newchart5();
    newchart6();
    newchart7();
    newchart8();
    newchart9();
})

//echarts
var echartsWarp30= document.getElementById('wcharts1');
function resizeWorldMapContainer30() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp30.style.width = document.getElementById('wcharts1').innerWidth+'px';
    echartsWarp30.style.height = document.getElementById('wcharts1').innerHeight+'px';
}
resizeWorldMapContainer30 ();//设置容器高宽
var wChart1 = echarts.init(echartsWarp30);// 基于准备好的dom，初始化echarts实例

//echarts
var echartsWarp31= document.getElementById('wcharts2');
function resizeWorldMapContainer31() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp31.style.width = document.getElementById('wcharts2').innerWidth+'px';
    echartsWarp31.style.height = document.getElementById('wcharts2').innerHeight+'px';
}
resizeWorldMapContainer31 ();//设置容器高宽
var wChart2 = echarts.init(echartsWarp31);// 基于准备好的dom，初始化echarts实例
//echarts
var echartsWarp32= document.getElementById('wcharts3');
function resizeWorldMapContainer32() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp32.style.width = document.getElementById('wcharts3').innerWidth+'px';
    echartsWarp32.style.height = document.getElementById('wcharts3').innerHeight+'px';
}
resizeWorldMapContainer32 ();//设置容器高宽
var wChart3 = echarts.init(echartsWarp32);// 基于准备好的dom，初始化echarts实例
//echarts
var echartsWarp33= document.getElementById('wcharts4');
function resizeWorldMapContainer33() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp33.style.width = document.getElementById('wcharts4').innerWidth+'px';
    echartsWarp33.style.height = document.getElementById('wcharts4').innerHeight+'px';
}
resizeWorldMapContainer33 ();//设置容器高宽
var wChart4 = echarts.init(echartsWarp33);// 基于准备好的dom，初始化echarts实例
//echarts
var echartsWarp34= document.getElementById('wcharts5');
function resizeWorldMapContainer34() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp34.style.width = document.getElementById('wcharts5').innerWidth+'px';
    echartsWarp34.style.height = document.getElementById('wcharts5').innerHeight+'px';
}
resizeWorldMapContainer34();//设置容器高宽
var wChart5= echarts.init(echartsWarp34);// 基于准备好的dom，初始化echarts实例
//echarts
var echartsWarp35= document.getElementById('wcharts6');
function resizeWorldMapContainer35() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp35.style.width = document.getElementById('wcharts6').innerWidth+'px';
    echartsWarp35.style.height = document.getElementById('wcharts6').innerHeight+'px';
}
resizeWorldMapContainer35();//设置容器高宽
var wChart6= echarts.init(echartsWarp35);// 基于准备好的dom，初始化echarts实例

//newcharts部分
var echartsWarp36= document.getElementById('usercharts');
function resizeWorldMapContainer36() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp36.style.width = document.getElementById('usercharts').innerWidth+'px';
    echartsWarp36.style.height = document.getElementById('usercharts').innerHeight+'px';
}
resizeWorldMapContainer36 ();//设置容器高宽
var wChart7 = echarts.init(echartsWarp36);// 基于准备好的dom，初始化echarts实例

var echartsWarp37= document.getElementById('orderscharts');
function resizeWorldMapContainer37() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp37.style.width = document.getElementById('orderscharts').innerWidth+'px';
    echartsWarp37.style.height = document.getElementById('orderscharts').innerHeight+'px';
}
resizeWorldMapContainer37 ();//设置容器高宽
var wChart8 = echarts.init(echartsWarp37);// 基于准备好的dom，初始化echarts实例
//38
var echartsWarp38= document.getElementById('yearlycharts');
function resizeWorldMapContainer38() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp38.style.width = document.getElementById('yearlycharts').innerWidth+'px';
    echartsWarp38.style.height = document.getElementById('yearlycharts').innerHeight+'px';
}
resizeWorldMapContainer38 ();//设置容器高宽
var wChart9= echarts.init(echartsWarp38);// 基于准备好的dom，初始化echarts实例
//39
var echartsWarp39= document.getElementById('totalcharts');
function resizeWorldMapContainer39() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp39.style.width = document.getElementById('totalcharts').innerWidth+'px';
    echartsWarp39.style.height = document.getElementById('totalcharts').innerHeight+'px';
}
resizeWorldMapContainer39();//设置容器高宽
var wChart10= echarts.init(echartsWarp39);// 基于准备好的dom，初始化echarts实例
//40
var echartsWarp40= document.getElementById('Profitcharts');
function resizeWorldMapContainer40() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp40.style.width = document.getElementById('Profitcharts').innerWidth+'px';
    echartsWarp40.style.height = document.getElementById('Profitcharts').innerHeight+'px';
}
resizeWorldMapContainer40();//设置容器高宽
var wChart11= echarts.init(echartsWarp40);// 基于准备好的dom，初始化echarts实例
//41
var echartsWarp41= document.getElementById('yearlycharts2');
function resizeWorldMapContainer41() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp41.style.width = document.getElementById('yearlycharts2').innerWidth+'px';
    echartsWarp41.style.height = document.getElementById('yearlycharts2').innerHeight+'px';
}
resizeWorldMapContainer41();//设置容器高宽
var wChart12= echarts.init(echartsWarp41);// 基于准备好的dom，初始化echarts实例
//42
var echartsWarp42= document.getElementById('userscharts2');
function resizeWorldMapContainer42() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp42.style.width = document.getElementById('userscharts2').innerWidth+'px';
    echartsWarp42.style.height = document.getElementById('userscharts2').innerHeight+'px';
}
resizeWorldMapContainer42();//设置容器高宽
var wChart13= echarts.init(echartsWarp42);// 基于准备好的dom，初始化echarts实例
//43
var echartsWarp43= document.getElementById('orderscharts2');
function resizeWorldMapContainer43() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp43.style.width = document.getElementById('orderscharts2').innerWidth+'px';
    echartsWarp43.style.height = document.getElementById('orderscharts2').innerHeight+'px';
}
resizeWorldMapContainer43();//设置容器高宽
var wChart14= echarts.init(echartsWarp43);// 基于准备好的dom，初始化echarts实例
//44
var echartsWarp44= document.getElementById('map');
function resizeWorldMapContainer44() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp44.style.width = document.getElementById('map').innerWidth+'px';
    echartsWarp44.style.height = document.getElementById('map').innerHeight+'px';
}
resizeWorldMapContainer44();//设置容器高宽
var wChart15= echarts.init(echartsWarp44);// 基于准备好的dom，初始化echarts实例
window.onresize = function () {//用于使chart自适应高度和宽度
    //echarts
    resizeWorldMapContainer30();
    wChart1.resize();
    resizeWorldMapContainer31();
    wChart2.resize();
    resizeWorldMapContainer32();
    wChart3.resize();
    resizeWorldMapContainer33();
    wChart4.resize();
    resizeWorldMapContainer34();
    wChart5.resize();
    resizeWorldMapContainer35();
    wChart6.resize();
    resizeWorldMapContainer36();
    wChart7.resize();
    resizeWorldMapContainer37();
    wChart8.resize();
    resizeWorldMapContainer38();
    wChart9.resize();
    resizeWorldMapContainer39();
    wChart10.resize();
    resizeWorldMapContainer40();
    wChart11.resize();
    resizeWorldMapContainer41();
    wChart12.resize();
    resizeWorldMapContainer42();
    wChart13.resize();
    resizeWorldMapContainer43();
    wChart14.resize();
    resizeWorldMapContainer44();
    wChart15.resize();
};
function myWChart1(){
    let wChart1 = echarts.init(document.getElementById("wcharts1"));
    option = {
        color: ['#3398DB'],
        tooltip : {
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '-10%',
            right: '60%',
            bottom: '70%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                "show" : false,//显示
                data : ['', '', '', '', '', '', '',"","","","",""],
            }
        ],
        yAxis : [
            {
                type : 'value',
                "show" : false,


            }
        ],
        series : [
            {

                type:'bar',
                barWidth: '60%',
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[87, 109, 111, 95, 120, 99, 87,100,67,75,65,87]
            }
        ]
    };


    wChart1.setOption(option);
}
function myWChart2(){
    let wChart2 = echarts.init(document.getElementById("wcharts2"));
    option = {
        title: {
            text: '80%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#5e606d',
                fontSize: '20'
            }
        },
        color: ['rgba(176, 212, 251, 1)'],


        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['80%', '90%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: 80,
                name: '01',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#36a2f5' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#367bec' // 100% 处的颜色
                            }]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '02',
                value:20
            }]
        }]
    }

    wChart2.setOption(option);
}
function myWChart3(){
    let wChart3 = echarts.init(document.getElementById("wcharts3"));
    option = {
        color: ['#ab70f3'],
        tooltip : {
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '-10%',
            right: '60%',
            bottom: '70%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                "show" : false,//显示
                data : ['', '', '', '', '', '', '',"","","","",""],
            }
        ],
        yAxis : [
            {
                type : 'value',
                "show" : false,


            }
        ],
        series : [
            {

                type:'bar',
                barWidth: '60%',
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[87, 109, 111, 95, 120, 99, 87,100,67,75,65,87]
            }
        ]
    };


    wChart3.setOption(option);
}
function myWChart4(){
    let wChart4 = echarts.init(document.getElementById("wcharts4"));
    option = {
        title: {
            text: '65%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#5e606d',
                fontSize: '20'
            }
        },
        color: ['rgba(176, 212, 251, 1)'],


        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['80%', '90%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: 65,
                name: '01',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#ab70f3' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#ab70f3' // 100% 处的颜色
                            }]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '02',
                value:20
            }]
        }]
    }

    wChart4.setOption(option);
}
function myWChart5(){
    let wChart5 = echarts.init(document.getElementById("wcharts5"));
    option = {
        color: ['#ff518a'],
        tooltip : {
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '-10%',
            right: '60%',
            bottom: '70%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                "show" : false,//显示
                data : ['', '', '', '', '', '', '',"","","","",""],
            }
        ],
        yAxis : [
            {
                type : 'value',
                "show" : false,


            }
        ],
        series : [
            {

                type:'bar',
                barWidth: '60%',
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[87, 109, 111, 95, 120, 99, 87,100,67,75,65,87]
            }
        ]
    };


    wChart5.setOption(option);
}
function myWChart6(){
    let wChart6 = echarts.init(document.getElementById("wcharts6"));
    option = {
        title: {
            text: '53%',
            x: 'center',
            y: 'center',
            textStyle: {
                fontWeight: 'normal',
                color: '#5e606d',
                fontSize: '20'
            }
        },
        color: ['rgba(176, 212, 251, 1)'],


        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: true,
            radius: ['80%', '90%'],
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            },
            hoverAnimation: false,
            data: [{
                value: 53,
                name: '01',
                itemStyle: {
                    normal: {
                        color: { // 完成的圆环的颜色
                            colorStops: [{
                                offset: 0,
                                color: '#ff518a' // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: '#ff518a' // 100% 处的颜色
                            }]
                        },
                        label: {
                            show: false
                        },
                        labelLine: {
                            show: false
                        }
                    }
                }
            }, {
                name: '02',
                value:20
            }]
        }]
    }

    wChart6.setOption(option);
}
function newchart1(){
    let usercharts = echarts.init(document.getElementById("usercharts"));
    options = {
            // backgroundColor:'#FFFFFF',                      // 背景色
            tooltip: {

            },
            grid: {
                left:"-3%",
                right:"0%",
                bottom: '-20%',
                y:-80,
                y2:0,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,         // 坐标轴两边留白策略
                show:false,
                splitLine: {                // 网格线 x轴对应的是否显示
                    show: false
                },
                axisLabel: {
                    interval: 0,    //强制文字产生间隔
                    textStyle: {    //文字样式
                        color: "black",
                        fontSize: 12,
                        fontFamily: 'Microsoft YaHei'
                    }
                },
                data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
                // data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
            },

        yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            interval: 5,
            show:false,
            splitLine: {                // 网格线 y轴对应的是否显示
                show: false
            }
        },

        series: [
                {
                    type:'line',
                    symbol:"circle",
                    symbolSize:7,
                    itemStyle: {
                        normal: {
                            color: "#ceabf9",//折线

                        }
                    },

                    areaStyle: {//区域填充
                        normal: {
                            color: '#ede1fd'
                        }
                    },
                    data:[0,20, 9,35, 15,25, 18, 10, 30, 40, 43,53]

                }

            ]
        }
    usercharts.setOption(options);
}
function newchart2(){
    let orderscharts = echarts.init(document.getElementById("orderscharts"));
    options = {
        // backgroundColor:'#FFFFFF',                      // 背景色
        tooltip: {

        },
        grid: {
            left:"-3%",
            right:"0%",
            bottom: '-20%',
            y:-80,
            y2:0,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,         // 坐标轴两边留白策略
            show:false,
            splitLine: {                // 网格线 x轴对应的是否显示
                show: false
            },
            axisLabel: {
                interval: 0,    //强制文字产生间隔
                textStyle: {    //文字样式
                    color: "black",
                    fontSize: 12,
                    fontFamily: 'Microsoft YaHei'
                }
            },
            data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            // data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },

        yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            interval: 5,
            show:false,
            splitLine: {                // 网格线 y轴对应的是否显示
                show: false
            }
        },

        series: [
            {
                type:'line',
                symbol:"circle",
                symbolSize:7,
                smooth:true,
                itemStyle: {
                    normal: {
                        color: "#5bb3f7",//折线
                    },
                    lineStyle: {
                        color: "#d7ecfd"
                    }
                },

                areaStyle: {//区域填充
                    normal: {
                        color: '#d7ecfd'
                    }
                },
                data:[0,20, 9,35, 15,25, 18, 10, 30, 40, 43,53]

            }

        ]
    }
    orderscharts.setOption(options);
}
function newchart3(){
    let yearlycharts = echarts.init(document.getElementById("yearlycharts"));
    options = {
        // backgroundColor:'#FFFFFF',                      // 背景色
        tooltip: {

        },
        grid: {
            left:"-3%",
            right:"0%",
            bottom: '-20%',
            y:-80,
            y2:0,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,         // 坐标轴两边留白策略
            show:false,
            splitLine: {                // 网格线 x轴对应的是否显示
                show: false
            },
            axisLabel: {
                interval: 0,    //强制文字产生间隔
                textStyle: {    //文字样式
                    color: "black",
                    fontSize: 12,
                    fontFamily: 'Microsoft YaHei'
                }
            },
            data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            // data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },

        yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            interval: 5,
            show:false,
            splitLine: {                // 网格线 y轴对应的是否显示
                show: false
            }
        },

        series: [
            {
                type:'line',

                symbolSize:7,

                itemStyle: {
                    normal: {
                        color: "#ff518a",//折线
                    },

                },


                data:[30,20, 9,35, 15,25, 18, 10, 30, 40, 43,53]

            }

        ]
    }
    yearlycharts.setOption(options);
}
function newchart4(){
    let totalcharts = echarts.init(document.getElementById("totalcharts"));
    options = {
        backgroundColor:'#a768f3',                      // 背景色
        tooltip: {

        },
        grid: {
            left:"-3%",
            right:"0%",
            bottom: '-20%',
            y:-100,
            y2:70,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,         // 坐标轴两边留白策略
            show:false,
            splitLine: {                // 网格线 x轴对应的是否显示
                show: false
            },
            axisLabel: {
                interval: 0,    //强制文字产生间隔
                textStyle: {    //文字样式
                    color: "black",
                    fontSize: 12,
                    fontFamily: 'Microsoft YaHei'
                }
            },
            data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            // data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },

        yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            interval: 5,
            show:false,
            splitLine: {                // 网格线 y轴对应的是否显示
                show: false
            }
        },

        series: [
            {
                type:'line',

                symbolSize:7,

                itemStyle: {
                    normal: {
                        color: "#b58ae8",//折线
                    },

                },


                data:[30,20, 9,35, 15,25, 18, 10, 30, 40, 43,33]

            }

        ]
    }
    totalcharts.setOption(options);
}
function newchart5(){
    let Profitcharts = echarts.init(document.getElementById("Profitcharts"));
    options = {
        backgroundColor:'#ff518a',                      // 背景色
        tooltip: {

        },
        grid: {
            left:"-3%",
            right:"0%",
            bottom: '-20%',
            y:-100,
            y2:70,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,         // 坐标轴两边留白策略
            show:false,
            splitLine: {                // 网格线 x轴对应的是否显示
                show: false
            },
            axisLabel: {
                interval: 0,    //强制文字产生间隔
                textStyle: {    //文字样式
                    color: "black",
                    fontSize: 12,
                    fontFamily: 'Microsoft YaHei'
                }
            },
            data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            // data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },

        yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            interval: 5,
            show:false,
            splitLine: {                // 网格线 y轴对应的是否显示
                show: false
            }
        },

        series: [
            {
                type:'line',

                symbolSize:7,

                itemStyle: {
                    normal: {
                        color: "#ff8db2",//折线
                    },

                },


                data:[30,20, 9,35, 15,25, 18, 10, 30, 40, 43,33]

            }

        ]
    }
    Profitcharts.setOption(options);
}
function newchart6(){
    let orderscharts2 = echarts.init(document.getElementById("orderscharts2"));
    options = {
        backgroundColor:'#34bfa3',                      // 背景色
        tooltip: {

        },
        grid: {
            left:"-3%",
            right:"0%",
            bottom: '-20%',
            y:-100,
            y2:70,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,         // 坐标轴两边留白策略
            show:false,
            splitLine: {                // 网格线 x轴对应的是否显示
                show: false
            },
            axisLabel: {
                interval: 0,    //强制文字产生间隔
                textStyle: {    //文字样式
                    color: "black",
                    fontSize: 12,
                    fontFamily: 'Microsoft YaHei'
                }
            },
            data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            // data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },

        yAxis: {
            type: 'value',
            min: 0,
            max: 100,
            interval: 5,
            show:false,
            splitLine: {                // 网格线 y轴对应的是否显示
                show: false
            }
        },

        series: [
            {
                type:'line',
                symbolSize:7,
                itemStyle: {
                    normal: {
                        color: "#6cb7a8",//折线
                    },
                    lineStyle:{
                        color:"#6cb7a8",
                    }

                },
                areaStyle: {//区域填充
                    normal: {
                        color: '#2fac92'
                    }
                },

                data:[30,20, 9,35, 15,25, 18, 10, 30, 40, 43,33]

            }

        ]
    }
    orderscharts2.setOption(options);
}
function newchart7(){
    let yearlycharts2 = echarts.init(document.getElementById("yearlycharts2"));
    // Generate data
    var category = [];
    var dottedBase = +new Date();
    var lineData = [];
    var barData = [];

    for (var i = 0; i < 20; i++) {
        var date = new Date(dottedBase += 3600 * 24 * 1000);
        category.push([
            date.getFullYear(),
            date.getMonth() + 1,
            date.getDate()
        ].join('-'));
        var b = Math.random() * 200;
        var d = Math.random() * 200;
        barData.push(b)
        lineData.push(d + b);
    }


// option
    options = {
        backgroundColor: '#0f375f',
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {
            data: ['line', 'bar'],
            textStyle: {
                color: '#ccc'
            }
        },
        xAxis: {
            data: category,
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        yAxis: {
            splitLine: {show: false},
            axisLine: {
                lineStyle: {
                    color: '#ccc'
                }
            }
        },
        series: [{
            name: 'line',
            type: 'line',
            smooth: true,
            showAllSymbol: true,
            symbol: 'emptyCircle',
            symbolSize: 15,
            data: lineData
        }, {
            name: 'bar',
            type: 'bar',
            barWidth: 10,
            itemStyle: {
                normal: {
                    barBorderRadius: 5,
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#14c8d4'},
                            {offset: 1, color: '#43eec6'}
                        ]
                    )
                }
            },
            data: barData
        }, {
            name: 'line',
            type: 'bar',
            barGap: '-100%',
            barWidth: 10,
            itemStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: 'rgba(20,200,212,0.5)'},
                            {offset: 0.2, color: 'rgba(20,200,212,0.2)'},
                            {offset: 1, color: 'rgba(20,200,212,0)'}
                        ]
                    )
                }
            },
            z: -12,
            data: lineData
        }, {
            name: 'dotted',
            type: 'pictorialBar',
            symbol: 'rect',
            itemStyle: {
                normal: {
                    color: '#0f375f'
                }
            },
            symbolRepeat: true,
            symbolSize: [12, 4],
            symbolMargin: 1,
            z: -10,
            data: lineData
        }]
    };
    yearlycharts2.setOption(options);
}
function newchart8(){
    let userscharts2 = echarts.init(document.getElementById("userscharts2"));
    var geoCoordMap = {
        '上海': [121.4648,31.2891],
        '东莞': [113.8953,22.901],
        '东营': [118.7073,37.5513],
        '中山': [113.4229,22.478],
        '临汾': [111.4783,36.1615],
        '临沂': [118.3118,35.2936],
        '丹东': [124.541,40.4242],
        '丽水': [119.5642,28.1854],
        '乌鲁木齐': [87.9236,43.5883],
        '佛山': [112.8955,23.1097],
        '保定': [115.0488,39.0948],
        '兰州': [103.5901,36.3043],
        '包头': [110.3467,41.4899],
        '北京': [116.4551,40.2539],
        '北海': [109.314,21.6211],
        '南京': [118.8062,31.9208],
        '南宁': [108.479,23.1152],
        '南昌': [116.0046,28.6633],
        '南通': [121.1023,32.1625],
        '厦门': [118.1689,24.6478],
        '台州': [121.1353,28.6688],
        '合肥': [117.29,32.0581],
        '呼和浩特': [111.4124,40.4901],
        '咸阳': [108.4131,34.8706],
        '哈尔滨': [127.9688,45.368],
        '唐山': [118.4766,39.6826],
        '嘉兴': [120.9155,30.6354],
        '大同': [113.7854,39.8035],
        '大连': [122.2229,39.4409],
        '天津': [117.4219,39.4189],
        '太原': [112.3352,37.9413],
        '威海': [121.9482,37.1393],
        '宁波': [121.5967,29.6466],
        '宝鸡': [107.1826,34.3433],
        '宿迁': [118.5535,33.7775],
        '常州': [119.4543,31.5582],
        '广州': [113.5107,23.2196],
        '廊坊': [116.521,39.0509],
        '延安': [109.1052,36.4252],
        '张家口': [115.1477,40.8527],
        '徐州': [117.5208,34.3268],
        '德州': [116.6858,37.2107],
        '惠州': [114.6204,23.1647],
        '成都': [103.9526,30.7617],
        '扬州': [119.4653,32.8162],
        '承德': [117.5757,41.4075],
        '拉萨': [91.1865,30.1465],
        '无锡': [120.3442,31.5527],
        '日照': [119.2786,35.5023],
        '昆明': [102.9199,25.4663],
        '杭州': [119.5313,29.8773],
        '枣庄': [117.323,34.8926],
        '柳州': [109.3799,24.9774],
        '株洲': [113.5327,27.0319],
        '武汉': [114.3896,30.6628],
        '汕头': [117.1692,23.3405],
        '江门': [112.6318,22.1484],
        '沈阳': [123.1238,42.1216],
        '沧州': [116.8286,38.2104],
        '河源': [114.917,23.9722],
        '泉州': [118.3228,25.1147],
        '泰安': [117.0264,36.0516],
        '泰州': [120.0586,32.5525],
        '济南': [117.1582,36.8701],
        '济宁': [116.8286,35.3375],
        '海口': [110.3893,19.8516],
        '淄博': [118.0371,36.6064],
        '淮安': [118.927,33.4039],
        '深圳': [114.5435,22.5439],
        '清远': [112.9175,24.3292],
        '温州': [120.498,27.8119],
        '渭南': [109.7864,35.0299],
        '湖州': [119.8608,30.7782],
        '湘潭': [112.5439,27.7075],
        '滨州': [117.8174,37.4963],
        '潍坊': [119.0918,36.524],
        '烟台': [120.7397,37.5128],
        '玉溪': [101.9312,23.8898],
        '珠海': [113.7305,22.1155],
        '盐城': [120.2234,33.5577],
        '盘锦': [121.9482,41.0449],
        '石家庄': [114.4995,38.1006],
        '福州': [119.4543,25.9222],
        '秦皇岛': [119.2126,40.0232],
        '绍兴': [120.564,29.7565],
        '聊城': [115.9167,36.4032],
        '肇庆': [112.1265,23.5822],
        '舟山': [122.2559,30.2234],
        '苏州': [120.6519,31.3989],
        '莱芜': [117.6526,36.2714],
        '菏泽': [115.6201,35.2057],
        '营口': [122.4316,40.4297],
        '葫芦岛': [120.1575,40.578],
        '衡水': [115.8838,37.7161],
        '衢州': [118.6853,28.8666],
        '西宁': [101.4038,36.8207],
        '西安': [109.1162,34.2004],
        '贵阳': [106.6992,26.7682],
        '连云港': [119.1248,34.552],
        '邢台': [114.8071,37.2821],
        '邯郸': [114.4775,36.535],
        '郑州': [113.4668,34.6234],
        '鄂尔多斯': [108.9734,39.2487],
        '重庆': [107.7539,30.1904],
        '金华': [120.0037,29.1028],
        '铜川': [109.0393,35.1947],
        '银川': [106.3586,38.1775],
        '镇江': [119.4763,31.9702],
        '长春': [125.8154,44.2584],
        '长沙': [113.0823,28.2568],
        '长治': [112.8625,36.4746],
        '阳泉': [113.4778,38.0951],
        '青岛': [120.4651,36.3373],
        '韶关': [113.7964,24.7028]
    };

    var BJData = [
        [{name:'北京'}, {name:'上海',value:95}],
        [{name:'北京'}, {name:'广州',value:90}],
        [{name:'北京'}, {name:'大连',value:80}],
        [{name:'北京'}, {name:'南宁',value:70}],
        [{name:'北京'}, {name:'南昌',value:60}],
        [{name:'北京'}, {name:'拉萨',value:50}],
        [{name:'北京'}, {name:'长春',value:40}],
        [{name:'北京'}, {name:'包头',value:30}],
        [{name:'北京'}, {name:'重庆',value:20}],
        [{name:'北京'}, {name:'常州',value:10}]
    ];

    var SHData = [
        [{name:'上海'},{name:'包头',value:95}],
        [{name:'上海'},{name:'昆明',value:90}],
        [{name:'上海'},{name:'广州',value:80}],
        [{name:'上海'},{name:'郑州',value:70}],
        [{name:'上海'},{name:'长春',value:60}],
        [{name:'上海'},{name:'重庆',value:50}],
        [{name:'上海'},{name:'长沙',value:40}],
        [{name:'上海'},{name:'北京',value:30}],
        [{name:'上海'},{name:'丹东',value:20}],
        [{name:'上海'},{name:'大连',value:10}]
    ];

    var GZData = [
        [{name:'广州'},{name:'福州',value:95}],
        [{name:'广州'},{name:'太原',value:90}],
        [{name:'广州'},{name:'长春',value:80}],
        [{name:'广州'},{name:'重庆',value:70}],
        [{name:'广州'},{name:'西安',value:60}],
        [{name:'广州'},{name:'成都',value:50}],
        [{name:'广州'},{name:'常州',value:40}],
        [{name:'广州'},{name:'北京',value:30}],
        [{name:'广州'},{name:'北海',value:20}],
        [{name:'广州'},{name:'海口',value:10}]
    ];

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';

    var convertData = function (data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
            var dataItem = data[i];
            var fromCoord = geoCoordMap[dataItem[0].name];
            var toCoord = geoCoordMap[dataItem[1].name];
            if (fromCoord && toCoord) {
                res.push({
                    fromName: dataItem[0].name,
                    toName: dataItem[1].name,
                    coords: [fromCoord, toCoord],
                    value: dataItem[1].value
                });
            }
        }
        return res;
    };

    var color = ['#a6c84c', '#ffa022', '#46bee9'];
    var series = [];
    [['北京', BJData], ['上海', SHData], ['广州', GZData]].forEach(function (item, i) {
        //console.log(item,i);
        series.push({
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 1,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0.7,
                    color: '#fff',
                    symbolSize: 3
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 0,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'lines',
                zlevel: 2,
                symbol: ['none', 'arrow'],
                symbolSize: 10,
                effect: {
                    show: true,
                    period: 6,
                    trailLength: 0,
                    symbol: planePath,
                    symbolSize: 15
                },
                lineStyle: {
                    normal: {
                        color: color[i],
                        width: 1,
                        opacity: 0.6,
                        curveness: 0.2
                    }
                },
                data: convertData(item[1])
            },
            {
                name: item[0] + ' Top10',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                zlevel: 2,
                rippleEffect: {
                    brushType: 'stroke'
                },
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        formatter: '{b}'
                    }
                },
                symbolSize: function (val) {
                    return val[2] / 8;
                },
                itemStyle: {
                    normal: {
                        color: color[i]
                    }
                },
                data: item[1].map(function (dataItem) {
                    return {
                        name: dataItem[1].name,
                        value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value])
                    };
                })
            });
    });
    option = {
        backgroundColor: '#404a59',
        title : {

            left: 'center',
            textStyle : {
                color: '#fff'
            }
        },
        tooltip : {
            trigger: 'item',
            formatter:function(params, ticket, callback){
                console.log(params);
                if(params.seriesType=="effectScatter") {
                    return "线路："+params.data.name+""+params.data.value[2];
                }else if(params.seriesType=="lines"){
                    return params.data.fromName+">"+params.data.toName+"<br />"+params.data.value;
                }else{
                    return params.name;
                }
            }
        },
        legend: {
            orient: 'vertical',
            bottom: '30',
            left: 'right',
            data:['北京 Top10', '上海 Top10', '广州 Top10'],
            textStyle: {
                color: '#fff'
            },
            selectedMode: 'multiple',
        },
        geo: {
            map: 'china',
            label: {
                emphasis: {
                    show: true,
                    color:'#fff'
                }
            },
            layoutSize:100,
            roam: true,
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#404a59'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        series: series
    };
    userscharts2.setOption(option);
}
function newchart9(){
    let map = echarts.init(document.getElementById("map"));
    var data = [{
        "country_code": "unknown",
        "value": 49.52,
        "name": "China",
        "num": 1714
    }, {
        "country_code": "US",
        "value": 23.26,
        "name": "United States",
        "num": 805
    }, {
        "country_code": "AU",
        "value": 2.46,
        "name": "Australia",
        "num": 85
    }, {
        "country_code": "PK",
        "value": 2.08,
        "name": "Pakistan",
        "num": 72
    }, {
        "country_code": "GB",
        "value": 1.7,
        "name": "United Kingdom",
        "num": 59
    }, {
        "country_code": "SG",
        "value": 1.7,
        "name": "Singapore",
        "num": 59
    }, {
        "country_code": "MY",
        "value": 1.68,
        "name": "Malaysia",
        "num": 58
    }, {
        "country_code": "CA",
        "value": 1.27,
        "name": "Canada",
        "num": 44
    }, {
        "country_code": "DE",
        "value": 1.1,
        "name": "Germany",
        "num": 38
    }, {
        "country_code": "JP",
        "value": 0.95,
        "name": "Japan",
        "num": 33
    }]
    var legendData = data.map(v => {
        return v.name
    })
    var nameMap = {}

    option = {
        tooltip: {
            trigger: 'item',
            axisPointer: {
                type: 'shadow'
            },

            extraCssText: 'box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.2);',
            textStyle: {
                color: "#fff",
                fontSize:10
            },
            formatter: function(params) {
                var value = (params.value);
                value = value ? value + '%' : '_';
                return params.name + ' : ' + value;
            }
        },
        visualMap: {
            min: 0,
            max: 100,
            calculable: true,
            inRange: {
                color: ['#50a3ba', '#eac736', '#d94e5d']
            },
            textStyle: {
                color: '#fff'
            }
        },
        series: {
            type:'map',
            map:'world',
            roam: true,
            zoom:1.2,
            data: data,
            layoutCenter: ['50%', '100%'],
            layoutSize: 1200,
            itemStyle:{
                normal:{                           //默认状态
                    areaColor:'#d5d9dc',        //地图本身的颜色
                    borderColor:'#e6e7ea',     //省份的边框颜色
                    borderWidth:1,                     //省份的边框宽度
                    opacity:0.9,                       //图形透明度
                },
                emphasis: {                          //高亮状态
                    areaColor: '#e6e8ea',  //高亮时候地图显示的颜色
                    borderWidth: 0                  //高亮时候的边框宽度
                },

            }

        },
    };
    map.setOption(option);
}









