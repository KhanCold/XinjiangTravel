window.onload = function () {

    //1.绘制雷达图
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.querySelector('#echarts-2'));

    const color = ['#4A99FF', '#4BFFFC']; //线条边框颜色
    const legend = {
        //data，就是取得每个series里面的name属性。
        orient: 'vertical',
        icon: 'circle', //图例形状
        padding: 0,
        top: 10,
        right: 20,
        itemWidth: 10, //小圆点宽度
        itemHeight: 10, // 小圆点高度
        // itemGap: 10, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
        textStyle: {
            fontSize: 8,
            color: '#00E4FF',
        },
    };
    const tooltip = {
        show: true,
    };
    const indicator = [
        {
            name: '节日',
            max: 100,
        },
        {
            name: '交通状况',
            max: 100,
        },
        {
            name: '好评度',
            max: 100,
        },
        {
            name: '优惠力度',
            max: 100,
        },
        {
            name: '话题热度',
            max: 100,
        },
        {
            name: '天气',
            max: 100,
        },

    ];
    const dataArr = [
        {
            value: [60.53, 41.46, 80, 82, 60, 30],
            symbolSize: 8,
            symbol: 'circle',

            lineStyle: {
                width: 2,
            },
            areaStyle: {
                // 单项区域填充样式
                color: {
                    type: 'linear',
                    x: 0, //右
                    y: 0, //下
                    x2: 1, //左
                    y2: 1, //上
                    colorStops: [
                        {
                            offset: 0,
                            color: color[0],
                        },
                        {
                            offset: 0.5,
                            color: 'rgba(0,0,0,0)',
                        },
                        {
                            offset: 1,
                            color: color[0],
                        },
                    ],
                    global: false,
                },
                opacity: 1, // 区域透明度
            },
        },
    ];

    option = {
        color,
        legend,
        tooltip,
        radar: {
            center: ['50%', '50%'], //圆心坐标距离左边和上边的距离
            radius: ['1%', '75%'], //内外半径，不写默认是75%
            startAngle: 90, //可以旋转图形
            shape: 'polygon',
            axisName: {
                color: '#ffffff',
                fontSize: 10,
            },
            indicator: indicator,
            splitArea: {
                show: true, //默认显示颜色分割区域，不需要显示
            },
            axisLine: {
                show: true, //是否显示十字交叉线
                //指向外圈文本的分隔线样式
                lineStyle: {
                    color: '#153269', //线条颜色
                },
            },
            axisLabel: { show: false },
            splitLine: {
                //雷达一圈圈
                show: true,
                lineStyle: {
                    type: 'solid',
                    color: '#113865', // 雷达一圈圈颜色分隔线颜色
                    width: 1, // 分隔线线宽
                },
            },
        },
        series: [
            {
                type: 'radar',
                data: dataArr,
            },
        ],
    };

    myChart.setOption(option);
    window.addEventListener("resize", function () {
        myChart.resize();
    });

    // 2.地球可视化
    // GL版命名空间为BMapGL
    var map = new BMapGL.Map("allmap");    // 创建Map实例
    map.centerAndZoom(new BMapGL.Point(118.5, 27.5), 5);  // 初始化地图,设置中心点坐标和地图级别
    map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
    map.setMapType(BMAP_EARTH_MAP);      // 设置地图类型为地球模式

    //坐标点
    var marker = [
        { lng: 84.23223, lat: 43.29716 },
        { lng: 81.90654, lat: 43.12479 },
        { lng: 81.40114, lat: 44.61276 },
        { lng: 87.13838, lat: 48.51354 },
        { lng: 89.88825, lat: 47.22823 },
        { lng: 88.13573, lat: 43.88738 },
        { lng: 87.44826, lat: 43.49934 },
        { lng: 89.24963, lat: 43.00538 },
        { lng: 86.73162, lat: 42.76977 },
        { lng: 75.99537, lat: 39.47867 },
        { lng: 85.75411, lat: 46.13638 },
        { lng: 86.73162, lat: 41.84263 },
        { lng: 84.43926, lat: 42.76977 },
        { lng: 76.98790, lat: 38.03595 },
    ]
    //景点名称和信息
    let sights = [
        { opts: { width: 200, height: 100, title: '那拉提' }, des: '简介：蒙古语，意为有太阳的地方<br>最佳游玩日期：6月-9月<br>当前推荐指数2.4' },
        { opts: { width: 200, height: 100, title: '喀拉峻' }, des: '简介：喀拉峻”是哈萨克语，意思是“山脊上的莽原”<br>最佳游玩日期：6月-7月<br>当前推荐指数3.6' },
        { opts: { width: 200, height: 100, title: '赛里木湖' }, des: '简介：大西洋的最后一滴眼泪<br>最佳游玩日期：4月-10月<br>当前推荐指数9.6' },
        { opts: { width: 200, height: 100, title: '喀纳斯' }, des: '简介：喀纳斯是蒙古语中的寓意是“美丽而神秘的湖”<br>最佳游玩日期：全年<br>当前推荐指数8.6' },
        { opts: { width: 200, height: 100, title: '可可托海' }, des: '简介：额尔齐斯河刚好从中穿流而过<br>最佳游玩日期：6月-10月<br>当前推荐指数3.6' },
        { opts: { width: 200, height: 100, title: '天山天池' }, des: '简介：名字出自《灵山天池统凿水渠碑记》<br>最佳游玩日期：5月-10月<br>当前推荐指数7.6' },
        { opts: { width: 200, height: 100, title: '天山大峡谷' }, des: '简介：又称克孜利亚大峡谷<br>最佳游玩日期：6月-9月<br>当前推荐指数6.6' },
        { opts: { width: 200, height: 100, title: '吐鲁番葡萄沟景区' }, des: '简介：因盛产葡萄而得名<br>最佳游玩日期：7月-8月<br>当前推荐指数0.6' },
        { opts: { width: 200, height: 100, title: '帕米尔旅游区' }, des: '简介：历史悠久的丝路文化<br>最佳游玩日期：3月-9月<br>当前推荐指数9.6' },
        { opts: { width: 200, height: 100, title: '喀什古城' }, des: '简介：又名喀什噶尔古城<br>最佳游玩日期：全年<br>当前推荐指数8.6' },
        { opts: { width: 200, height: 100, title: '世界魔鬼城' }, des: '简介：当地人蒙古人将此城称为“苏鲁木哈克”<br>最佳游玩日期：5月-10月<br>当前推荐指数4.6' },
        { opts: { width: 200, height: 100, title: '博斯腾湖' }, des: '简介：维吾尔语意为“绿洲”<br>最佳游玩日期：6月-9月<br>当前推荐指数6.6' },
        { opts: { width: 200, height: 100, title: '巴音布鲁克' }, des: '简介：蒙古语意为“富饶”<br>最佳游玩日期：4月-9月<br>当前推荐指数8.6' },
        { opts: { width: 200, height: 100, title: '泽普县金湖杨景区' }, des: '简介：春夏碧玉翠绿,秋日则金黄灿烂<br>最佳游玩日期：9月-12月<br>当前推荐指数5.6' }
    ]

    let index = 0
    marker.forEach(function (item) {
        let point = new BMapGL.Point(item.lng, item.lat);
        let a = new BMapGL.Marker(point); // 创建点
        map.addOverlay(a);            //增加点

        let infoWindow = new BMapGL.InfoWindow(sights[index].des, sights[index].opts);

        a.addEventListener('click', function () {
            map.openInfoWindow(infoWindow, point);
        });

        // console.log(sights[index]);

        index = index + 1;
    })

    //3.画折线图
    let echarts_4 = echarts.init(document.querySelector('#echarts-4'));
    option = {
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2', '3', '4']
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '出行人数',
                type: 'line',
                data: [1180, 1100, 1600, 2392, 2600, 700, 400, 40, 30, 30, 1150, 1150, 1150,]
            },
            {
                name: '推荐指数',
                type: 'line',
                data: [1290, 1200, 1500, 2352, 2700, 2800, 1300, 1100, 1200, 1500, 2600, 2000, 1600, 1040]
            },
        ]
    };

    echarts_4.setOption(option);

}