import React from 'react';
import ReactPlayer from 'react-player/youtube'

function VideoPlayer({links}) {
  console.log(links[0]);
  return (
    <div className='video-player'>
      <ReactPlayer
        className='video-player__element'
        url={links[0]}
        playing={true}
        controls={true}
        volume={0.8}
        muted={false}
        width='100%'
        light
      />
    </div>
  );
}

export default VideoPlayer;