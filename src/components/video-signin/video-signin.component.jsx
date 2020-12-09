import React from 'react';
import axios from 'axios';

function VideoSignIn ({setToken, setName, setRoom, name, room }) {

    async function handleSubmit(event) {
        event.preventDefault();
        const result = await axios.post(
            'video-token-url',
            {
                identity: name,
                room,
            });
        setToken(result.data);
        console.log("Got the token with value:", result.data);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </label>

            <label htmlFor="room">
                Name
                <input
                    type="text"
                    id="room"
                    value={room}
                    onChange={e => setName(e.target.value)}
            />
        </label>
            <br/><br/>
        <button type='submit'>Join the Chat</button>
        </form>
    )
}

export default VideoSignIn;