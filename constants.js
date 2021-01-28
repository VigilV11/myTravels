const mapAPI =
  'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYWRhbXppb24iLCJhIjoiY2trZ3UxdGxvMGhtbjJubGFqeDByOHBpdCJ9.zJVz8Tg4bjnbsUejLJ68RQ';

const mapAttribution = {
  attribution:
    'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'your.mapbox.access.token'
};

export { mapAPI, mapAttribution };
