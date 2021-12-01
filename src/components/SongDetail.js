import React from "react";


const SongDetail = ({song, position}) => {

    return (
        <div>
        <p> Position {position +1}</p>
        <p> Song Name: {song['im:name'].label} </p>
        <p> Artist Name {song['im:artist'].label}</p>
        <hr></hr>
        
        </div>
    )

}
export default SongDetail;

