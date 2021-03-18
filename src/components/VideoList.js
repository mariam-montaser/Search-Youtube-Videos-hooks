import React from 'react';
import {VideoItem} from "./VideoItem";

export const VideoList = ({videos, onVideoSelect}) => {
    const list = videos.map(video => {
        return <VideoItem 
                key={video.id.videoId} 
                video={video} 
                onVideoSelect={onVideoSelect} 
                />
    })
    return (
        <div className="video-list ui relaxed divided list">
            {list}
        </div>
    )
}
