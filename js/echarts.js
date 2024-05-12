window.onload = function () {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('right'));

    var categories = [{ name: "喀纳斯" }, { name: "天山天池" }, { name: "吐鲁番" }, { name: "那拉提" }, { name: "可可托海" }, { name: "巴音布鲁克" }, { name: "喀什古城" }, { name: "赛里木湖" }];
    option = {
        // 图的标题
        // title: {
        //     text: 'ECharts 图谱可视化'
        // },
        // 提示框的配置
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
                { "name": '喀纳斯', "symbolSize": 100, "category": '喀纳斯', },
                { "name": '三湾', "symbolSize": 50, "category": '喀纳斯', },
                { "name": '神仙湾', "symbolSize": 50, "category": '喀纳斯', },
                { "name": '月亮湾', "symbolSize": 50, "category": '喀纳斯', },
                { "name": '卧龙湾', "symbolSize": 50, "category": '喀纳斯', },
                { "name": '观鱼台', "symbolSize": 50, "category": '喀纳斯', },
                { "name": '喀纳斯湖', "symbolSize": 50, "category": '喀纳斯', },
                { "name": '1987年', "symbolSize": 50, "category": '喀纳斯', },
                { "name": '160元', "symbolSize": 50, "category": '喀纳斯', },
                { "name": '天山天池', "symbolSize": 100, "category": '天山天池', },
                { "name": '280元', "symbolSize": 50, "category": '天山天池', },
                { "name": '瑶池', "symbolSize": 50, "category": '天山天池', },
                { "name": '瑶池都护府', "symbolSize": 50, "category": '天山天池', "des": "唐太宗时曾在博格达峰下设立过'瑶池都护府'" },
                { "name": '新疆都统明亮', "symbolSize": 50, "category": '天山天池', "des": "清乾隆四十八年（1783年），新疆都统明亮曾到博格达山、天池勘察地形，开石引水" },
                { "name": '西小天池', "symbolSize": 50, "category": '天山天池', },
                { "name": '东小天池', "symbolSize": 50, "category": '天山天池', },
                { "name": '王母脚盆', "symbolSize": 50, "category": '天山天池', },
                { "name": '西王母', "symbolSize": 50, "category": '天山天池', },
                { "name": '西王母庙', "symbolSize": 50, "category": '天山天池', },
                { "name": '王母', "symbolSize": 50, "category": '天山天池', },
                { "name": '女仙之首', "symbolSize": 50, "category": '天山天池', },
                { "name": '阴气、修仙、生育万物', "symbolSize": 50, "category": '天山天池', },
                { "name": '《山海经·西山经》', "symbolSize": 50, "category": '天山天池', },
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
                { "name": '草原部落', "symbolSize": 50, "category": '那拉提', },
                { "name": '塔吾萨尼', "symbolSize": 50, "category": '那拉提', },
                { "name": '乌孙古迹', "symbolSize": 50, "category": '那拉提', },
                { "name": '依提根塞', "symbolSize": 50, "category": '那拉提', },
                { "name": '代格拉斯', "symbolSize": 50, "category": '那拉提', },
                { "name": '那拉提', "symbolSize": 100, "category": '那拉提', },
                { "name": '可可托海', "symbolSize": 100, "category": '可可托海', },
                { "name": '1930年', "symbolSize": 50, "category": '可可托海', },
                { "name": '90元', "symbolSize": 50, "category": '可可托海', },
                { "name": '巴音布鲁克', "symbolSize": 50, "category": '巴音布鲁克', },
                { "name": '289元', "symbolSize": 50, "category": '巴音布鲁克', },
                { "name": '姑师人', "symbolSize": 50, "category": '巴音布鲁克', "des": "远在2600多年前，巴音布鲁克即有姑师人活动。" },
                { "name": '土尔扈特民俗文化村', "symbolSize": 50, "category": '巴音布鲁克', "des": "远在2600多年前，巴音布鲁克即有姑师人活动。" },
                { "name": '巴音布鲁克展示中心', "symbolSize": 50, "category": '巴音布鲁克', "des": "远在2600多年前，巴音布鲁克即有姑师人活动。" },
                { "name": '草原之恋', "symbolSize": 50, "category": '巴音布鲁克', "des": "远在2600多年前，巴音布鲁克即有姑师人活动。" },
                { "name": '天鹅湖', "symbolSize": 50, "category": '巴音布鲁克', "des": "远在2600多年前，巴音布鲁克即有姑师人活动。" },
                { "name": '九曲十八弯', "symbolSize": 50, "category": '巴音布鲁克', "des": "远在2600多年前，巴音布鲁克即有姑师人活动。" },
                { "name": '喀什噶尔古城', "symbolSize": 50, "category": '喀什古城', },
                { "name": '喀什古城', "symbolSize": 100, "category": '喀什古城', },
                { "name": '盘橐城', "symbolSize": 50, "category": '喀什古城', "des": "疏勒国都改称“盘橐城”" },
                { "name": '疏勒城', "symbolSize": 50, "category": '喀什古城', "des": "前身即西汉时疏勒城" },
                { "name": '《汉书·西域传》', "symbolSize": 50, "category": '喀什古城', "des": "前身即西汉时疏勒城" },
                { "name": '张骞', "symbolSize": 50, "category": '喀什古城', "des": "前身即西汉时疏勒城" },
                { "name": '莫尔佛塔', "symbolSize": 50, "category": '喀什古城', },
                { "name": '艾提尕尔清真寺', "symbolSize": 50, "category": '喀什古城', },
                { "name": '香妃故园', "symbolSize": 50, "category": '喀什古城', },
                { "name": '赛里木湖', "symbolSize": 100, "category": '赛里木湖', },
                { "name": '净海', "symbolSize": 50, "category": '赛里木湖', },
                { "name": '高白鲑', "symbolSize": 50, "category": '赛里木湖', },
                { "name": '凹目白鲑', "symbolSize": 50, "category": '赛里木湖', },
                { "name": '环湖风光游览区域', "symbolSize": 50, "category": '赛里木湖', },
                { "name": '草原游牧风情区域', "symbolSize": 50, "category": '赛里木湖', },
                { "name": '生态景观保育区', "symbolSize": 50, "category": '赛里木湖', },
                { "name": '昆仑山', "symbolSize": 50, "category": '天山天池', },
                { "name": '先秦神话', "symbolSize": 50, "category": '天山天池', },
                { "name": '道教神话', "symbolSize": 50, "category": '天山天池', },
                { "name": '民间神话', "symbolSize": 50, "category": '天山天池', },

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
                { source: '天山天池', target: '280元', name: '景区门票', },
                { source: '天山天池', target: '瑶池', name: '古称', },
                { source: '天山天池', target: '瑶池都护府', name: '历史渊源', },
                { source: '新疆都统明亮', target: '天山天池', name: '勘察地形', },
                { source: '天山天池', target: '西小天池', name: '主要景点', },
                { source: '天山天池', target: '东小天池', name: '主要景点', },
                { source: '西小天池', target: '王母脚盆', name: '别称', },
                { source: '王母脚盆', target: '西王母', },
                { source: '西王母', target: '王母', name: '别称' },
                { source: '西王母', target: '女仙之首', name: '神话地位' },
                { source: '西王母', target: '阴气、修仙、生育万物', name: '掌管' },
                { source: '西王母', target: '《山海经·西山经》', name: '记载于' },
                { source: '天山天池', target: '西王母庙', name: '主要景点' },
                { source: '西王母庙', target: '西王母', },
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
                { source: '那拉提', target: '草原部落', name: '主要景点' },
                { source: '那拉提', target: '塔吾萨尼', name: '主要景点' },
                { source: '那拉提', target: '乌孙古迹', name: '主要景点' },
                { source: '那拉提', target: '依提根塞', name: '主要景点' },
                { source: '那拉提', target: '代格拉斯', name: '主要景点' },
                { source: '可可托海', target: '1930年', name: '初次发现' },
                { source: '可可托海', target: '90元', name: '门票价格' },
                { source: '巴音布鲁克', target: '289元', name: '门票价格' },
                { source: '巴音布鲁克', target: '姑师人', name: '初次活动' },
                { source: '巴音布鲁克', target: '土尔扈特民俗文化村', name: '主要景点' },
                { source: '巴音布鲁克', target: '巴音布鲁克展示中心', name: '主要景点' },
                { source: '巴音布鲁克', target: '草原之恋', name: '主要景点' },
                { source: '巴音布鲁克', target: '天鹅湖', name: '主要景点' },
                { source: '喀什古城', target: '喀什噶尔古城', name: '全称' },
                { source: '喀什古城', target: '盘橐城', name: '疏勒国都改称' },
                { source: '喀什古城', target: '疏勒城', name: '西汉时别称' },
                { source: '《汉书·西域传》', target: '喀什古城', name: '记载' },
                { source: '张骞', target: '《汉书·西域传》', name: '记载' },
                { source: '张骞', target: '喀什古城', name: '途径' },
                { source: '喀什古城', target: '莫尔佛塔', name: '主要景点' },
                { source: '喀什古城', target: '艾提尕尔清真寺', name: '主要景点' },
                { source: '喀什古城', target: '香妃故园', name: '主要景点' },
                { source: '赛里木湖', target: '净海', name: '古称' },
                { source: '赛里木湖', target: '高白鲑', name: '产出' },
                { source: '赛里木湖', target: '凹目白鲑', name: '产出' },
                { source: '赛里木湖', target: '环湖风光游览区域', name: '主要景点' },
                { source: '赛里木湖', target: '草原游牧风情区域', name: '主要景点' },
                { source: '赛里木湖', target: '生态景观保育区', name: '主要景点' },
                { source: '西王母', target: '昆仑山', name: '居所' },
                { source: '西王母', target: '先秦神话', name: '所属分类' },
                { source: '西王母', target: '道教神话', name: '所属分类' },
                { source: '西王母', target: '民间神话', name: '所属分类' },

            ],
            categories: categories,
        }]
    };
    myChart.setOption(option);
}