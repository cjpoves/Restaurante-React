import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import  './Mapa.css'



export const Mapa = () => {
  //Coordenadas
    const position = [37.3886, -5.9823]; 
    
    return (
      //Libreria leaflet para obtener mapa
      <MapContainer center={position} zoom={13} className = "mapa" style={{ height: "100%", width: "100%"}}>
        <TileLayer 
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={new L.Icon.Default()}>
          <Popup>
            Aquí está la ubicación.
          </Popup>
        </Marker>
      </MapContainer>
    );
  };
  