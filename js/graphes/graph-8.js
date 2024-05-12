window.onload = function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('right'));

    var categories = [{ name: "赛里木湖" }];
    option = {
        // 图的标题
        // title: {
        //     text: 'ECharts 图谱可视化'
        // },
        // 提示框的配置
        color: ['#9a60b4'],
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
                { "name": '赛里木湖', "symbolSize": 100, "category": '赛里木湖', },
                { "name": '净海', "symbolSize": 50, "category": '赛里木湖', },
                { "name": '高白鲑', "symbolSize": 50, "category": '赛里木湖', },
                { "name": '凹目白鲑', "symbolSize": 50, "category": '赛里木湖', },
                { "name": '环湖风光游览区域', "symbolSize": 50, "category": '赛里木湖', },
                { "name": '草原游牧风情区域', "symbolSize": 50, "category": '赛里木湖', },
                { "name": '生态景观保育区', "symbolSize": 50, "category": '赛里木湖', },

            ],


            //inner


            links: [
                { source: '赛里木湖', target: '净海', name: '古称' },
                { source: '赛里木湖', target: '高白鲑', name: '产出' },
                { source: '赛里木湖', target: '凹目白鲑', name: '产出' },
                { source: '赛里木湖', target: '环湖风光游览区域', name: '主要景点' },
                { source: '赛里木湖', target: '草原游牧风情区域', name: '主要景点' },
                { source: '赛里木湖', target: '生态景观保育区', name: '主要景点' },
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