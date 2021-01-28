import L from 'leaflet';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import { mapAPI, mapAttribution } from './constants.js';

//++++++++++++++++ PROMISIFYING GEOLOCATION API CALL ++++++++++++++++\\
const getPosition = function() {
  return new Promise((resolve, reject) =>
    navigator.geolocation.getCurrentPosition(resolve, reject)
  );
};

//++++++++++++++++ DISPLAY MAP TO CURRENT POSITION ++++++++++++++++\\
const loadMap = async function() {
  const res = await getPosition();
  const lat = res.coords.latitude;
  const lng = res.coords.longitude;

  console.log(lat, lng);
  let mymap = L.map('mapid').setView([lat, lng], 13);

  L.tileLayer(mapAPI, mapAttribution).addTo(mymap);
};

loadMap();
