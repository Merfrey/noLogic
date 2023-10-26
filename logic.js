// import data from './data/trueData.json';




// let myMap = L.map("map", {
//     center: [40.7, -73.95],
//     zoom: 11
// });

//Adding the tile layer
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(myMap);


//testing output of trueData variables
// d3.json("./data/trueData.json").then(function (data) {
// //let regionNameVar = data.RegionName;
//  // let countyNameVar = data.CountyName;


// let cityMarkers = [];
// for (let i = 0; i < trueData.length; i++) {
//     let city = trueData[i];
//     cityMarkers.push(
//         L.marker(city.regionCord).bindPopup(`<h1>${city.name}</h1>`)
//     );
// }
// let cityLayer = L.layerGroup(cityMarkers);

// let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// })
// let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//     attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
// });
// // only one layer to be shown at a time
// let baseMaps = {
//     Street: street,
//     Topograhpy: topo
// }
// let overlayMaps = {
//     Cities: cityLayer
// }
// let map = L.map("map", {
//     center: [46.2276, 2.2137],
//     zoom: 6,
//     layers: [street, cityLayer]
// })
// L.control.layers(baseMaps, overlayMaps).addTo(map);




//   }
// });

  // let queryKey = trueData[regionNameVar, countyNameVar];
d3.json("./data/trueData.json").then(function (data) {
  let regionNameVar = data.RegionName;
  let regionLatVar = data.RegionLat;
  let regionLngVar = data.RegionLng;

  // outputs both region latitude and region longitude to make region cordinates
  let regionCord = data[regionLatVar, regionLngVar];


    for (let x in data) {


      // attempt to grab the values using square bracket notation
      let regionNameVar2 = data[x]["RegionName"];
      let regionLatVar2 = data[x]["RegionLat"];
      let regionLngVar2 = data[x]["RegionLng"];

       // outputs both region latitude and region longitude to make region cordinates
      let regionCordinates2 = [];
      regionCordinates2 = [regionLatVar2, regionLngVar2];

      for (let y in data[x]) {
      console.log(y)

    }

 

  // tests variable output
     console.log(`++++++++`);
     console.log(`${x}'s cordinaties are ${regionCord}`);
     console.log(`${x}'s region name is ${regionNameVar}`);
     console.log(`${x}'s second region name is ` + regionNameVar2);
     console.log(`${x}'s second cordnaties are ` + regionCordinates2);
  //   console.log(`x is ${x}`);

  }
  },


);





// //gets region name and countyname from json and stores them into variables
//let regionNameVar = trueData.RegionName;
// let countyNameVar = trueData.CountyName;

// //tests to see if data from dataTest is even being read by above variables
//console.log(regionNameVar);



//console.log(`test of queryKey: + ${queryKey}`);
//   metroArray = []

//   //activates test call function
//   testCall();

//   //activates setLonandLat function
//   setLonAndLat();

//   //test calls the setLonAndLat function to see if its working
//   function testCall(paramOne, paramTwo)
//   {
//     let innerVar = paramOne;
//     let innerVarTwo = paramTwo;
//     setLonAndLat(innerVar, innerVarTwo);
//      console.log(innerVar, innerVarTwo);
//   }
  
//   //sets the region and county name to a array
//   function setLonAndLat(queryKey)
//   {   
//        metroArray = [queryKey];
//       // return metroArray;
//        console.log(metroArray);
  
//   }

//test grabs the regionName and CountyName key value pairs
  // for (let v in trueData){

  // }



// housingDataArray = housingDataLoop,




//contains the panel data for each pin on the map

// }

// function getLonAndLat(setLonAndLat){
//   d3.json(latAndLonURL).then(function(data)
//   {
//   for k,v in metroArray{
//     console.log(k,v)
//   }

// }



// let cityMarker = [];
// let stateMarker = [];


// for (let i = 0; i < locations.length; i++){

//     let location = locations[i];


//     cityMarker.push(
//         L.circle(countyName,
//             {
//                 radius:Math.sqrt(location.city.population)*50,
//                 fillColor : "blue",
//                 fillOpacity : 0.2,
//                 color : "blue"
//             }))

//     stateMarker.push(
//         L.circle(location.coordinates,
//             {
//                 radius:Math.sqrt(location.state.population)*50,
//                 fillColor : "red",
//                 fillOpacity : 0.2,
//                 color : "red"
//             })


//     );
// }

// let cityLayer = L.layerGroup(cityMarker);
// let stateLayer = L.layerGroup(stateMarker);

// let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// })
// let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//   attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
// });





// function createFeatures(earthquakeData) {
    
//   function onEachFeature(feature, layer) {
//       layer.bindPopup(`<h3>${feature.properties.place}</h3>  <p>  ${new Date(feature.properties.time)} </p>`)
//   }


//   let earthquakes = L.geoJSON(earthquakeData, {
//       onEachFeature: onEachFeature
//   });

//   createMap(earthquakes);

// }



// function createMap(earthquakesLayer) {


//   let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//   })

//   let topo = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//       attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//   });

//   let baseMaps = {
//     Street: street,
//     Topograhpy: topo
// }
// let overlayMaps = {
//     Earthquakes: earthquakesLayer
// }
// let map = L.map("map", {
//     center: [37.71, 2.2137],
//     zoom: 6,
//     layers: [street, earthquakesLayer]
// })