ymaps.ready(init);
    var myMap;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [55.9, 48.22],
            zoom: 6,
             controls: []
        });

        myPlacemark = new ymaps.Placemark(// Ульяновск
        	[54.19, 48.22], {},{
        		iconLayout: 'default#image',
        		iconImageHref: 'images/point.gif',
        		iconImageSize: [49, 55],
        		iconImageOffset: [-18, -70]
    	});
    	razPlacemark = new ymaps.Placemark(// Рязань
        	[54.37, 39.43], {},{ 
        		iconLayout: 'default#image',
        		iconImageHref: 'images/point-razan.gif',
        		iconImageSize: [51, 47],
        		iconImageOffset: [-23, -62]
    	});
    	ufaPlacemark = new ymaps.Placemark(// Уфа
        	[54.44, 55.58], {},{
        		iconLayout: 'default#image',
        		iconImageHref: 'images/point-ufa.gif',
        		iconImageSize: [57, 49],
        		iconImageOffset: [-20, -70]
    	});
    	sarPlacemark = new ymaps.Placemark(// Саранск
        	[54.11, 45.11], {},{
        		iconLayout: 'default#image',
        		iconImageHref: 'images/point-saransk.gif',
        		iconImageSize: [46, 32],
        		iconImageOffset: [-35, -37]
    	});

        myMap.geoObjects.add(myPlacemark);
        myMap.geoObjects.add(razPlacemark);
        myMap.geoObjects.add(ufaPlacemark);
        myMap.geoObjects.add(sarPlacemark);

        myPlacemark.events.add('click', function () {
    		$(".map .jumbotron").fadeToggle('slow');
		});
		myMap.events.add('click', function () {
    		$(".map .jumbotron").fadeOut('slow');
		});
    }