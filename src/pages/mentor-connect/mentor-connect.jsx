import React from 'react';
import './mentor-connect.styles.scss';
import VideoChat from "../../components/video-chat/VideoChat";

const MentorConnect = () => {
    return (
        <div className="video-sign-in">
            <header>
                <h1>Get Ready For Learning and Fun</h1>
            </header>
            <main>
                <VideoChat />
            </main>
            <footer>
                <div class='made-with'>
                    <p>
                        Made with{' '}
                        <span role="img" aria-label="React">
            ⚛️
          </span>{' '}
                        React
                    </p>
                </div>

            </footer>
        </div>
    );
};

export default MentorConnect;









// import React from 'react';
// import './mentor-connect.styles.scss';
// import { useState } from 'react';
// import VideoSignIn from "../../components/video-signin/video-signin.component";
// import TwilioVideos from "../../components/twilio-video/twilio-video";
//
//
//
// function MentorConnect() {
//     const[token, setToken] = useState();
//     const [name, setName] = useState('');
//     const [room, setRoom] = useState('room');
//     return(
//         <div className='video-room'>
//             {!token
//                 ? <VideoSignIn setToken={setToken} setName={setName} name={name} setRoom={setRoom} room={room} />
//                 : <TwilioVideos token={token } room={room} /> }
//         </div>
//     );
// }
//
// export default MentorConnect;