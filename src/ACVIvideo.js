import React from 'react';
import YouTube from 'react-youtube';

function VideoPlayer() {
    const onReady = (event) => {
      // access to player in all event handlers via event.target
      event.target.playVideo();
    };
    
    return (
      <div id="video-container">
        <YouTube videoId="UJZrdD6MdAo" onReady={onReady} />
      </div>
    );
  }
  
export default VideoPlayer