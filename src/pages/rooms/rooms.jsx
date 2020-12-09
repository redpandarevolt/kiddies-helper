import React from 'react';
import './rooms.styles.css';
import { useState } from 'react';


function Room() {
    const[token, setToken] = useState();
    return(
        <div className='video-room'>
            {!token ? <div>Show Form</div> : <div>Hello from Twilio</div> }

        </div>
    )
}
export default Room;





// const { connect } = require('twilio-video');
//
// connect('$TOKEN', { name:'my-new-room' }).then(room => {
//     console.log(`Successfully joined a Room: ${room}`);
//     room.on('participantConnected', participant => {
//         console.log(`A remote Participant connected: ${participant}`);
//     });
// }, error => {
//     console.error(`Unable to connect to Room: ${error.message}`);
// })