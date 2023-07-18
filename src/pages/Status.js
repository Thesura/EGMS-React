import Map from "../utils/Map";

function Status(){
    
    return(
        <div>
            <h1>Status</h1>
            <Map center = {{lat: 6.841446 ,lng: 80.003519}} zoom = {10}/>
        </div>
    );

}

export default Status;