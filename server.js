const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public")); // Serve frontend files from "public"

// Simulated database
let assets = [
  { id: "1", name: "Laptop A", location: { lat: -15.386, lng: 28.322 }, status: "Active" },
  { id: "2", name: "Projector X", location: { lat: -15.387, lng: 28.324 }, status: "In Use" },
  { id: "3", name: "Router Z", location: { lat: -15.390, lng: 28.329 }, status: "Inactive" }
];

// Fetch all assets
app.get("/api/assets", (req, res) => {
  res.json(assets);
});

// Update asset information
app.put("/api/assets/:id", (req, res) => {
  const assetId = req.params.id;
  const { name, location, status } = req.body;

  const asset = assets.find(a => a.id === assetId);
  if (asset) {
    asset.name = name || asset.name;
    asset.location = location || asset.location;
    asset.status = status || asset.status;
    res.json({ message: "Asset updated successfully", asset });
  } else {
    res.status(404).json({ message: "Asset not found" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
