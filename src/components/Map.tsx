import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

export function Map({ latitude, longitude }) {
  if (!latitude) {
    return (
      <div
        className="w-full md:w-3/5 border rounded-lg mr-4 min-h-[300px] h-full"
        id="map"
      >
        You didn't search any ip address or data is fetching or failed to fetch data
      </div>
    );
  }

  return (
    <div
      className="w-full md:w-3/5 border rounded-lg mr-4 min-h-[300px] h-full"
      id="map"
    >
      <MapContainer
        center={[latitude, longitude]}
        zoom={6}
        scrollWheelZoom={true}
      >
        <ChangeView center={[latitude, longitude]} zoom={6} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[latitude, longitude]} />
      </MapContainer>
    </div>
  );
}
