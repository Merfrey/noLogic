

// fifteen point one city population layers use for mapping finagiling
// let link = 'https://geojson.io/#map=4.08/39.3/-97.79'

  // Getting our GeoJSON data
//  d3.json("./data/trueData.json").then(function (data) {
    // Creating a GeoJSON layer with the retrieved data
    function createMap(data){

      let streetmap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });
  
      let baseMaps = {
          "Street Map": streetmap
      }
  
  
      let overlayMaps = {
          "Region Point": data
      }
  
      let map = L.map("map", {
          center: [40.73, -74.0059],
          zoom:12,
          layers: [streetmap, data]
      })
  
      L.control.layers(baseMaps, overlayMaps, {
          collapsed: false
      }).addTo(map)
  
  }
  
  //https://gbfs.citibikenyc.com/gbfs/en/station_information.json
  function createMarkers(response){ // response is the url
  
      let bikeMarkers = []
  
      let features = response // this is holding stations array
  //
    //   for (let x in features){
    //    console.log(x)
    //   }

     // for (let i=0; i < 175; i++){
       for (let x=0; x < features.length; x++){
        //    for (let x in features){
         let station = features[x]// station is an object that's inside the stations array
  
        //console.log(station)

         //   console.log(station)

              let bikeMarker = L.marker([station.RegionLat, station.RegionLng]).bindPopup("<h3>name: "+ station.RegionName+ "</h3><h3>CountyName" +station.CountyName+  "</h3>")
      
 //             console.log(bikeMarker)

              bikeMarkers.push(bikeMarker)


          }

          // console.log(bikeMarkers)

          console.log("hello world")

          createMap(L.layerGroup(bikeMarkers))

    }
      d3.json("./data/trueData.json").then(createMarkers)

//     L.geoJson(data, {
//         style: function (feature) {
//             return {
//                 color: "white",
//                 fillColor: chooseColor(feature.Malden.RegionName),
//                 fillOpacity: 0.5,
//                 weight: 1.5
//             }
//         },
//         onEachFeature: function (feature, layer) {
//             layer.on({
//                 mouseover: function (event) {
//                     layer = event.target;
//                     layer.setStyle({
//                         fillOpacity: 0.9
//                     })
//                 },
//                 mouseout: function (event) {
//                     layer = event.target;
//                     layer.setStyle({
//                         fillOpacity: 0.5
//                     })
//                 },
//                 click: function (event) {
//                     myMap.fitBounds(event.target.getBounds());
//                 }
//             });
//             layer.bindPopup(
//                 "<h1>" + feature.Malden.RegionName + "</h1><h2> " + feature.Malden.RegionName + "</ > "
//             );
//         }
//     }).addTo(myMap);
// });


 // L.marker([regionLngVar2, regionLatVar2]).addTo(map);



















  
// d3.json("./data/trueData.json").then(function (data) {

//   let regionNameVar2;
//   let regionLatVar2;
//   let regionLngVar2;
//   let countyLatVar2;
//   let countyLngVar2;
//   let countyNameVar;
//   let lngDifference;
//   let latDifference;
//   let countyAbs;

//   let regionCordinates2 = [];
//   let regionLatArray = [];
//   let regionLngArray = [];

//     for (let x in data) {

//     // attempt to grab the values using square bracket notation
//      regionNameVar2 = data[x]["RegionName"];
//      regionLatVar2 = data[x]["RegionLat"];
//      regionLngVar2 = data[x]["RegionLng"];
//      countyLatVar2 = data[x]["CountyLat"];
//      countyLngVar2 = data[x]["CountyLng"];
//      countyNameVar = data[x]["CountyName"]


//      //should grab the keys and the values from the truedataJSON
//   //    for(var key in trueData.jsonData) {
//   //     for (var key1 in trueData.jsonData[key]) {
//   //         console.log(trueData.jsonData[key][key1])

//   //         if (data[x][y] == "2022")
//   //         console.log (`${x} + ":" + ${y}`)
//   //     }
//   //  }
  

//   //IT WORKS FINALLY, DO NOT REMOVE. Will output keys and their values to the console.
//   let variantOptions = [];
// for (let i = 1; i < 4; i++) {
//   var key = '2022' + i;
//   if (data.hasOwnProperty(key)) {
//     variantOptions.push(data[key]);
//   }
//   let variantOptions = data.options;
// }


//      Jan2022 = data[x]["2022-01-31"]
//      Feb2022 = data[x]["2022-02-28"]
//      Mar2022 = data[x]["2022-03-31"]
//      Apr2022 = data[x]["2022-04-30"]
//      May2022 = data[x]["2022-05-31"]
//      June2022 = data[x]["2022-06-30"]
//      July2022 = data[x]["2022-07-31"]
//      Aug2022 = data[x]["2022-08-31"]
//      Sep2022 = data[x]["2022-09-30"]
//      Oct2022 = data[x]["2022-10-31"]
//      Nov2022 = data[x]["2022-11-30"]
//      Dec2022 = data[x]["2022-12-31"]
//      Jan2023 = data[x]["2023-01-31"]
//      Feb2023 = data[x]["2023-02-28"]
//      Mar2023 = data[x]["2023-03-31"]
//      Apr2023 = data[x]["2023-04-30"]
//      May2023 = data[x]["2023-05-31"]
//      June2023 = data[x]["2023-06-30"]
//      July2023 = data[x]["2023-07-31"]
//      Aug2023 = data[x]["2023-08-31"]
//      Sep2023 = data[x]["2023-09-30"]


//       // outputs both region latitude and region longitude to make region cordinates
//       regionCordinates2 = [regionLatVar2, regionLngVar2];
     
// //       for (let y in data[x])
//  //      {
//    //IT WORKS FINALLY, DO NOT REMOVE. Will output keys and their values to the console.
//         for(var key in data[x]) {
//    //       for (var key1 in data[x][key]) {
//               console.log(data[x][key])
//         }
//        console.log(data[x])
//   //     }


//      for(let n in data){
//       lngDifference = regionLngArray - countyAbs

//       function chooseColor(lngDifference){
//         if (lngDifference < 1) return "Yellow";
//         else if (lngDifference < 0.5) return "red";
//         else if (lngDifference < 0.05) return "orange";
//         else if (lngDifference < 0.005) return "green";
//         else if (lngDifference < 0.0025) return "purple";
//         else return "black";
//       }

//     }

// //   //finds the absolute value of region longitude cordinates for further manipulation,
// //   //stores it inside of a array
//   regionLngArray = Math.abs(regionLngVar2)
//   regionLatArray = Math.abs(regionLatVar2)

// //   //tests output of above to check output
// //   console.log(`region absolute value longitude is ${regionLngArray}`)

// //   //gets the absolute value of county latitude values
//   countyAbs = Math.abs(countyLngVar2)

 

// //   console.log(`The range of longitude between ${countyNameVar} and ${x} is ${lngDifference}`)
  
//  // }
//   }
//  } // for (let x in data) end bracket
// //}
// )
//   )

































    // //activates test call function
    // testCall();


    // //activates setLonandLat function
    //  setLonAndLat();

    // getLonAndLat();

    // //test calls the getLonAndLat function to see if its working
    // function testCall(getLonAndLat)
    // {
    //    getLonAndLat(metroArray);
    //    console.log(metroArray);
    // }
 
    // //sets the latitude and longitude to a array
    // function setLonAndLat(queryKey)
    // {   
    //   for (let x in data)
    //    {
    //       regionLatVar2 = data[x]["RegionLat"];
    //       regionLngVar2 = data[x]["RegionLng"];
    //       queryKey = [regionLatVar2, regionLngVar2];
    //       //metroArray = queryKey;
    //     }
    //     console.log(`function setAndLat is active!}`);
    //    return queryKey;
    // }


    // //gets the longitude and latitude from the array
    // function getLonAndLat(setLonAndLat)
    // {
    // setLonAndLat();
    // metroArray = queryKey;
    // console.log("Function getLonAndLat is active!");
    // return metroArray;
    // }
 







//   // tests variable output
//      console.log(`++++++++`);
//      console.log(`${x}'s region name is ` + regionNameVar2);
//      console.log(`${x}'s cordnaties are ` + regionCordinates2);
//      console.log(`The county (${countyNameVar}) latitude is ${countyLatVar2}`);
//      console.log(`The county (${countyNameVar}) longitude is ${countyLngVar2}`);


  


// //test grabs the regionName and CountyName key value pairs
//   for (let v in data){
//     let regionNameVar2 = data[v]["RegionName"];
//     let countyNameVar = data[v]["CountyName"];
//   }








//contains the panel data for each pin on the map

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