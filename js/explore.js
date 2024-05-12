window.onload = function () {

    let nations = [
        {
            name: '喀纳斯',
            url: 'url("./images/1.png") no-repeat top center'
        },
        {
            name: '天山天池',
            url: 'url("./images/2.png") no-repeat top center'
        },
        {
            name: '吐鲁番',
            url: 'url("./images/3.png") no-repeat top center'
        },
        {
            name: '那拉提',
            url: 'url("./images/4.png") no-repeat top center'
        },
        {
            name: '可可托海',
            url: 'url("./images/5.png") no-repeat top center'
        },
        {
            name: '巴音布鲁克',
            url: 'url("./images/6.png") no-repeat top center'
        },
        {
            name: '喀什古城',
            url: 'url("./images/7.png") no-repeat top center'
        },
        {
            name: '赛里木湖',
            url: 'url("./images/8.png") no-repeat top center'
        },
    ]

    let container = document.querySelector('.right');

    let index = 1;
    //1.循环遍历nations数组
    nations.forEach(function (item) {

        //为每个对象生成一个div对象
        let div = document.createElement('div');

        //生成一个a标签
        let a = document.createElement('a');
        a.href = './details/detail-' + index + '.html';
        // a.target = "_blank";
        a.style.background = item.url;
        a.style.backgroundSize = "auto 100%";

        //生成一个div,蒙版
        let meng = document.createElement('div');
        meng.className = 'meng';
        meng.innerHTML = item.name;

        a.append(meng);
        div.appendChild(a);
        container.appendChild(div);

        index = index + 1;
    })

};
