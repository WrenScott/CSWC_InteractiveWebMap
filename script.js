// Allow usage of 'const' for instantiating varibles that can't be overwritten 
'use strict';

// Create the map 
const map = L.map('map', {
    center: [45.567899, -122.599403],
    zoom: 12
});

// Create basemap variables and add ESRI gray as default
const gray = L.esri.basemapLayer('Gray').addTo(map); 
const darkGray = L.esri.basemapLayer('DarkGray');
const streets = L.esri.basemapLayer('Streets'); 
const natGeo = L.esri.basemapLayer('NationalGeographic');

// Basemaps object for layer control 
const baseMaps = {
    "Gray" : gray,
    "Dark Gray" : darkGray,
    "Streets" : streets, 
    "National Geographic" : natGeo
};

// Feature layer URL variables
const cswURL = 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/12/';
const orcaURL = 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_webMapData/FeatureServer/12/';
const waterFeaturesURL = 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/10/';
const streamCrtlnURL = 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/9/';
const citiesURL = 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_webMapData/FeatureServer/8/';
const majArtURL = 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/7/';
const bikeRouteURL = 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_webMapData/FeatureServer/5/';
const trailsURL = 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/5/';
const cswtURL = 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/4/';
const trailheadsURL = 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/3/';
const launchURL = 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/2/';
const portageURL = 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/1/';
const busstopsURL = 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/0/';

// Creaate pane for Columbia_Slough_Watershed
map.createPane('CSW');

// Feature layerr for Columbia Slough Watershed (CSW)
const Columbia_Slough_Watershed = L.esri.featureLayer({
    url: cswURL,
    pane: 'CSW'
}).addTo(map);

// Create pane for ORCA_CSW
map.createPane('ORCA');

// Feature layer for Outdoor Recreation and Conservation Areas (ORCA) that are within the CSW 
const ORCA_CSW = L.esri.featureLayer({
    url: orcaURL,
    pane: 'ORCA',
    ignoreRenderer: true,
    style: function (feature) {
        if (feature.properties.UNITTYPE === 'Cemetery') {
            return {
                color: '#64584a',
                weight: 1
            };
        } else if (feature.properties.UNITTYPE === 'Golf Course') {
            return {
                color: '#8638a9',
                weight: 1
            };
        } else if (feature.properties.UNITTYPE === 'Natural Area') {
            return {
                color: '#98824e',
                weight: 1
            };
        } else if (feature.properties.UNITTYPE === 'Park') {
            return {
                color: '#81cc49',
                weight: 1
            };
        } else {
            return {
                color: None
            };
        }
    }
}).addTo(map);

// Popup for ORCA 
const ORCA_popUp = ORCA_CSW.bindPopup(function (evt) {
    return L.Util.template('<b>{SITENAME}</b><hr><p>This site is a {UNITTYPE} owned by {OWNLEV3}.</p>', evt.feature.properties);
});

// Create pane for Water_Features
//map.createPane('WF'); 

// Feature layer for water features
const Water_Features = L.esri.featureLayer({
    url: waterFeaturesURL
}).addTo(map);

// Create pane for Stream_Centerlines_CSW 
//map.createPane('SC');

// Feature Layer for stream centerlines within the CSW
const Stream_Centerlines_CSW = L.esri.featureLayer({
    url: streamCrtlnURL
}).addTo(map);

// Create pane for Cities_CSW
//map.createPane('cities'); 

// Feature layer for city boundaries that intersect the CSW
const Cities_CSW = L.esri.featureLayer({
    url: citiesURL
}).addTo(map);

// Feature layer for major arterials
const Major_Arterials = L.esri.featureLayer({
    url: majArtURL
}).addTo(map);

// Feature layer for bike routes within the Portland Metro Area
const bikeRoutes_PDXMetro = L.esri.featureLayer({
    url: bikeRouteURL
}).addTo(map);

// Create pane for Trails_CSW
map.createPane('trails');

// Feature layer for trais within the CSW
const Trails_CSW = L.esri.featureLayer({
    url: trailsURL,
    pane: 'trails'
}).addTo(map);

// Feature layer for Columbia Slough Water Trail
const CS_waterTrail = L.esri.featureLayer({
    url: cswtURL,
    pane: 'trails'
}).addTo(map);

// Feature layer for trailheads within CSW
const Trailheads_CSW = L.esri.Cluster.featureLayer({
    url: trailheadsURL
}).addTo(map);

const trailheadsPopUp = Trailheads_CSW.bindPopup(function (evt) {
    return L.Util.template('<b>Trail Name</b>: {TRAILNAME}<hr><b>Trail Surface</b>: {TRLSURFACE}<hr><b>Hike?</b> {HIKE}<hr><b>Road Bike?</b> {ROADBIKE}<hr><b>Mountain Bike?</b> {MTNBIKE}<hr><b>Miles</b>: {MILEAGE}', evt.feature.properties);
});

// Feature layer for paddling launch sites
const paddlingLaunches = L.esri.featureLayer({
    url: launchURL
}).addTo(map);

const launchPopUp = paddlingLaunches.bindPopup(function (evt) {
    return L.Util.template('<b>Site Name</b>: {siteName}<hr><b>Address</b>: {address}<hr><b>Type</b>: {type}<hr><b>Owner</b>: {owner}<hr><b>Parking?</b> {parking}<hr><b>Restrooms?</b> {restrooms}<hr><b>Drinking water? {drinkingWater}<hr><b>ADA Acessible?</b> {ADAacessible}<hr><i>{description}</i>', evt.feature.properties);
});

// Feature layer for portage sites
const portageSites = L.esri.featureLayer({
    url: portageURL
}).addTo(map);

// Portage site popup 
const portagePopUp = portageSites.bindPopup(function (evt) {
    return L.Util.template('<b>Site Name</b>: {siteName}<hr><b>Slough Section</b>: {sloughSection}<hr><b>Type</b>: {type}', evt.feature.properties);
});

// Feature layer for TriMet bus stops within the CSW
//const busStops_CSW = L.esri.featureLayer({
//    url: busstopsURL
//}).addTo(map);

// Create toggleable feature layer object 
const toggleFL = {
    "Bike Routes" : bikeRoutes_PDXMetro,
    "Trails" : Trails_CSW,
    "Columbia Slough Water Trail" : CS_waterTrail,
    "Trailheads" : Trailheads_CSW,
    "Paddling Launch Sites": paddlingLaunches,
    "Portage Sites": portageSites,
};

L.control.layers(baseMaps, toggleFL).addTo(map);

