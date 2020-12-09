
import React from 'react';
import './mentor-connect.styles.scss';
import { useState } from 'react';
import VideoSignIn from "../../components/video-signin/video-signin.component";
import TwilioVideos from "../../components/twilio-video/twilio-video";



function MentorConnect() {
    const[token, setToken] = useState();
    const [name, setName] = useState('');
    const [room, setRoom] = useState('room');
    return(
        <div className='video-room'>
            {!token
                ? <VideoSignIn setToken={setToken} setName={setName} name={name} setRoom={setRoom} room={room} />
                : <TwilioVideos token={token } room={room} /> }
        </div>
    );
}

export default MentorConnect;