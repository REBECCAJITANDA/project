let map, marker;

// Initialize the map
function initMap() {
  map = L.map('map').setView([-15.387, 28.322], 14); // Initial position and zoom level
  
  // Use OpenStreetMap tiles
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
}

// View asset location on the map
function viewOnMap(lat, lng) {
  map.setView([lat, lng], 14); // Move the map to the asset location
  
  // Remove any existing markers
  if (marker) {
    marker.remove();
  }
  
  // Add new marker for the asset
  marker = L.marker([lat, lng]).addTo(map)
    .bindPopup("<b>Asset Location</b><br>Lat: " + lat + "<br>Lng: " + lng)
    .openPopup();
}

// Initialize the app
document.addEventListener("DOMContentLoaded", () => {
  initMap();
});
