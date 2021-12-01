import React from "react";

import SongDetail from "./SongDetail";

const songList = ({songs}) => {

  const songsItems = songs.map((song, index) => {
    return <SongDetail song={song} position={index}/>
  })
  
    return (
      <div>
          <ul>
            {songsItems}
          </ul>
      </div>
    )
  }
export default songList;