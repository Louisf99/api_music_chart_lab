import React, {useState} from "react";
import ChartItem from "./ChartItem";

const songList = ({songs}) => {

  const songsItem = songs.map((song, index) => {
    return <ChartItem song={song} key={index}/>
  })
  
    return (
      <div>
          <ul>
            {songItem}
          </ul>
      </div>
    )
  }
export default songList;