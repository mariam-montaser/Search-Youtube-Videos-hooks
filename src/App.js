import { Component, useState, useEffect } from 'react';

import './App.css';
import youtube from './apis/youtube';
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


    // useEffect(() => {
    //   onSearchSubmit('news');
    // }, []);

    // const onSearchSubmit = async (term) => {
    //     const {data} = await youtube.get('/search', {params: {q: term}});
    //     setVideos(data.items);
    //     setSelectedVideo(data.items[0])
    //   }
    
    return (
      <div className="App ui container">
        <SearchBar onSearchSubmit={search} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={selectedVideo} />
            </div>
            <div className="five wide column">
              {//<VideoList videos={videos} onVideoSelect={(video) => setSelectedVideo(video)}/>
              }
              <VideoList videos={videos} onVideoSelect={ setSelectedVideo}/>
            </div>
          </div>
        </div>
      </div>
    ) 
}

// class App extends Component {

//   state = {
//     videos: [],
//     selectedVideo: null
//   }

//   componentDidMount() {
//     this.onSearchSubmit('news')
//   }

//   onSearchSubmit = async (term) => {
//     const response = await youtube.get('/search', {params: {q: term}});
//     this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
//   }

//   onVideoSelect = (video) => {
//     console.log('selected');
//     this.setState({selectedVideo: video})
//   }

//   render() {
//     return (
//       <div className="App ui container">
//         <SearchBar onSearchSubmit={this.onSearchSubmit} />
//         <div className="ui grid">
//           <div className="ui row">
//             <div className="eleven wide column">
//               <VideoDetail video={this.state.selectedVideo} />
//             </div>
//             <div className="five wide column">
//               <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect}/>
//             </div>
//           </div>
//         </div>
//       </div>
//     ) 
//     }
// }

export default App;
