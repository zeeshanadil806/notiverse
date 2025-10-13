"use client"
import { motion } from "framer-motion"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"

// Fix for default marker icon


export default function LocationMap() {
  // Replace these coordinates with your actual location
  const position: [number, number] = [31.5204, 74.3587] // Lahore, Pakistan

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <h2 className="mb-6 text-2xl font-bold">Our Location</h2>
      <div className="h-[400px] w-full overflow-hidden rounded-lg">
        <MapContainer center={position} zoom={13} style={{ height: "100%", width: "100%" }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position}>
            <Popup>Notiverse Headquarters</Popup>
          </Marker>
        </MapContainer>
      </div>
    </motion.div>
  )
}

