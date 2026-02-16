import { useState } from 'react';

function PostMessage() {

    const [messages, setMessages] = useState({})

    async function postMessages(){
        const res = await fetch("http://localhost:3000/api/messages", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            // body: JSON.stringify(messages)
        })
        const message = await res.json()
        console.log(message);
    }    

  return (
    <div>
        <br /><br />
      <button onClick={postMessages}>post a message</button>
    </div>
  )
}

export default PostMessage
