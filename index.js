require([
  "esri/config",
  "esri/Map",
  "esri/renderers/SimpleRenderer",
  "esri/views/MapView",
  "esri/layers/CSVLayer",
], function (
  esriConfig,
  Map,
  SimpleRenderer,
  MapView,
  CSVLayer,
) {

  esriConfig.apiKey = config.API_KEY;

  const template = {
    title: "Tornado Report",
    content: `REPORTED AT {Time}<br><br>
             {Location}, {State}.<br><br>
             {Comments}.`
  };

  const csvLayer = new CSVLayer({
    title: "March 17, 2021 Tornado Reports",
    url: "210317_rpts.csv",
    copyright: "NOAA",
    renderer: {
      type: "unique-value",
      field: "Category",
    },
    popupTemplate: template
  });

  csvLayer.renderer = new SimpleRenderer({
    type: "simple",
    symbol: {
      type: "simple-marker", 
      size: 8,
      color: [255, 0, 0, 0.75],
      outline: {
        color: "black",
      }
    }
  });

  const map = new Map({
    basemap: "dark-gray-vector",
    layers: [csvLayer]
  });

  const view = new MapView({
    map,
    center: [-89, 33],
    zoom: 5,
    container: "viewDiv"
  });

});