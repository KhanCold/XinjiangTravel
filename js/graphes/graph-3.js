window.onload = function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('right'));

    var categories = [{ name: "吐鲁番" }];
    option = {
        // 图的标题
        // title: {
        //     text: 'ECharts 图谱可视化'
        // },
        // 提示框的配置
        color: ['#fac858'],
        tooltip: {
            formatter: function (x) {
                return x.data.des;
            }
        },
        // 工具箱
        toolbox: {
            // 显示工具箱
            show: true,
            feature: {
                mark: {
                    show: true
                },
                // 还原
                restore: {
                    show: true
                },
                // 保存为图片
                saveAsImage: {
                    show: true
                }
            }
        },
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        series: [{
            type: 'graph', // 类型:关系图
            layout: 'force', //图的布局，类型为力导图
            symbolSize: 40, // 调整节点的大小
            roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移,可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            edgeSymbol: ['circle', 'arrow'],
            edgeSymbolSize: [2, 10],
            edgeLabel: {
                normal: {
                    textStyle: {
                        fontSize: 20,
                        fontcolor: 'white'
                    }
                }
            },
            force: {
                repulsion: 2500,
                edgeLength: [10, 500]
            },
            draggable: true,
            lineStyle: {
                normal: {
                    width: 2,
                    color: '#4b565b',
                }
            },
            edgeLabel: {
                normal: {
                    show: true,
                    formatter: function (x) {
                        return x.data.name;
                    }
                }
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {}
                }
            },
            // 数据
            data: [
                { "name": '吐鲁番', "symbolSize": 100, "category": '吐鲁番', },
                { "name": '葡萄沟', "symbolSize": 50, "category": '吐鲁番', },
                { "name": '火焰山', "symbolSize": 50, "category": '吐鲁番', },
                { "name": '地层', "symbolSize": 50, "category": '吐鲁番', },
                { "name": '侏罗纪', "symbolSize": 50, "category": '吐鲁番', },
                { "name": '白垩纪', "symbolSize": 50, "category": '吐鲁番', },
                { "name": '古近系', "symbolSize": 50, "category": '吐鲁番', },
                { "name": '中国最热的地方', "symbolSize": 50, "category": '吐鲁番', },
                { "name": '82.3℃', "symbolSize": 50, "category": '吐鲁番', },
                { "name": '《西游记》', "symbolSize": 50, "category": '吐鲁番', },
                { "name": '孙悟空', "symbolSize": 50, "category": '吐鲁番', },
                { "name": '借芭蕉扇', "symbolSize": 50, "category": '吐鲁番', },
                { "name": '维吾尔族民间传说', "symbolSize": 50, "category": '吐鲁番', "des": "维吾尔族民间传说天山深处有一只恶龙，专吃童男童女。当地最高统治者沙托克布喀拉汗为除害安民，特派哈拉和卓去降伏恶龙。" },
            ],


            //inner


            links: [
                { source: '吐鲁番', target: '葡萄沟', name: '主要景点' },
                { source: '吐鲁番', target: '火焰山', name: '主要景点' },
                { source: '火焰山', target: '地层', name: '包含' },
                { source: '地层', target: '侏罗纪', name: '包含' },
                { source: '地层', target: '白垩纪', name: '包含' },
                { source: '地层', target: '古近系', name: '包含' },
                { source: '吐鲁番', target: '中国最热的地方', },
                { source: '中国最热的地方', target: '82.3℃', name: '最高温度' },
                { source: '吐鲁番', target: '《西游记》', name: '典故记载' },
                { source: '《西游记》', target: '孙悟空', name: '景点人物' },
                { source: '《西游记》', target: '借芭蕉扇', name: '故事' },
                { source: '吐鲁番', target: '借芭蕉扇', name: '故事' },
                { source: '吐鲁番', target: '维吾尔族民间传说', name: '故事' },
            ],
            categories: categories,
        }]
    };
    myChart.on("click", function (item) {
        let container = document.querySelector(".detail-container");
        if (!item.data.del) {
            item.data.del = '暂无更多介绍'
        }
        container.innerHTML = item.data.del;
    })
    myChart.setOption(option);
}