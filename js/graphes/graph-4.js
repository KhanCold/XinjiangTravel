window.onload = function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('right'));

    var categories = [{ name: "那拉提" },];
    option = {
        // 图的标题
        // title: {
        //     text: 'ECharts 图谱可视化'
        // },
        // 提示框的配置
        color: ['#ee6666'],
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
                { "name": '草原部落', "symbolSize": 50, "category": '那拉提', },
                { "name": '塔吾萨尼', "symbolSize": 50, "category": '那拉提', },
                { "name": '乌孙古迹', "symbolSize": 50, "category": '那拉提', },
                { "name": '依提根塞', "symbolSize": 50, "category": '那拉提', },
                { "name": '代格拉斯', "symbolSize": 50, "category": '那拉提', },
                { "name": '那拉提', "symbolSize": 100, "category": '那拉提', },
            ],


            //inner


            links: [
                { source: '那拉提', target: '草原部落', name: '主要景点' },
                { source: '那拉提', target: '塔吾萨尼', name: '主要景点' },
                { source: '那拉提', target: '乌孙古迹', name: '主要景点' },
                { source: '那拉提', target: '依提根塞', name: '主要景点' },
                { source: '那拉提', target: '代格拉斯', name: '主要景点' },
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