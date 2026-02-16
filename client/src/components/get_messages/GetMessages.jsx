import React from 'react'

function GetMessages() {

    async function returnMessages() {
        const res = await fetch("http://localhost:3000/api/messages")
        const message = await res.json();
        console.log(message);
    }

    return (
        <div>
            <br /><br />
            <button onClick={returnMessages}>get all messages</button>
        </div>
    )
}

export default GetMessages
