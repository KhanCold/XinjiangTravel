window.onload = function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('right'));

    var categories = [{ name: "喀纳斯" }];
    option = {
        // 图的标题
        // title: {
        //     text: 'ECharts 图谱可视化'
        // },
        // 提示框的配置
        color: ['#5470c6'],

        tooltip: {
            formatter: function (x) {
                return x.data.des;
            }
        },
        legend: [{
            selectedMode: 'single',
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
                { "name": '喀纳斯', "symbolSize": 100, "category": '喀纳斯', "del": "喀纳斯风景区，位于新疆阿尔泰山中段，地处中国与哈萨克斯坦、俄罗斯、蒙古国接壤地带，景区面积10030平方公里。", },
                { "name": '三湾', "symbolSize": 50, "category": '喀纳斯', "del": "三湾" },
                { "name": '神仙湾', "symbolSize": 50, "category": '喀纳斯', "del": "神仙湾" },
                { "name": '月亮湾', "symbolSize": 50, "category": '喀纳斯', "del": "月亮湾" },
                { "name": '卧龙湾', "symbolSize": 50, "category": '喀纳斯', "del": "卧龙湾" },
                { "name": '观鱼台', "symbolSize": 50, "category": '喀纳斯', "del": "登观鱼台是到喀纳斯旅游行程中最后的那个惊叹号。不登观鱼台，不足以领略喀纳斯美景美景的极致；不登观鱼台，更不足以感悟人生的真谛所在。" },
                { "name": '喀纳斯湖', "symbolSize": 50, "category": '喀纳斯', "del": "喀纳斯湖" },
                { "name": '1987年', "symbolSize": 50, "category": '喀纳斯', "del": "1987年" },
                { "name": '160元', "symbolSize": 50, "category": '喀纳斯', "del": "160元" },
            ],

            //inner
            links: [
                { source: '喀纳斯', target: '三湾', name: '包含', },
                { source: '三湾', target: '神仙湾', name: '包含', },
                { source: '三湾', target: '月亮湾', name: '包含', },
                { source: '三湾', target: '卧龙湾', name: '包含', },
                { source: '喀纳斯', target: '观鱼台', name: '主要景点', },
                { source: '喀纳斯', target: '喀纳斯湖', name: '主要景点', },
                { source: '观鱼台', target: '1987年', name: '始建于', },
                { source: '观鱼台', target: '160元', name: '景区门票', },
            ],
            categories: categories,
        }]
    };
    myChart.on("click", function (item) {
        let container = document.querySelector(".detail-container");
        container.innerHTML = item.data.del;
        console.log(item);
    })
    myChart.setOption(option);
}