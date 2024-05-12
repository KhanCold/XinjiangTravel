window.onload = function () {
    //数据
    let nations = [
        {
            url: '../images/screen/1.png'
        },
        {
            url: '../images/screen/2.png'
        },
        {
            url: '../images/screen/3.png'
        },
        {
            url: '../images/screen/4.png'
        },
        {
            url: '../images/screen/5.png'
        },
        {
            url: '../images/screen/6.png'
        },
        {
            url: '../images/screen/7.png'
        },
        {
            url: '../images/screen/8.png'
        },
    ]

    let url = window.location.href;
    let index = url.substr(-6, 1) - 1;

    let item = nations[index];

    let div = document.querySelector(".right");
    var PSV = new PhotoSphereViewer({
        // 全景图地址，这里需要特别注意，需要使用网络上的图片，如果使用本地的文件，会报CORS跨域请求错误，当然如果你的网络Web应用已经部署在服务器上，可以忽略这个问题
        panorama: item.url,
        container: div,
        time_anim: 3000,
        navbar: true,
        navbar_style: {
            backgroundColor: 'rgba(58, 67, 77, 0.7)'
        },
    });
}