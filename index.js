require([
  "esri/config",
  "esri/Map",
  "esri/renderers/SimpleRenderer",
  "esri/symbols/PointSymbol3D",
  "esri/symbols/IconSymbol3DLayer",
  "esri/views/SceneView",
  "esri/layers/CSVLayer",
], function (
  esriConfig,
  Map,
  SimpleRenderer,
  PointSymbol3D,
  IconSymbol3DLayer,
  SceneView,
  CSVLayer,
) {

  esriConfig.apiKey = config.API_KEY;

  const csvLayer = new CSVLayer({
    title: "March 17 Tornado Reports",
    url: "210317_rpts.csv",
    copyright: "NOAA",
    renderer: {
      type: "unique-value",
      field: "Category",
    },
    elevationInfo: {
      mode: "on-the-ground"
    }
  });

  csvLayer.renderer = new SimpleRenderer({
    type: "simple",
    symbol: new PointSymbol3D({
      symbolLayers: [
        new IconSymbol3DLayer({
          material: {
            color: [255, 55, 0]
          },
          outline: {
            width: 0.5,
            color: "black"
          },
          size: "8px"
        })
      ]
    })
  });

  const map = new Map({
    basemap: "dark-gray-vector",
    layers: [csvLayer]
  });

  const view = new SceneView({
    map,
    center: [-89, 33],
    zoom: 5,
    container: "viewDiv"
  });

  map.add(csvLayer);

});