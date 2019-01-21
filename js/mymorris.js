$(function(){
    myChart13();
     myChart14();
    myChart15();
    myChart16();
    myChart17();
    myChart18();
})
function myChart13(){
// Use Morris.Area instead of Morris.Line
    Morris.Area({
        element: 'graph',
        yAxis : [
        {
            type: 'category',
        }],
        ymax:30000,
        resize : true,
        pointSize:5,
        hoverOpacity:1,
        lineColors : [ "#36a2f5",'#fbe1ce',"#fbb7ce"],
        data: [
            {x: '2015 Q1', iPhone: 2666, iPad:null,iPodTouch:2647},
            {x: '2015 Q2',iPhone: 15278, iPad:4294,iPodTouch:2441},
            {x: '2015 Q3', iPhone: 4912, iPad:1969,iPodTouch:2501},
            {x: '2015 Q4', iPhone: 3767, iPad:3597,iPodTouch:5689},
            {x: '2016 Q1', iPhone: 6810, iPad:3914,iPodTouch:2293},
            {x: '2016 Q2',iPhone: 5670, iPad:4293,iPodTouch:1881},
            {x: '2016 Q3', iPhone: 4820, iPad:23795,iPodTouch:1588},
            {x: '2016 Q4', iPhone: 15073, iPad:5967,iPodTouch:5175},
            {x: '2017 Q1', iPhone: 10687, iPad:4460,iPodTouch:2028},
            {x: '2017 Q2',iPhone: 8432, iPad:5713,iPodTouch:1791}
        ],
        xkey: 'x',
        ykeys: ['iPhone', 'iPad','iPodTouch'],
        labels: ['IPHONE', 'IPAD','IPOTOUCH'],


    }).on('click', function(i, row){
        console.log(i, row);
    });
}
function myChart14(){
    var day_data = [
        {"elapsed": "I", "value": 8},
        {"elapsed": "II", "value": 34},
        {"elapsed": "III", "value": 53},
        {"elapsed": "IV", "value": 12},
        {"elapsed": "V", "value": 13},
        {"elapsed": "VI", "value": 22},
        {"elapsed": "VII", "value": 5},
        {"elapsed": "VIII", "value": 26},
        {"elapsed": "IX", "value": 12},
        {"elapsed": "X", "value": 19}
    ];
    Morris.Line({
        element: 'Line',
        lineColors : [ "rgb(255, 81, 138)"],
        data: day_data,
        resize:true,
        xkey: 'elapsed',
        ykeys: ['value'],
        labels: ['value'],
        parseTime: false
    });
}
function myChart15(){
// Use Morris.Area instead of Morris.Line
    Morris.Area({
        element: 'bancharts1',
        yAxis : [
            {
                type: 'category',

            }],
        resize : true,
        pointSize:5,
        lineColors : [ "rgb(214, 192, 241)",'rgb(232, 216, 170)'],
        data: [
            {x: '2017 Q1', Y: 5, Z:3},
            {x: '2017 Q2', Y: 3, Z:3},
            {x: '2017 Q3',  Y: 5, Z:5},
            {x: '2017 Q4',  Y: 4, Z:3},
            {x: '2018 Q1',  Y: 3, Z:2},

        ],
        xkey: 'x',
        ykeys: ['Y', 'Z'],
        labels: ['Y', 'Z'],


    }).on('click', function(i, row){
        console.log(i, row);
    });
}
function myChart16(){
// Use Morris.Bar
    Morris.Bar({
        element: 'bancharts2',
        resize : true,
        itemStyle: {
            normal:{
                color: function (params){
                    var colorList = ['#ff4844','#9ac3e5','#66ac52','#ffc032','#549bd3','#f47e39'];
                    return colorList[params.dataIndex];
                }
            },
        },
        barColors : [ "rgb(54, 162, 245)",'rgb(167, 104, 243)',"rgb(234, 196, 89)"],
        data: [
            {x: '2018 Q1', y: 2, z: 4, a: 3},
            {x: '2018 Q2', y: 2, z: null, a: 1},
            {x: '2018 Q3', y: 0, z: 2, a: 4},
            {x: '2018 Q4', y: 2, z: 4, a: 3}
        ],
        xkey: 'x',
        ykeys: ['y', 'z', 'a'],
        labels: ['Y', 'Z', 'A']
    }).on('click', function(i, row){
        console.log(i, row);
    });
}
function myChart17(){
    Morris.Donut({
        element: 'bancharts3',
        colors: ["#a768f3", "#eac459", "#34bfa3","#36a2f5"],
        resize:true,
        data: [
            {value: 70, label: 'Apple', formatted: 'at least 55%' },
            {value: 15, label: 'Long title charts', formatted: 'at least 10%' },
            {value: 10, label: 'Banana', formatted: 'approx. 10%' },
            {value: 5, label: 'Orange', formatted: 'approx. 25%' }
        ],
        hideHover: 'true',
        formatter: function (x, data) { return data.formatted; }
    });
}
function myChart18(){
    var week_data = [
        {"period": "2011 W27", "licensed": 3407, "sorned": 660},
        {"period": "2011 W26", "licensed": 3351, "sorned": 629},
        {"period": "2011 W25", "licensed": 3269, "sorned": 618},
        {"period": "2011 W24", "licensed": 3246, "sorned": 661},
        {"period": "2011 W23", "licensed": 3257, "sorned": 667},
        {"period": "2011 W22", "licensed": 3248, "sorned": 627},
        {"period": "2011 W21", "licensed": 3171, "sorned": 660},
        {"period": "2011 W20", "licensed": 3171, "sorned": 676},
        {"period": "2011 W19", "licensed": 3201, "sorned": 656},
        {"period": "2011 W18", "licensed": 3215, "sorned": 622},
        {"period": "2011 W17", "licensed": 3148, "sorned": 632},
        {"period": "2011 W16", "licensed": 3155, "sorned": 681},
        {"period": "2011 W15", "licensed": 3190, "sorned": 667},
        {"period": "2011 W14", "licensed": 3226, "sorned": 620},
        {"period": "2011 W13", "licensed": 3245, "sorned": null},
        {"period": "2011 W12", "licensed": 3289, "sorned": null},
        {"period": "2011 W11", "licensed": 3263, "sorned": null},
        {"period": "2011 W10", "licensed": 3189, "sorned": null},
        {"period": "2011 W09", "licensed": 3079, "sorned": null},
        {"period": "2011 W08", "licensed": 3085, "sorned": null},
        {"period": "2011 W07", "licensed": 3055, "sorned": null},
        {"period": "2011 W06", "licensed": 3063, "sorned": null},
        {"period": "2011 W05", "licensed": 2943, "sorned": null},
        {"period": "2011 W04", "licensed": 2806, "sorned": null},
        {"period": "2011 W03", "licensed": 2674, "sorned": null},
        {"period": "2011 W02", "licensed": 1702, "sorned": null},
        {"period": "2011 W01", "licensed": 1732, "sorned": null}
    ];
    Morris.Line({
        element: 'bancharts4',
        data: week_data,
        resize:true,
        lineColors : [ "rgb(255, 81, 138)"],
        xkey: 'period',
        ykeys: ['licensed', 'sorned'],
        labels: ['Licensed', 'SORN'],
        events: [
            '2011-04',
            '2011-08'
        ]
    });
}