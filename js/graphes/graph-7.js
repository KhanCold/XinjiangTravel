window.onload = function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('right'));

    var categories = [{ name: "喀什古城" },];
    option = {
        // 图的标题
        // title: {
        //     text: 'ECharts 图谱可视化'
        // },
        // 提示框的配置
        color: ['#fc8452'],
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
                { "name": '喀什噶尔古城', "symbolSize": 50, "category": '喀什古城', },
                { "name": '喀什古城', "symbolSize": 100, "category": '喀什古城', },
                { "name": '盘橐城', "symbolSize": 50, "category": '喀什古城', "des": "疏勒国都改称“盘橐城”" },
                { "name": '疏勒城', "symbolSize": 50, "category": '喀什古城', "des": "前身即西汉时疏勒城" },
                { "name": '《汉书·西域传》', "symbolSize": 50, "category": '喀什古城', "des": "前身即西汉时疏勒城" },
                { "name": '张骞', "symbolSize": 50, "category": '喀什古城', "des": "前身即西汉时疏勒城" },
                { "name": '莫尔佛塔', "symbolSize": 50, "category": '喀什古城', },
                { "name": '艾提尕尔清真寺', "symbolSize": 50, "category": '喀什古城', },
                { "name": '香妃故园', "symbolSize": 50, "category": '喀什古城', },
            ],


            //inner


            links: [
                { source: '喀什古城', target: '喀什噶尔古城', name: '全称' },
                { source: '喀什古城', target: '盘橐城', name: '疏勒国都改称' },
                { source: '喀什古城', target: '疏勒城', name: '西汉时别称' },
                { source: '《汉书·西域传》', target: '喀什古城', name: '记载' },
                { source: '张骞', target: '《汉书·西域传》', name: '记载' },
                { source: '张骞', target: '喀什古城', name: '途径' },
                { source: '喀什古城', target: '莫尔佛塔', name: '主要景点' },
                { source: '喀什古城', target: '艾提尕尔清真寺', name: '主要景点' },
                { source: '喀什古城', target: '香妃故园', name: '主要景点' }
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