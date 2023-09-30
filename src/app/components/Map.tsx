import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

interface IMapProps {
  lat: number;
  lng: number;
}

const LeafletMap = ({ lat, lng }: IMapProps) => {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={20}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.osm.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, lng]}>
        <Popup> Designo </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
