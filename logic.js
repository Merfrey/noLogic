
let myMap = L.map("map", {
  center: [40.7, -73.95],
  zoom: 11
});

//Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);


// fifteen point one city population layers use for mapping finagliling
let link = 'https://geojson.io/#map=4.08/39.3/-97.79'

  // Getting our GeoJSON data
  d3.json("./data/trueData2.json").then(function (data) {
    // Creating a GeoJSON layer with the retrieved data
    L.geoJson(data, {
        style: function (feature) {
            return {
                color: "white",
                fillColor: chooseColor(feature.Malden.RegionName),
                fillOpacity: 0.5,
                weight: 1.5
            }
        },
        onEachFeature: function (feature, layer) {
            layer.on({
                mouseover: function (event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.9
                    })
                },
                mouseout: function (event) {
                    layer = event.target;
                    layer.setStyle({
                        fillOpacity: 0.5
                    })
                },
                click: function (event) {
                    myMap.fitBounds(event.target.getBounds());
                }
            });
            layer.bindPopup(
                "<h1>" + feature.Malden.RegionName + "</h1><h2> " + feature.Malden.RegionName + "</ > "
            );
        }
    }).addTo(myMap);
});


 // L.marker([regionLngVar2, regionLatVar2]).addTo(map);

 
d3.json("./data/trueData.json").then(function (data) {

  let regionNameVar2;
  let regionLatVar2;
  let regionLngVar2;
  let countyLatVar2;
  let countyLngVar2;
  let countyNameVar;
  let lngDifference;
  let latDifference;
  let countyAbs;

  let regionCordinates2 = [];
  let regionLatArray = [];
  let regionLngArray = [];

    for (let x in data) {

    // attempt to grab the values using square bracket notation
     regionNameVar2 = data[x]["RegionName"];
     regionLatVar2 = data[x]["RegionLat"];
     regionLngVar2 = data[x]["RegionLng"];
     countyLatVar2 = data[x]["CountyLat"];
     countyLngVar2 = data[x]["CountyLng"];
     countyNameVar = data[x]["CountyName"]

     for(var key in json.jsonData) {
      for (var key1 in json.jsonData[key]) {
          console.log(json.jsonData[key][key1])
      }
   }
  }

    //  Jan2013 = data[x]["2013-01-31"]
    //  Feb2013 = data[x]["2013-02-28"]
    //  Mar2013 = data[x]["2013-03-31"]
    //  Apr2013 = data[x]["2013-04-30"]
    //  May2013 = data[x]["2013-05-31"]
    //  June2013 = data[x]["2013-06-30"]
    //  July2013 = data[x]["2013-07-31"]
    //  Aug2013 = data[x]["2013-08-31"]
    //  Sep2013 = data[x][]
    //  Oct2013 = data[x]
    //  Nov2013 = data[x]
    //  Dec2013 = data[x]
    //  Jan2014 = data[x]
    //  Feb2014 = data[x]
    //  Mar2014 = data[x]
    //  Apr2014 = data[x]
    //  May2014 = data[x]
    //  June2014 = data[x]
    //  July2014 = data[x]
    //  Aug2014 = data[x]
    //  Sep2014 = data[x]
    //  Oct2014 = data[x]
    //  Nov2014 = data[x]
    //  Dec2014 = data[x]
    //  Jan2015 = data[x]
    //  Feb2015 = data[x]
    //  Mar2015 = data[x]
    //  Apr2015 = data[x]
    //  May2015 = data[x]
    //  June2015 = data[x]
    //  July2015 = data[x]
    //  Aug2015 = data[x]
    //  Sep2015 = data[x]
    //  Oct2015 = data[x]
    //  Nov2015 = data[x]
    //  Dec2015 = data[x]
    //  Jan2016 = data[x]
    //  Feb2016 = data[x]
    //  Mar2016 = data[x]
    //  Apr2016 = data[x]
    //  May2016 = data[x]
    //  June2016 = data[x]
    //  July2016 = data[x]
    //  Aug2016 = data[x]
    //  Sep2016 = data[x]
    //  Oct2016 = data[x]
    //  Nov2016 = data[x]
    //  Dec2016 = data[x]
    //  Jan2017 = data[x]
    //  Feb2017 = data[x]
    //  Mar2017 = data[x]
    //  Apr2017 = data[x]
    //  May2017 = data[x]
    //  June2017 = data[x]
    //  July2017 = data[x]
    //  Aug2017 = data[x]
    //  Sep2017 = data[x]
    //  Oct2017 = data[x]
    //  Nov2017 = data[x]
    //  Dec2017 = data[x]
    //  Jan2018 = data[x]
    //  Feb2018 = data[x]
    //  Mar2018 = data[x]
    //  Apr2018 = data[x]
    //  May2018 = data[x]
    //  June2018 = data[x]
    //  July2018 = data[x]
    //  Aug2018 = data[x]
    //  Sep2018 = data[x]
    //  Oct2018 = data[x]
    //  Nov2018 = data[x]
    //  Dec2018 = data[x]
    //  Jan2019 = data[x]
    //  Feb2019 = data[x]
    //  Mar2019 = data[x]
    //  Apr2019 = data[x]
    //  May2019 = data[x]
    //  June2019 = data[x]
    //  July2019 = data[x]
    //  Aug2019 = data[x]
    //  Sep2019 = data[x]
    //  Oct2019 = data[x]
    //  Nov2019 = data[x]
    //  Dec2019 = data[x]
    //  Jan2020 = data[x]
    //  Feb2020 = data[x]
    //  Mar2020 = data[x]
    //  Apr2020 = data[x]
    //  May2020 = data[x]
    //  June2020 = data[x]
    //  July2020 = data[x]
    //  Aug2020 = data[x]
    //  Sep2020 = data[x]
    //  Oct2020 = data[x]
    //  Nov2020 = data[x]
    //  Dec2020 = data[x]
    //  Jan2021 = data[x]
    //  Feb2021 = data[x]
    //  Mar2021 = data[x]
    //  Apr2021 = data[x]
    //  May2021 = data[x]
    //  June2021 = data[x]
    //  July2021 = data[x]
    //  Aug2021 = data[x]
    //  Sep2021 = data[x]
    //  Oct2021 = data[x]
    //  Nov2021 = data[x]
    //  Dec2021 = data[x]
    //  Jan2021 = data[x]
    //  Feb2021 = data[x]
    //  Mar2021 = data[x]
    //  Apr2021 = data[x]
    //  May2021 = data[x]
    //  June2021 = data[x]
    //  July2021 = data[x]
    //  Aug2021 = data[x]
    //  Sep2021 = data[x]
    //  Oct2021 = data[x]
    //  Nov2021 = data[x]
    //  Dec2021 = data[x]
    //  Jan2022 = data[x]
    //  Feb2022 = data[x]
    //  Mar2022 = data[x]
    //  Apr2022 = data[x]
    //  May2022 = data[x]
    //  June2022 = data[x]
    //  July2022 = data[x]
    //  Aug2022 = data[x]
    //  Sep2022 = data[x]
    //  Oct2022 = data[x]
    //  Nov2022 = data[x]
    //  Dec2022 = data[x]
    //  Jan2023 = data[x]
    //  Feb2023 = data[x]
    //  Mar2023 = data[x]
    //  Apr2023 = data[x]
    //  May2023 = data[x]
    //  June2023 = data[x]
    //  July2023 = data[x]
    //  Aug2023 = data[x]
    //  Sep2023 = data[x]


     
     
    //  "2013-09-30"
    //  "2013-10-31"
    //  "2013-11-30"
    //  "2013-12-31"
    //  "2014-01-31"
    //  "2014-02-28"
    //  "2014-03-31"
    //  "2014-04-30"
    //  "2014-05-31"
    //  "2014-06-30"
    //  "2014-07-31"
    //  "2014-08-31"
    //  "2014-09-30"
    //  "2014-10-31"
    //  "2014-11-30"
    //  "2014-12-31"
    //  "2015-01-31"
    //  "2015-02-28"
    //  "2015-03-31"
    //  "2015-04-30"
    //  "2015-05-31"
    //  "2015-06-30"
    //  "2015-07-31"
    //  "2015-08-31"
    //  "2015-09-30"
    //  "2015-10-31"
    //  "2015-11-30"
    //  "2015-12-31"
    //  "2016-01-31"
    //  "2016-02-29"
    //  "2016-03-31"
    //  "2016-04-30"
    //  "2016-05-31"
    //  "2016-06-30"
    //  "2016-07-31"
    //  "2016-08-31"
    //  "2016-09-30"
    //  "2016-10-31"
    //  "2016-11-30"
    //  "2016-12-31"
    //  "2017-01-31"
    //  "2017-02-28"
    //  "2017-03-31"
    //  "2017-04-30"
    //  "2017-05-31"
    //  "2017-06-30"
    //  "2017-07-31"
    //  "2017-08-31"
    //  "2017-09-30"
    //  "2017-10-31"
    //  "2017-11-30"
    //  "2017-12-31"
    //  "2018-01-31"
    //  "2018-02-28"
    //  "2018-03-31"
    //  "2018-04-30"
    //  "2018-05-31"
    //  "2018-06-30"
    //  "2018-07-31"
    //  "2018-08-31"
    //  "2018-09-30"
    //  "2018-10-31"
    //  "2018-11-30"
    //  "2018-12-31"
    //  "2019-01-31"
    //  "2019-02-28"
    //  "2019-03-31"
    //  "2019-04-30"
    //  "2019-05-31"
    //  "2019-06-30"
    //  "2019-07-31"
    //  "2019-08-31"
    //  "2019-09-30"
    //  "2019-10-31"
    //  "2019-11-30"
    //  "2019-12-31"
    //  "2020-01-31"
    //  "2020-02-29"
    //  "2020-03-31"
    //  "2020-04-30"
    //  "2020-05-31"
    //  "2020-06-30"
    //  "2020-07-31"
    //  "2020-08-31"
    //  "2020-09-30"
    //  "2020-10-31"
    //  "2020-11-30"
    //  "2020-12-31"
    //  "2021-01-31"
    //  "2021-02-28"
    //  "2021-03-31"
    //  "2021-04-30"
    //  "2021-05-31"
    //  "2021-06-30"
    //  "2021-07-31"
    //  "2021-08-31"
    //  "2021-09-30"
    //  "2021-10-31"
    //  "2021-11-30"
    //  "2021-12-31"
    //  "2022-01-31"
    //  "2022-02-28"
    //  "2022-03-31"
    //  "2022-04-30"
    //  "2022-05-31"
    //  "2022-06-30"
    //  "2022-07-31"
    //  "2022-08-31"
    //  "2022-09-30"
    //  "2022-10-31"
    //  "2022-11-30"
    //  "2022-12-31"
    //  "2023-01-31"
    //  "2023-02-28"
    //  "2023-03-31"
    //  "2023-04-30"
    //  "2023-05-31"
    //  "2023-06-30"
    //  "2023-07-31"
    //  "2023-08-31"
    //  "2023-09-30"

    //   Jan
    //   Feb
    //   Mar
    //   Apr
    //   May 
    //   June 
    //   July 
    //   Aug 
    //   Sep 
    //   Oct 
    //   Nov 
    //   Dec 























      // outputs both region latitude and region longitude to make region cordinates
      regionCordinates2 = [regionLatVar2, regionLngVar2];
     
       for (let y in data[x])
       {
        for(var key in json.jsonData) {
          for (var key1 in json.jsonData[key]) {
              console.log(json.jsonData[key][key1])
       console.log(y)
       }

//   // tests variable output
//      console.log(`++++++++`);
//      console.log(`${x}'s region name is ` + regionNameVar2);
//      console.log(`${x}'s cordnaties are ` + regionCordinates2);
//      console.log(`The county (${countyNameVar}) latitude is ${countyLatVar2}`);
//      console.log(`The county (${countyNameVar}) longitude is ${countyLngVar2}`);

     for(let n in data){
      lngDifference = regionLngArray - countyAbs

      function chooseColor(lngDifference){
        if (lngDifference < 1) return "Yellow";
        else if (lngDifference < 0.5) return "red";
        else if (lngDifference < 0.05) return "orange";
        else if (lngDifference < 0.005) return "green";
        else if (lngDifference < 0.0025) return "purple";
        else return "black";
      }

    }

//   //finds the absolute value of region longitude cordinates for further manipulation,
//   //stores it inside of a array
  regionLngArray = Math.abs(regionLngVar2)
  regionLatArray = Math.abs(regionLatVar2)

//   //tests output of above to check output
//   console.log(`region absolute value longitude is ${regionLngArray}`)

//   //gets the absolute value of county latitude values
  countyAbs = Math.abs(countyLngVar2)

 

//   console.log(`The range of longitude between ${countyNameVar} and ${x} is ${lngDifference}`)
  
  }// for (let x in data) end bracket

 }
}
)
















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