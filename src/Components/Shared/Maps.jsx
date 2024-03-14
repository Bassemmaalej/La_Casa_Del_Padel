
import { borderRadius } from '@mui/system';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react'




function Maps({ google, locations = [] }) {
    return (

        <Map
            google={google}
            containerStyle={{
                position: "static",
                width: "100%",
                height: "100%"
            }}
            style={{
                width: "100%",
                height: "600px",
                border: "10px solid #1C356E",
                borderRadius: "30px",
                position: "relative"
            }}

            initialCenter={
                {
                    lat: -1.2884,
                    lng: 36.8233
                }
            }

            zoom={locations.length === 1 ? 18 : 13}
            disableDefaultUI={true}
        >
            <Marker position={{
                lat: -1.2884,
                lng: 36.8233
            }} />

        </Map>


    );

}
export default GoogleApiWrapper({
    apikey: ""
})(Maps)


