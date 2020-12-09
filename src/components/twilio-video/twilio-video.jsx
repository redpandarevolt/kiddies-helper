import React, { useEffect, useRef }from 'react';
import {cleanup} from "@testing-library/react";
import TwilioVideo from 'twilio-video';

function TwilioVideos({token, room}){

    const localVideoRef = useRef();
    const remoteVideoRef = useRef();

    useEffect(() => {
        TwilioVideo.connect(token, {
            video: true,
            audio: true,
            name: room
        }).then((room) => {
            console.log('Attempting Connection with Twilio')
            TwilioVideo.createLocalVideoTrack().then(
                track => {
                    localVideoRef.current.appendChild(track.attach());
                }
            );
        }).catch(e => {
            console.log('Error Connecting', e);
        })
        return () => {};
    }, [token, room])
    return(
        <div>
            <h1>You are in room  {room}</h1>
            <div ref={localVideoRef}></div>
            <div ref={remoteVideoRef}></div>
        </div>
    )
}

export default TwilioVideos;