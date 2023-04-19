import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'
import styles from '../../styles/Contact.module.css'

export default function Map({ marker, popupText }: { marker: number[], popupText: string }) {
    return (
        <MapContainer className={styles.map} center={marker} zoom={15}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={marker}>
                <Popup>
                    {popupText}
                </Popup>
            </Marker>
        </MapContainer>
    )
}
