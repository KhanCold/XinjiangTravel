window.onload = function () {
    // 百度地图API功能
    var map = new BMapGL.Map("allmap");
    var point = new BMapGL.Point(83.41149, 40.36464);
    map.centerAndZoom(point, 7);
    map.enableScrollWheelZoom(true);
    map.setTilt(50);
    map.enableScrollWheelZoom();
    var bd = new BMapGL.Boundary();
    bd.get('新疆维吾尔族自治区', function (rs) {
        var count = rs.boundaries.length; //行政区域的点有多少个
        var pointArray = [];
        for (var i = 0; i < count; i++) {
            var path = [];
            str = rs.boundaries[i].replace(' ', '');
            points = str.split(';');
            for (var j = 0; j < points.length; j++) {
                var lng = points[j].split(',')[0];
                var lat = points[j].split(',')[1];
                path.push(new BMapGL.Point(lng, lat));
            }
            var prism = new BMapGL.Prism(path, 5000, {
                topFillColor: '#5679ea',
                topFillOpacity: 0.5,
                sideFillColor: '#5679ea',
                sideFillOpacity: 0.9

            });
            map.addOverlay(prism);
        }
    });
    var styleJson = [{
        "featureType": "land",
        "elementType": "geometry",
        "stylers": {
            "color": "#242f3eff"
        }
    }, {
        "featureType": "manmade",
        "elementType": "geometry",
        "stylers": {
            "color": "#242f3eff"
        }
    }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": {
            "color": "#17263cff"
        }
    }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#9e7d60ff"
        }
    }, {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#554631ff"
        }
    }, {
        "featureType": "districtlabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#d69563ff"
        }
    }, {
        "featureType": "districtlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#17263cff",
            "weight": 3
        }
    }, {
        "featureType": "poilabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#d69563ff"
        }
    }, {
        "featureType": "poilabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#17263cff",
            "weight": 3
        }
    }, {
        "featureType": "subway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "railway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "poilabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "subwaylabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "subwaylabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "tertiarywaysign",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "tertiarywaysign",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "provincialwaysign",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "provincialwaysign",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "nationalwaysign",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "nationalwaysign",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "highwaysign",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "highwaysign",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "green",
        "elementType": "geometry",
        "stylers": {
            "color": "#263b3eff"
        }
    }, {
        "featureType": "nationalwaysign",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#d0021bff"
        }
    }, {
        "featureType": "nationalwaysign",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#ffffffff"
        }
    }, {
        "featureType": "city",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
    }, {
        "featureType": "city",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "city",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#d69563ff"
        }
    }, {
        "featureType": "city",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#17263cff"
        }
    }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#d69563ff"
        }
    }, {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#242f3eff"
        }
    }, {
        "featureType": "local",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#38414eff"
        }
    }, {
        "featureType": "local",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
    }, {
        "featureType": "fourlevelway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#38414eff"
        }
    }, {
        "featureType": "fourlevelway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
    }, {
        "featureType": "tertiaryway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#38414eff"
        }
    }, {
        "featureType": "tertiaryway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#ffffff00"
        }
    }, {
        "featureType": "tertiaryway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#759879ff"
        }
    }, {
        "featureType": "fourlevelway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#759879ff"
        }
    }, {
        "featureType": "highway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#759879ff"
        }
    }, {
        "featureType": "highway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#9e7d60ff"
        }
    }, {
        "featureType": "highway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#554631ff"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#9e7d60ff"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#554631ff"
        }
    }, {
        "featureType": "tertiaryway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#1a2e1cff"
        }
    }, {
        "featureType": "fourlevelway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#1a2e1cff"
        }
    }, {
        "featureType": "highway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#1a2e1cff"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#1a2e1cff"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#759879ff"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#9e7d60ff"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#554631ff"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#9e7d60ff"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#554631ff"
        }
    }, {
        "featureType": "arterial",
        "elementType": "geometry.fill",
        "stylers": {
            "color": "#9e7d60ff"
        }
    }, {
        "featureType": "arterial",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#554631fa"
        }
    }, {
        "featureType": "medicallabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "medicallabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "entertainmentlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "entertainmentlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "estatelabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "estatelabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "businesstowerlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "businesstowerlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "companylabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "companylabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "governmentlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "governmentlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "restaurantlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "restaurantlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "hotellabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "hotellabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "shoppinglabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "shoppinglabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "lifeservicelabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "lifeservicelabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "carservicelabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "carservicelabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "financelabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "financelabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "otherlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "otherlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "airportlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "on"
        }
    }, {
        "featureType": "airportlabel",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#d69563ff"
        }
    }, {
        "featureType": "airportlabel",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#17263cff"
        }
    }, {
        "featureType": "airportlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "highway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "6"
        }
    }, {
        "featureType": "highway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "7"
        }
    }, {
        "featureType": "highway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "8"
        }
    }, {
        "featureType": "highway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "9"
        }
    }, {
        "featureType": "highway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "10"
        }
    }, {
        "featureType": "highway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "6"
        }
    }, {
        "featureType": "highway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "7"
        }
    }, {
        "featureType": "highway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "8"
        }
    }, {
        "featureType": "highway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "9"
        }
    }, {
        "featureType": "highway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "10"
        }
    }, {
        "featureType": "nationalway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "6"
        }
    }, {
        "featureType": "nationalway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "7"
        }
    }, {
        "featureType": "nationalway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "8"
        }
    }, {
        "featureType": "nationalway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "9"
        }
    }, {
        "featureType": "nationalway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "10"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "6"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "7"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "8"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "9"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "10"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "6"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "7"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "8"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "9"
        }
    }, {
        "featureType": "nationalway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "10"
        }
    }, {
        "featureType": "highway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "6"
        }
    }, {
        "featureType": "highway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "7"
        }
    }, {
        "featureType": "highway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "8"
        }
    }, {
        "featureType": "highway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "9"
        }
    }, {
        "featureType": "highway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "10"
        }
    }, {
        "featureType": "provincialway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "8,9",
            "level": "8"
        }
    }, {
        "featureType": "provincialway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "8,9",
            "level": "9"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "8,9",
            "level": "8"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "8,9",
            "level": "9"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "8,9",
            "level": "8"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "8,9",
            "level": "9"
        }
    }, {
        "featureType": "cityhighway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "6"
        }
    }, {
        "featureType": "cityhighway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "7"
        }
    }, {
        "featureType": "cityhighway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "8"
        }
    }, {
        "featureType": "cityhighway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "9"
        }
    }, {
        "featureType": "cityhighway",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "10"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "6"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "7"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "8"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "9"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "10"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "6"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "7"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "8"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "9"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "6,10",
            "level": "10"
        }
    }, {
        "featureType": "arterial",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "9,10",
            "level": "9"
        }
    }, {
        "featureType": "arterial",
        "stylers": {
            "curZoomRegionId": "0",
            "curZoomRegion": "9,10",
            "level": "10"
        }
    }, {
        "featureType": "arterial",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "9,10",
            "level": "9"
        }
    }, {
        "featureType": "arterial",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "9,10",
            "level": "10"
        }
    }, {
        "featureType": "arterial",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "9,10",
            "level": "9"
        }
    }, {
        "featureType": "arterial",
        "elementType": "labels",
        "stylers": {
            "visibility": "off",
            "curZoomRegionId": "0",
            "curZoomRegion": "9,10",
            "level": "10"
        }
    }, {
        "featureType": "building",
        "elementType": "geometry.topfill",
        "stylers": {
            "color": "#2a3341ff"
        }
    }, {
        "featureType": "building",
        "elementType": "geometry.sidefill",
        "stylers": {
            "color": "#313b4cff"
        }
    }, {
        "featureType": "building",
        "elementType": "geometry.stroke",
        "stylers": {
            "color": "#1a212eff"
        }
    }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#759879ff"
        }
    }, {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#1a2e1cff"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#759879ff"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#759879ff"
        }
    }, {
        "featureType": "arterial",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#759879ff"
        }
    }, {
        "featureType": "provincialway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#1a2e1cff"
        }
    }, {
        "featureType": "cityhighway",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#1a2e1cff"
        }
    }, {
        "featureType": "arterial",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#1a2e1cff"
        }
    }, {
        "featureType": "local",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "manmade",
        "elementType": "labels.text.fill",
        "stylers": {
            "color": "#d69563ff"
        }
    }, {
        "featureType": "manmade",
        "elementType": "labels.text.stroke",
        "stylers": {
            "color": "#17263cff"
        }
    }, {
        "featureType": "subwaystation",
        "elementType": "geometry",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "transportationlabel",
        "elementType": "labels.icon",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "transportationlabel",
        "elementType": "labels",
        "stylers": {
            "visibility": "off"
        }
    }, {
        "featureType": "estate",
        "elementType": "geometry",
        "stylers": {
            "color": "#2a3341ff"
        }
    }];
    map.setMapStyleV2({ styleJson: styleJson });

    var citys = [{
        name: '阿勒泰地区布尔津县喀纳斯景区',
        img: '/images/sight-icon/icon-1.png',
    }, {
        name: '昌吉回族自治州阜康市天山天池风景区',
        img: '/images/sight-icon/icon-2.png',
    },
    {
        name: '新疆维吾尔自治区吐鲁番市吐鲁番市',
        img: '/images/sight-icon/icon-3.png',
    },
    {
        name: '伊犁哈萨克自治州新源县那拉提草原',
        img: '/images/sight-icon/icon-4.png',
    },
    {
        name: '阿勒泰地区富蕴县新疆可可托海景区',
        img: '/images/sight-icon/icon-5.png',
    },
    {
        name: '巴音郭楞蒙古自治州和静县巴音布鲁克镇',
        img: '/images/sight-icon/icon-6.png',
    },
    {
        name: '喀什地区喀什市喀什古城',
        img: '/images/sight-icon/icon-7.png',
    },
    {
        name: '博尔塔拉蒙古自治州博乐市赛里木湖国家级风景名胜区',
        img: '/images/sight-icon/icon-8.png',
    },
    ];

    var cityGeo = new BMapGL.Geocoder();
    for (let i = 0; i < citys.length; i++) {
        cityGeo.getPoint(citys[i].name, function (point) { // 地址解析获取对应经纬度
            var pt = new BMapGL.Point(point.lng, point.lat);
            var icon = new BMapGL.Icon(citys[i].img, new BMapGL.Size(20, 20));
            var marker = new BMapGL.Marker3D(pt, Math.round(Math.random()) * 3000, {
                size: 60,
                icon: icon
            });



            let url = window.location.href;
            url = url.substring(0, url.length - 11);

            console.log(url);

            marker.addEventListener('click', function (item) {
                window.location.href = url + '/graphes/graph-' + (i + 1) + '.html';
            })
            map.addOverlay(marker);
        });
    }
}
