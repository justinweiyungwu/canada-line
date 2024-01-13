import {MapContainer, TileLayer, Popup, Polyline, CircleMarker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


const multiPolyline: [number, number][][] = [
   [
    [49.285683, -123.112335],
    [49.282439, -123.118618],
    [49.274707, -123.121815],
    [49.266351, -123.115886],
    [49.266351, -123.114386],
    [49.262689, -123.114700],
    [49.249174, -123.115500],
    [49.233260, -123.116389],
    [49.226337, -123.116505],
    [49.210051, -123.117128],
    [49.200000, -123.117660],
    [49.195780, -123.126279],
    [49.194211, -123.128821],
    [49.193700, -123.129821],
    [49.191369, -123.130000],
    [49.184168, -123.136471],
    [49.175038, -123.136649],
    [49.167941, -123.136311],
   ],
   [
    [49.226337, -123.116505],
    [49.210051, -123.117128],
    [49.200000, -123.117660],
    [49.195780, -123.126279],
    [49.196524, -123.146261],
    [49.192861, -123.157987],
    [49.194008, -123.178372]
   ]
]
const redOptions = { color: "red"}
const orangeOptions = { color: "orange"
}
const fillBlueOptions = { color: "blue"}

const center: [number, number] =  [49.05255, -123.04150];

export default function Map () {
    return (
        <main>
        <div>
            
        </div>

        
        <MapContainer
        style={{height: "80vh"}}
        center={[49.285790, -123.111954]} zoom={14} scrollWheelZoom={true}
        >
<TileLayer
attribution='&copy; <a href="https://github.com/justinweiyungwu/canada-line">By Justin Wu</a> contributors '
url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
/>

<Polyline
pathOptions={orangeOptions}
positions={multiPolyline}/>

//1
<CircleMarker center={[49.285683, -123.112335]} pathOptions={redOptions} radius={15}>
<Popup>Waterfront Station</Popup>
</CircleMarker>
//2
<CircleMarker center={[49.282439, -123.118618]} pathOptions={redOptions} radius={15}>
<Popup>Vancouver City Centre</Popup>
</CircleMarker>
//3
<CircleMarker center={[49.274707, -123.121815]} pathOptions={redOptions} radius={15}>
<Popup>Yaletown-Roundhouse</Popup>
</CircleMarker>
//4
<CircleMarker center={[49.266351, -123.115586]} pathOptions={redOptions} radius={15}>
<Popup>Olympic Village</Popup>
</CircleMarker>
//5
<CircleMarker center={[49.262689, -123.114500]} pathOptions={redOptions} radius={15}>
<Popup>Broadway-City Hall</Popup>
</CircleMarker>
//6
<CircleMarker center={[49.249174, -123.116192]} pathOptions={redOptions} radius={15}>
<Popup>King Edward</Popup>
</CircleMarker>
//7
<CircleMarker center={[49.233260, -123.116387]} pathOptions={redOptions} radius={15}>
<Popup>Oakridge-41st Avenue</Popup>
</CircleMarker>
//8
<CircleMarker center={[49.226337, -123.115805]} pathOptions={redOptions} radius={15}>
<Popup>Langara-49th Avenue</Popup>
</CircleMarker>
//9
<CircleMarker center={[49.210051, -123.117128]} pathOptions={redOptions} radius={15}>
<Popup>Marine Drive</Popup>
</CircleMarker>
//10
<CircleMarker center={[49.195780, -123.126279]} pathOptions={redOptions} radius={15}>
<Popup>Bridgeport</Popup>
</CircleMarker>
//11
<CircleMarker center={[49.184168, -123.136471]} pathOptions={redOptions} radius={15}>
<Popup>Aberdeen</Popup>
</CircleMarker>
//12
<CircleMarker center={[49.175038, -123.136649]} pathOptions={redOptions} radius={15}>
<Popup>Lansdowne</Popup>
</CircleMarker>
//13
<CircleMarker center={[49.167941, -123.136311]} pathOptions={redOptions} radius={15}>
<Popup>Richmond-Bridghouse</Popup>
</CircleMarker>
//14
<CircleMarker center={[49.196524, -123.146261]} pathOptions={redOptions} radius={15}>
<Popup>Templeton</Popup>
</CircleMarker>
//15
<CircleMarker center={[49.192861, -123.157987]} pathOptions={redOptions} radius={15}>
<Popup>Sea Island Centre</Popup>
</CircleMarker>
//16
<CircleMarker center={[49.194008, -123.178372]} pathOptions={redOptions} radius={15}>
<Popup>YVR-Airport</Popup>
</CircleMarker>
        </MapContainer>
        </main>
    )
}