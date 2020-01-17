// Яндекс карта
function init(ymaps) {
  var map = new ymaps.Map('map', {
    center: [59.93863106417265, 30.3230545],
    zoom: 16,
    controls: []
  });

  var placemark = new ymaps.Placemark(
    [59.93867682348719, 30.323043771163896],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: 'img/map-pin.png',
      iconImageSize: [35, 35],
      iconImageOffset: [-17.5, -17.5]
    }
  );

  var zoomControl = new ymaps.control.ZoomControl({
    options: {
      position: {
        left: 10,
        bottom: 50
      }
    }
  });

  map.behaviors.disable('scrollZoom');
  map.geoObjects.add(placemark);
  map.controls.add(zoomControl);
}
