

$(function(){
    myChart3();
    myChart4();
    myChart5();
    myChart6();
    myChart7();
    myChart8();
    myChart9();
    myChart10();
    myChart11();
    myChart12();
})

//echarts3
var echartsWarp3= document.getElementById('basic-area');
console.log( echartsWarp3.style.width)
function resizeWorldMapContainer3() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp3.style.width = document.getElementById('basic-area').innerWidth+'px';
    echartsWarp3.style.height = document.getElementById('basic-area').innerHeight+'px';
}
resizeWorldMapContainer3 ();//设置容器高宽
var eChart3 = echarts.init(echartsWarp3);// 基于准备好的dom，初始化echarts实例

//echarts4
var echartsWarp4= document.getElementById('basic-line');
function resizeWorldMapContainer4() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp4.style.width = document.getElementById('basic-line').innerWidth+'px';
    echartsWarp4.style.height = document.getElementById('basic-line').innerHeight+'px';
}
resizeWorldMapContainer4 ();//设置容器高宽
var eChart4 = echarts.init(echartsWarp4);// 基于准备好的dom，初始化echarts实例

//echarts5
var echartsWarp5= document.getElementById('scatter');
function resizeWorldMapContainer5() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp5.style.width = document.getElementById('scatter').innerWidth+'px';
    echartsWarp5.style.height = document.getElementById('scatter').innerHeight+'px';
}
resizeWorldMapContainer5();//设置容器高宽
var eChart5 = echarts.init(echartsWarp5);// 基于准备好的dom，初始化echarts实例
//echarts6
var echartsWarp6= document.getElementById('Negative');
function resizeWorldMapContainer6() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp6.style.width = document.getElementById('Negative').innerWidth+'px';
    echartsWarp6.style.height = document.getElementById('Negative').innerHeight+'px';
}
resizeWorldMapContainer6();//设置容器高宽
var eChart6 = echarts.init(echartsWarp6);// 基于准备好的dom，初始化echarts实例
//echarts7
var echartsWarp7= document.getElementById('Rainfall');
function resizeWorldMapContainer7() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp7.style.width = document.getElementById('Rainfall').innerWidth+'px';
    echartsWarp7.style.height = document.getElementById('Rainfall').innerHeight+'px';
}
resizeWorldMapContainer7();//设置容器高宽
var eChart7 = echarts.init(echartsWarp7);// 基于准备好的dom，初始化echarts实例
//echarts8
var echartsWarp8= document.getElementById('Pie');
function resizeWorldMapContainer8() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp8.style.width = document.getElementById('Pie').innerWidth+'px';
    echartsWarp8.style.height = document.getElementById('Pie').innerHeight+'px';
}
resizeWorldMapContainer8();//设置容器高宽
var eChart8 = echarts.init(echartsWarp8);// 基于准备好的dom，初始化echarts实例
//echarts9
var echartsWarp9= document.getElementById('Nested');
function resizeWorldMapContainer9() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp9.style.width = document.getElementById('Nested').innerWidth+'px';
    echartsWarp9.style.height = document.getElementById('Nested').innerHeight+'px';
}
resizeWorldMapContainer9();//设置容器高宽
var eChart9 = echarts.init(echartsWarp9);// 基于准备好的dom，初始化echarts实例
//echarts10
var echartsWarp10= document.getElementById('Doughnut');
function resizeWorldMapContainer10() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp10.style.width = document.getElementById('Doughnut').innerWidth+'px';
    echartsWarp10.style.height = document.getElementById('Doughnut').innerHeight+'px';
}
resizeWorldMapContainer10();//设置容器高宽
var eChart10= echarts.init(echartsWarp10);// 基于准备好的dom，初始化echarts实例
//echarts11
var echartsWarp11= document.getElementById('Gauge');
function resizeWorldMapContainer11() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp11.style.width = document.getElementById('Gauge').innerWidth+'px';
    echartsWarp11.style.height = document.getElementById('Gauge').innerHeight+'px';
}
resizeWorldMapContainer11();//设置容器高宽
var eChart11= echarts.init(echartsWarp11);// 基于准备好的dom，初始化echarts实例
//echarts12
var echartsWarp12= document.getElementById('Radar');
function resizeWorldMapContainer12() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp12.style.width = document.getElementById('Radar').innerWidth+'px';
    echartsWarp12.style.height = document.getElementById('Radar').innerHeight+'px';
}
resizeWorldMapContainer12();//设置容器高宽
var eChart12= echarts.init(echartsWarp12);// 基于准备好的dom，初始化echarts实例

window.onresize = function () {//用于使chart自适应高度和宽度
    //echarts
    resizeWorldMapContainer3();
    eChart3.resize();
    //echarts
    resizeWorldMapContainer4();
    eChart4.resize();
    //echarts
    resizeWorldMapContainer5();
    eChart5.resize();
    //echarts
    resizeWorldMapContainer6();
    eChart6.resize();
    //echarts
    resizeWorldMapContainer7();
    eChart7.resize();
    //echarts
    resizeWorldMapContainer8();
    eChart8.resize();
    //echarts
    resizeWorldMapContainer9();
    eChart9.resize();
    //echarts
    resizeWorldMapContainer10();
    eChart10.resize();
    //echarts
    resizeWorldMapContainer11();
    eChart11.resize();
    //echarts
    resizeWorldMapContainer12();
    eChart12.resize();
};
function myChart3(){
    var eChart3 = echarts.init(document.getElementById("basic-line"));
    option = {

        tooltip: {
            trigger: 'axis'
        },
        legend: {
            top:20,
            data:['max','min']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            x2:30,
            containLabel: true
        },
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: ['Sat','Sun','Mon','Tue','Wed','Thu','Fir'],

        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} °C'
            }
        },

        series: [
            {
                name:'max',
                type:'line',
                data:[11, 11, 15, 13, 12, 13, 10],
                itemStyle : {
                    normal : {
                        color:"#ff518a",
                        lineStyle:{
                            width:3,//折线宽度
                            color:"#ff518a"//折线颜色
                        }
                    }
                },

                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'min',
                type:'line',
                data:[1, -2, 2, 5, 3, 2, 0],

                itemStyle : {
                    normal : {
                        color:"#a768f3",
                        lineStyle:{
                            width:3,//折线宽度
                            color:"#a768f3"//折线颜色
                        },

                    }
                },
                markPoint: {
                    data: [
                        {name: '周最低', value: -1.5, xAxis: 1, yAxis: -1.5}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'},
                        [{
                            symbol: 'none',
                            x: '90%',
                            yAxis: 'max'
                        }, {


                        }]
                    ]
                }
            }
        ]
    };

    eChart3.setOption(option);
}
function myChart4(){
    var eChart4 = echarts.init(document.getElementById("basic-area"));
    option = {

        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data:['Preorder','Sale','Deal']
        },

        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',

            containLabel: true
        },
        xAxis : [
            {
                type : 'category',
                boundaryGap : false,
                data : ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
            }
        ],
        yAxis : [
            {
                type: 'value',
                min:0,
                max: 1500,
                interval: 300,
                data : ['300','600','900','1200','1500']
            }
        ],
        // symbol:'circle',//拐点样式
        // symbolSize: 6,//拐点大小

        series : [
            {
                name:'Preorder',
                type:'line',
                smooth:true,
                symbolColor:'#71d3bf',
                itemStyle : {
                    normal : {
                        color:"#71d3bf",
                        lineStyle:{
                            width:3,//折线宽度
                            color:"#71d3bf"//折线颜色
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: "#71d3bf"
                    }
                },
                data:[1320, 1132, 601, 234, 90,20,10]
            },
            {
                name:'Sale',
                type:'line',
                smooth:true,
                symbolColor:'#ff86ae',
                itemStyle : {
                    normal : {
                        color:"#ff86ae",
                        lineStyle:{
                            width:3,//折线宽度
                            color:"#ff86ae"//折线颜色
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: "#ff86ae"
                    }
                },
                data:[30, 182, 434, 791, 390, 30,10]
            },
            {
                name:'Deal',
                type:'line',
                smooth:true,
                symbolColor:'#f1d68b',
                itemStyle : {
                    normal : {
                        color:"#f1d68b",
                        lineStyle:{
                            width:3,//折线宽度
                            color:"#f1d68b"//折线颜色
                        }
                    }
                },
                areaStyle: {
                    normal: {
                        color: "#f1d68b"
                    }
                },
                data:[10, 12, 21, 54, 260, 830, 710]
            },


        ]
    };

    eChart4.setOption(option);
}
function myChart5(){
    var eChart5 = echarts.init(document.getElementById("scatter"));
    option = {

        grid: {
            left: '3%',
            right: '7%',
            bottom: '3%',
            containLabel: true
        },
        tooltip : {
            // trigger: 'axis',
            showDelay : 0,
            formatter : function (params) {
                if (params.value.length > 1) {
                    return params.seriesName + ' :<br/>'
                        + params.value[0] + 'cm '
                        + params.value[1] + 'kg ';
                }

            },
            axisPointer:{
                show: true,
                type : 'cross',
                lineStyle: {
                    type : 'solid',
                    width : 1
                }
            }
        },


        legend: {
            data: ['Female','Male'],
            left: 'center'
        },
        xAxis : [
            {
                type : 'value',
                scale:true,
                axisLabel : {
                    formatter: '{value} cm'
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis : [
            {
                type : 'value',
                scale:true,
                axisLabel : {
                    formatter: '{value} kg'
                },
                splitLine: {
                    show: false
                }
            }
        ],


        series : [
            {
                name:'Female',
                type:'scatter',

                itemStyle:{
                    normal:{color:'#ff518a'}
                },
                data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                    [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                    [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                    [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
                    [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
                    [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
                    [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
                    [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
                    [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
                    [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
                    [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
                    [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
                    [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
                    [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
                    [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
                    [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
                    [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
                    [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
                    [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
                    [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
                    [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
                    [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
                    [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
                    [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
                    [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
                    [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
                    [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
                    [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
                    [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
                    [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
                    [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
                    [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
                    [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
                    [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
                    [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
                    [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
                    [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
                    [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
                    [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
                    [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
                    [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
                    [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
                    [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
                    [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
                    [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
                    [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
                    [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
                    [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
                    [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
                    [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
                    [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
                    [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
                ],
                markArea: {
                    silent: true,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 1,
                            borderType: 'dashed'
                        }
                    },

                },
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    },
                    data : [
                        {type : 'average', name: '平均值'},

                    ]
                }
            },
            {
                name:'Male',
                type:'scatter',
                itemStyle:{
                    normal:{color:'#5eb5f7'}
                },
                data: [[174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
                    [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
                    [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
                    [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
                    [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
                    [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
                    [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
                    [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
                    [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
                    [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
                    [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
                    [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
                    [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
                    [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
                    [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
                    [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
                    [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
                    [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
                    [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
                    [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
                    [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
                    [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
                    [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
                    [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
                    [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
                    [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
                    [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
                    [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
                    [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
                    [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
                    [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
                    [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
                    [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
                    [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
                    [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
                    [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
                    [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
                    [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
                    [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
                    [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
                    [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
                    [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
                    [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
                    [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
                    [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
                    [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
                    [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
                    [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
                    [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
                    [180.3, 83.2], [180.3, 83.2]
                ],
                markArea: {
                    silent: true,
                    itemStyle: {
                        normal: {
                            color: 'transparent',
                            borderWidth: 1,
                            borderType: 'dashed'
                        }
                    },

                },
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    lineStyle: {
                        normal: {
                            type: 'dashed'
                        }
                    },
                    data : [
                        {type : 'average', name: '平均值'},

                    ]
                }
            }
        ]
    };

    eChart5.setOption(option);
}
function myChart6(){
    var eChart6 = echarts.init(document.getElementById("Negative"));


    option = {
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'line'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data:['Profit', 'out', 'in']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis : [
            {
                type : 'value'
            }
        ],
        yAxis : [
            {
                type : 'category',
                axisTick : {show: false},
                data : ['Mon','Tue','Wed','Thu','Fri','Sat','Sun']
            }
        ],
        series : [
            {
                name:'Profit',
                type:'bar',
                barWidth : 12,//柱图宽度
                itemStyle:{
                    normal:{color:'#36a2f5'}

                },
                label: {
                    normal: {
                        show: true,
                        fontSize:10,
                        position: 'inside'
                    }
                },
                data:[200, 170, 240, 244, 200, 220, 210]
            },
            {
                name:'in',
                type:'bar',
                stack: '总量',
                barWidth : 8,//柱图宽度
                itemStyle:{
                    normal:{color:'#ff518a'}
                },
                label: {
                    normal: {
                        fontSize:10,
                        show: true
                    }
                },
                data:[320, 302, 341, 374, 390, 450, 420]
            },
            {
                name:'out',
                type:'bar',
                stack: '总量',
                barWidth : 8,//柱图宽度
                itemStyle : {
                    normal : {
                        color:"#34bfa3",

                    }
                },

                label: {
                    normal: {
                        show: true,
                        fontSize:10,
                        position: 'left'
                    }
                },
                data:[-120, -132, -101, -134, -190, -230, -210]
            }
        ]
    };

    eChart6.setOption(option);
}
function myChart7(){
    var eChart7 = echarts.init(document.getElementById("Rainfall"));
    option = {

        tooltip : {
            trigger: 'axis'
        },
        legend: {
            data:['sale','Market']
        },

        calculable : true,
        xAxis : [
            {
                type : 'category',
                data : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
            }
        ],
        yAxis : [
            {
                type : 'value'
            }
        ],
        series : [
            {
                name:'sale',
                type:'bar',
                data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                itemStyle:{
                    normal:{color:'#a768f3'}
                },
                markPoint : {
                    data : [
                        {type : 'max', name: '最大值'},
                        {type : 'min', name: '最小值'}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name: '平均值'}
                    ]
                }
            },
            {
                name:'Market',
                type:'bar',
                data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                itemStyle:{
                    normal:{color:'#36a2f5'}
                },
                markPoint : {
                    data : [
                        {name : '年最高', value : 182.2, xAxis: 7, yAxis: 183},
                        {name : '年最低', value : 3, xAxis: 11, yAxis: 3}
                    ]
                },
                markLine : {
                    data : [
                        {type : 'average', name : '平均值'}
                    ]
                }
            }
        ]
    };
    eChart7.setOption(option);
}
function myChart8(){
    var eChart8 = echarts.init(document.getElementById("Pie"));

    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['Direct','AD',"Affiliate",'Search','Mail'],
            left:10,
        },
        series:
            {
                name:'访问来源',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '70%'],
                center: ['50%', '50%'],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'Direct',itemStyle:{color:"#a768f3"}},
                    {value:310, name:'AD' ,itemStyle:{color:"#34bfa3"}},
                    {value:234, name:'Search',itemStyle:{color:"#ff518a"}},
                    {value:135, name:'Mail',itemStyle:{color:"#eac459"}},
                    {value:135, name:'Affiliate',itemStyle:{color:"#36a2f5"}}
                ]
            }

    };

    eChart8.setOption(option);
}
function myChart9(){
    var eChart9 = echarts.init(document.getElementById("Nested"));
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'center',
            data:['Direct','AD','Search','Mail','Affiliate','Video','Baidu','Google','Bing','Other'],
            left:10,

        },
        series: [
            {
                name:'访问来源',
                type:'pie',
                selectedMode: 'single',
                radius: [0, '38%'],
                center:["40%","50%"],
                label: {
                    normal: {
                        position: 'inner'
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'Direct',itemStyle:{color:"#62549a"}},
                    {value:679, name:'AD',itemStyle:{color:"#4aa9e9"}},
                    {value:1548, name:'Search', selected:true,itemStyle:{color:"#ff6c60"}},
                ]
            },
            {
                name:'访问来源',
                type:'pie',
                center:["40%","50%"],
                radius: ['60%', '70%'],

                data:[
                    {value:335, name:'Direct',itemStyle:{color:"#62549a"}},
                    {value:310, name:'Mail' ,itemStyle:{color:"#eac459"}},
                    {value:234, name:'Affiliate',itemStyle:{color:"#25c3b2"}},
                    {value:135, name:'Video',itemStyle:{color:"#6bb18c"}},
                    {value:1048, name:'Baidu',itemStyle:{color:"#ebcb94"} },
                    {value:251, name:'Google',itemStyle:{color:"#ef9688"}},
                    {value:147, name:'Bing',itemStyle:{color:"#043d5d"}},
                    {value:102, name:'Other',itemStyle:{color:"#b8959b"}}
                ]
            }
        ]
    };
    eChart9.setOption(option);
}
function myChart10(){
    var eChart10 = echarts.init(document.getElementById("Doughnut"));
    option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['Direct','AD',"Affiliate",'Search','Mail'],
            left:10,
        },
        series:
            {
                name:'访问来源',
                type:'pie',
                selectedMode: 'single',
                radius: ["50%", '65%'],
                center: ['50%', '60%'],
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'Direct',itemStyle:{color:"#a768f3"}},
                    {value:310, name:'AD' ,itemStyle:{color:"#34bfa3"}},
                    {value:234, name:'Search',itemStyle:{color:"#ff518a"}},
                    {value:135, name:'Mail',itemStyle:{color:"#eac459"}},
                    {value:135, name:'Affiliate',itemStyle:{color:"#36a2f5"}}
                ]
            }

    };
    eChart10.setOption(option);
}
function myChart11(){
    var eChart11 = echarts.init(document.getElementById("Gauge"));
    option = {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                center: ['50%', '60%'],
                detail: {formatter:'{value}%'},
                center: ['50%', '50%'],
                data: [{value: 50, name: 'Finshed'}]
            }
        ]
    };

    setInterval(function () {
        option.series[0].data[0].value = (Math.random() * 100).toFixed(2) - 0;
        myChart.setOption(option, true);
    },2000);

    eChart11.setOption(option);
}
function myChart12(){
    var eChart12 = echarts.init(document.getElementById("Radar"));
    option = {

        tooltip: {

        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
        },
        radar: [
            {
                indicator: [
                    { name: '销售（sales）', max: 6500}, //每个角的名字，最大值
                    { name: '管理（Administration）', max: 16000},
                    { name: '信息技术（Information Techology）', max: 30000},
                    { name: '客服（Customer Support）', max: 38000},
                    { name: '研发（Development）', max: 52000},
                    { name: '市场（Marketing）', max: 25000}
                ],
                center: ['50%','60%'],
                radius: 130//放大
            }


        ],


        series: [{
            name: '预算 vs 开销（Budget vs spending）',
            type: 'radar',
            center:["50%","60%"],
            data : [
                {
                    value : [4300, 10000, 28000, 35000, 50000, 19000],
                    name : '预算分配（Allocated Budget）',
                    itemStyle: {
                        color:"#fd6596"
                    },
                    areaStyle: {//区域填充
                        normal: {
                            color: '#fd6596'
                        }
                    }
                },
                {
                    value : [5000, 14000, 28000, 31000, 42000, 21000],
                    name : '实际开销（Actual Spending）',
                    itemStyle: {
                        color:"#a768f3"
                    },
                    areaStyle: {//区域填充
                        normal: {
                            color: '#a768f3'
                        }
                    }
                }
            ]
        }]
    };

    eChart12.setOption(option);
}