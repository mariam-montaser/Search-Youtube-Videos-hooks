import { useState, useEffect } from 'react';

import './App.css';
import {SearchBar} from "./components/SearchBar";
import {VideoList} from "./components/VideoList";
import {VideoDetail} from "./components/VideoDetail";
import {useVideos} from "./hooks/useVideos";

const App = () => {
    // const [videos, setVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, search] = useVideos('news');

    useEffect(() => {
      setSelectedVideo(videos[0])
    }, [videos]);


   
    
    return (
      <div className="App ui container">
        <SearchBar onSearchSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              
              <VideoList videos={videos} onVideoSelect={ setSelectedVideo}/>
            </div>
          </div>
        </div>
      </div>
    ) 
}

export default App;
