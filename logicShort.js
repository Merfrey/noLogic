let myMap = L.map("map", {   center: [40.7, -73.95],   zoom: 11 });
    
//Adding the tile layer 
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' }).addTo(myMap);


let link = 'https://geojson.io/#map=4.08/39.3/-97.79'

  // Getting our GeoJSON data 
d3.json(link).then(function (data) {
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
    }).addTo(myMap); });

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
          // outputs both region latitude and region longitude to make region cordinates
          regionCordinates2 = [regionLatVar2, regionLngVar2];
         
    
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
    
    //finds the absolute value of region longitude cordinates for further manipulation,
    //stores it inside of a array
     regionLngArray = Math.abs(regionLngVar2);
     regionLatArray = Math.abs(regionLatVar2);
    
     //gets the absolute value of county latitude values
     countyAbs = Math.abs(countyLngVar2)

         }// for (let x in data) end bracket
     }
    )
