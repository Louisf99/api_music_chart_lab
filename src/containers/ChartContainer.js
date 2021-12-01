import React, {useState, useEffect} from "react"
import Chart from "../components/SongList";
import SongDetail from "../components/SongDetail";

const ChartContainer = () =>{
    const [songs, setSongs] = useState([]);


    useEffect(() => {
        getChartItem();
      }, [])
  


const getChartItem = function(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
    .then(response => response.json())
    .then(songs => setSongs(songs.feed.entry))
}

    return (
        <>
            <Chart songs= {songs}/>
        </>

    )
}
export default ChartContainer;