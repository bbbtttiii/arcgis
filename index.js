let map, csv;

require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/layers/CSVLayer",
], function(
  esriConfig,
  Map,
  MapView,
  CSVLayer,
  ) {

  esriConfig.apiKey = "AAPK15a27c2b83084c26983c5098b26de34aUtUT1GR3M7DDihlIdLwbAzWzrRslmB-NuSoO4cPc5PUWuVS6DUeyeapxVjpkj2Bh";

  const csvLayer = new CSVLayer({
    title: "March 17 Tornado Reports",
    url: "210317_rpts.csv",
    copyright: "NOAA",
    renderer: {
      type: "unique-value",
      field: "Category",
      // uniqueValueInfos: createUniqueValueInfos()
    }
  });

  
  const map = new Map({
    basemap: "dark-gray-vector",
    layers: [csvLayer]
  });

  
  const view = new MapView({
    map,
    center: [-96, 38],
    zoom: 3,
    container: "viewDiv"
  });
  
  map.add(csvLayer);

  // function createUniqueValueInfos() {
  //   const img = ['marker.png']
  //   return img.map(function (url, i) {
  //     return {
  //       value: i,
  //       symbol: {
  //         type: "picture-marker",
  //         url
  //       }
  //     }
  //   })
  // }

});

// 