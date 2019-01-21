//table1
var echartsWarp1= document.getElementById('chartone');
function resizeWorldMapContainer1() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp1.style.width = document.getElementById('chartone').innerWidth+'px';
    echartsWarp1.style.height = document.getElementById('chartone').innerHeight+'px';
}
resizeWorldMapContainer1 ();//设置容器高宽
var myChart1 = echarts.init(echartsWarp1);// 基于准备好的dom，初始化echarts实例

//table2
var echartsWarp2= document.getElementById('charttwo');
function resizeWorldMapContainer2() {//用于使chart自适应高度和宽度,通过窗体高宽计算容器高宽
    echartsWarp2.style.width = document.getElementById('charttwo').innerWidth+'px';
    echartsWarp2.style.height = document.getElementById('charttwo').innerHeight+'px';
}
resizeWorldMapContainer2 ();//设置容器高宽
var myChart2 = echarts.init(echartsWarp2);// 基于准备好的dom，初始化echarts实例


window.onresize = function () {//用于使chart自适应高度和宽度
    //table1
    resizeWorldMapContainer1();//重置容器高宽
    myChart1.resize();
    //table2
    resizeWorldMapContainer2();//重置容器高宽
    myChart2.resize();


};