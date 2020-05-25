'use strict';

const map = L.map('map', {
    center: [45.567899, -122.599403],
    zoom: 12
});

L.esri.basemapLayer('Gray').addTo(map);

// Feature layer for water features
const Water_Features = L.esri.featureLayer({
    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/10'
}).addTo(map);

// Feature Layer for stream centerlines within the CSW
const Stream_Centerlines_CSW = L.esri.featureLayer({
    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/9?token=h3xbDUXfaUhnT1kgnHEZTp5cHYGnhcJwHvkkDZsJZl-ZsSgevntaUPlFVMyX0peEwmADwskOhH_RdNmj9gs9CBB8C6_11oXvfh4G1z8bUIY0UGCofkpabv53mhKQzWejdYfRskAqK0RTEcGN3Ones0kBvD0JWBfnsa8ACvDIUw0iuEn48H1_PNOroFcUsGKA6eZHSGRgIyXZDdAdYCgWklPrNCl2i4aWqnKHsUINltO6MberTG4m-HjcXllcmM1ykg-qMEXaaMRyoesQWHwyKg..'
}).addTo(map);

// LAYER NOT RENDERING IN MAP
// Feature layer for city boundaries that intersect the CSW
const Cities_CSW = L.esri.featureLayer({
    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/9?token=h3xbDUXfaUhnT1kgnHEZTp5cHYGnhcJwHvkkDZsJZl-ZsSgevntaUPlFVMyX0peEwmADwskOhH_RdNmj9gs9CBB8C6_11oXvfh4G1z8bUIY0UGCofkpabv53mhKQzWejdYfRskAqK0RTEcGN3Ones0kBvD0JWBfnsa8ACvDIUw0iuEn48H1_PNOroFcUsGKA6eZHSGRgIyXZDdAdYCgWklPrNCl2i4aWqnKHsUINltO6MberTG4m-HjcXllcmM1ykg-qMEXaaMRyoesQWHwyKg..'
}).addTo(map);

// LAYER NOT RENDERING IN MAP
// Feature layer for major arterials
const Major_Arterials = L.esri.featureLayer({
    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/7?token=h3xbDUXfaUhnT1kgnHEZTp5cHYGnhcJwHvkkDZsJZl-ZsSgevntaUPlFVMyX0peEwmADwskOhH_RdNmj9gs9CBB8C6_11oXvfh4G1z8bUIY0UGCofkpabv53mhKQzWejdYfRskAqK0RTEcGN3Ones0kBvD0JWBfnsa8ACvDIUw0iuEn48H1_PNOroFcUsGKA6eZHSGRgIyXZDdAdYCgWklPrNCl2i4aWqnKHsUINltO6MberTG4m-HjcXllcmM1ykg-qMEXaaMRyoesQWHwyKg..'
}).addTo(map);

// Feature layer for bike routes within the Portland Metro Area
const bikeRoutes_PDXMetro = L.esri.featureLayer({
    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/6?token=h3xbDUXfaUhnT1kgnHEZTp5cHYGnhcJwHvkkDZsJZl-ZsSgevntaUPlFVMyX0peEwmADwskOhH_RdNmj9gs9CBB8C6_11oXvfh4G1z8bUIY0UGCofkpabv53mhKQzWejdYfRskAqK0RTEcGN3Ones0kBvD0JWBfnsa8ACvDIUw0iuEn48H1_PNOroFcUsGKA6eZHSGRgIyXZDdAdYCgWklPrNCl2i4aWqnKHsUINltO6MberTG4m-HjcXllcmM1ykg-qMEXaaMRyoesQWHwyKg..'
}).addTo(map);

// Feature layer for trais within the CSW
const Trails_CSW = L.esri.featureLayer({
    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/5?token=h3xbDUXfaUhnT1kgnHEZTp5cHYGnhcJwHvkkDZsJZl-ZsSgevntaUPlFVMyX0peEwmADwskOhH_RdNmj9gs9CBB8C6_11oXvfh4G1z8bUIY0UGCofkpabv53mhKQzWejdYfRskAqK0RTEcGN3Ones0kBvD0JWBfnsa8ACvDIUw0iuEn48H1_PNOroFcUsGKA6eZHSGRgIyXZDdAdYCgWklPrNCl2i4aWqnKHsUINltO6MberTG4m-HjcXllcmM1ykg-qMEXaaMRyoesQWHwyKg..'
}).addTo(map);

// Feature layer for Columbia Slough Water Trail
const CS_waterTrail = L.esri.featureLayer({
    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/4?token=h3xbDUXfaUhnT1kgnHEZTp5cHYGnhcJwHvkkDZsJZl-ZsSgevntaUPlFVMyX0peEwmADwskOhH_RdNmj9gs9CBB8C6_11oXvfh4G1z8bUIY0UGCofkpabv53mhKQzWejdYfRskAqK0RTEcGN3Ones0kBvD0JWBfnsa8ACvDIUw0iuEn48H1_PNOroFcUsGKA6eZHSGRgIyXZDdAdYCgWklPrNCl2i4aWqnKHsUINltO6MberTG4m-HjcXllcmM1ykg-qMEXaaMRyoesQWHwyKg..'
}).addTo(map);

// Feature layer for trailheads within CSW
const Trailheads_CSW = L.esri.featureLayer({
    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/3?token=h3xbDUXfaUhnT1kgnHEZTp5cHYGnhcJwHvkkDZsJZl-ZsSgevntaUPlFVMyX0peEwmADwskOhH_RdNmj9gs9CBB8C6_11oXvfh4G1z8bUIY0UGCofkpabv53mhKQzWejdYfRskAqK0RTEcGN3Ones0kBvD0JWBfnsa8ACvDIUw0iuEn48H1_PNOroFcUsGKA6eZHSGRgIyXZDdAdYCgWklPrNCl2i4aWqnKHsUINltO6MberTG4m-HjcXllcmM1ykg-qMEXaaMRyoesQWHwyKg..'
}).addTo(map);

// Feature layer for paddling launch sites
const paddlingLaunches = L.esri.featureLayer({
    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/2?token=h3xbDUXfaUhnT1kgnHEZTp5cHYGnhcJwHvkkDZsJZl-ZsSgevntaUPlFVMyX0peEwmADwskOhH_RdNmj9gs9CBB8C6_11oXvfh4G1z8bUIY0UGCofkpabv53mhKQzWejdYfRskAqK0RTEcGN3Ones0kBvD0JWBfnsa8ACvDIUw0iuEn48H1_PNOroFcUsGKA6eZHSGRgIyXZDdAdYCgWklPrNCl2i4aWqnKHsUINltO6MberTG4m-HjcXllcmM1ykg-qMEXaaMRyoesQWHwyKg..'
}).addTo(map);

// Feature layer for portage sites
const portageSites = L.esri.featureLayer({
    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/1?token=h3xbDUXfaUhnT1kgnHEZTp5cHYGnhcJwHvkkDZsJZl-ZsSgevntaUPlFVMyX0peEwmADwskOhH_RdNmj9gs9CBB8C6_11oXvfh4G1z8bUIY0UGCofkpabv53mhKQzWejdYfRskAqK0RTEcGN3Ones0kBvD0JWBfnsa8ACvDIUw0iuEn48H1_PNOroFcUsGKA6eZHSGRgIyXZDdAdYCgWklPrNCl2i4aWqnKHsUINltO6MberTG4m-HjcXllcmM1ykg-qMEXaaMRyoesQWHwyKg..'
}).addTo(map);

// Portage site popup 
const portagePopUp = portageSites.bindPopup(function (evt) {
    return L.Util.template('<b>Site Name</b>: {siteName}<hr><b>Slough Section</b>: {sloughSection}<hr><b>Type</b>: {type}', evt.feature.properties);
});

// Feature layer for TriMet bus stops within the CSW
//const busStops_CSW = L.esri.featureLayer({
//    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/0?token=h3xbDUXfaUhnT1kgnHEZTp5cHYGnhcJwHvkkDZsJZl-ZsSgevntaUPlFVMyX0peEwmADwskOhH_RdNmj9gs9CBB8C6_11oXvfh4G1z8bUIY0UGCofkpabv53mhKQzWejdYfRskAqK0RTEcGN3Ones0kBvD0JWBfnsa8ACvDIUw0iuEn48H1_PNOroFcUsGKA6eZHSGRgIyXZDdAdYCgWklPrNCl2i4aWqnKHsUINltO6MberTG4m-HjcXllcmM1ykg-qMEXaaMRyoesQWHwyKg..'
//}).addTo(map);

// NEED TO STYLE THIS LAYER
// Feature layer for Outdoor Recreation and Conservation Areas (ORCA) that are within the CSW 
const ORCA_CSW = L.esri.featureLayer({
    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data/FeatureServer/11?token=KGyXKeGUdWA7F3ZABTs-y87z3ywBs4ioDqzzgAYbmqMGLZp6Nj_hvWVPXUIpUrIntV8KAeGYlmvaEaaSX58EyD7dEcpwNgCNuUFNNtnOVW7ncmuYRa9M5-dQPiASz-AVXJATUiDi-EbkNSmiCkUJx1OfV1_RryXOn-uNhobskrR9xNvFSDuIguQ5RMFSB34LLnL21za8XWkLpNAVLJB3lzs9hoA4Pc-FG88LpjZACk4Zc7yrI5X_cT7YwplTdiVMn-FCAbZj4cNl6xPaaSSa1Q..',
    ignoreRenderer: true
}).addTo(map);

// Popup for ORCA 
const ORCA_popUp = ORCA_CSW.bindPopup(function (evt) {
    return L.Util.template('<b>{SITENAME}</b><hr><p>This site is a {UNITTYPE} owned by {OWNLEV3}.</p>', evt.feature.properties);
});

// Feature layerr for Columbia Slough Watershed (CSW)
//const Columbia_Slough_Watershed = L.esri.featureLayer({
//    url: 'https://services8.arcgis.com/tblHe99qQFMcNzpC/arcgis/rest/services/CSWC_Interactive_Map_Data_WFL1/FeatureServer/12/'
//}).addTo(map);

