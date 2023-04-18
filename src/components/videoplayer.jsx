import React from 'react'
// import "node_modules/video-react/dist/video-react.css"; 
// import dynamic from 'next/dynamic'
// import ReactPlayer from 'react-player/lazy'
// import react from 'react';
// import { Player } from 'video-react';
//const Player = dynamic(() => import('react-player/lazy'), { ssr: false })
function VideoPlayer(props) {
  const title =props.title;
  var i=0;
  return (
    <>
 

            <div className="p-2 hover:shadow-lg rounded-lg sm:m-2">
              <iframe
                src={props.url}
                title={props.title}
                className="rounded-md"
                allowFullScreen
              />
            
            <ul className="text-xs">
          <li className="font-bold leading-[1.2rem] pb-1 text-sm">
           {props.sequence+1}) {title.slice(0, 46) + (title.length > 46 ? "..." : "")}
          </li>
          </ul>
          </div>
    </>
  );
}
export default VideoPlayer;