#csc 4000 -2024
 Rebecca Jitanda,asset tracking using RFID and Geofencing technologies

How to Use the Interfaces

1. Asset Management Table
The Asset Table allows you to view, edit, and manage asset information such as:

RFID Tag: A unique identifier for each asset.
Asset Name: The name or description of the asset.
Location: The asset's geographical coordinates (latitude and longitude).
To edit an asset, simply click on the respective row, modify the information, and save the changes.

2. Geolocation Map
The Map Interface uses OpenStreetMap and Leaflet.js to display asset locations in real-time.
Each asset is represented by a marker on the map.
Clicking on an asset's name in the table will highlight the corresponding location on the map.
3. RFID Integration
The system works with an Arduino-based RFID reader to track assets.
When an RFID tag is scanned by the Arduino, the corresponding asset details are sent to the server and updated in the Asset Table and Map.
Steps to Use the System
Clone the Repository: Download the project files to your local machine.
Run the Web Interface: Open index.html in your browser (use a local server or live-server extension if needed).
Track Assets: Use the Asset Table to view and edit asset details. RFID data will be automatically updated when scanned.



RFID Asset Tracking System
This project, developed by Rebecca Jitanda, automates asset tracking using RFID and Geofencing technologies. It provides an interactive web interface to manage and track assets in real-time using OpenStreetMap for geolocation and a table for asset details.

