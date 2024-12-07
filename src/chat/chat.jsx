import React, { useState, useEffect, useRef } from 'react';
import './chat.css';

export function Chat() {
  const [messages, setMessages] = useState([]); // Stores all messages
  const [name, setName] = useState(''); // Stores the user's name
  const [newMessage, setNewMessage] = useState(''); // Current message being typed
  const [isConnected, setIsConnected] = useState(false); // WebSocket connection state
  const socketRef = useRef(null); // Ref for the WebSocket instance

  // Initialize WebSocket connection
  useEffect(() => {
    let port = window.location.port;
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    // const socket = new WebSocket(`${protocol}://localhost:4000/wss`);
    //const socket = new WebSocket(`${protocol}://${window.location.host}/wss`); //the original broken line from chat
    const socket = new WebSocket(`${protocol}://${window.location.hostname}:${port}/ws`);

    socketRef.current = socket;


    socket.onopen = () => {
      setIsConnected(true);
      appendMessage('system', 'websocket', 'connected');
    };

    socket.onmessage = async (event) => {
      try {
        const text = await event.data.text(); // Convert Blob to text
        const chat = JSON.parse(text);       // Parse the JSON string
        appendMessage('friend', chat.name, chat.msg);
      } catch (error) {
        console.error('Error processing message:', error);
      }
    };

    socket.onclose = () => {
      setIsConnected(false);
      appendMessage('system', 'websocket', 'disconnected');
    };

    return () => {
      socket.close();
    };
  }, []);

  // Append a new message to the chat
  const appendMessage = (cls, from, msg) => {
    setMessages((prevMessages) => [
      { cls, from, msg },
      ...prevMessages,
    ]);
  };

  // Handle sending a message
  const sendMessage = () => {
    if (!newMessage.trim() || !name.trim()) return;

    appendMessage('me', 'me', newMessage);

    if (socketRef.current && socketRef.current.readyState === WebSocket.OPEN) {
      socketRef.current.send(
        JSON.stringify({ name, msg: newMessage })
      );
        } else {
      console.log('WebSocket is not open. Ready state:', socketRef.current.readyState);
      console.log("Establising a connection to: ", socketRef.current.url);
    }

    setNewMessage('');
  };

  // Handle Enter key for sending messages
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <main>
      <div className="name">
        <fieldset id="name-controls">
          <legend>My Name</legend>
          <input
            id="my-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </fieldset>
      </div>

      <fieldset id="chat-controls" disabled={!name.trim()}>
        <legend>Chat</legend>
        <input
          id="new-msg"
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage} disabled={!newMessage.trim()}>
          Send
        </button>
      </fieldset>

      <div id="chat-text">
        {messages.map((message, index) => (
          <div key={index}>
            <span className={message.cls}>{message.from}</span>: {message.msg}
          </div>
        ))}
      </div>

      <div className="status">
        <p>Status: {isConnected ? 'Connected' : 'Disconnected'}</p>
      </div>
    </main>
  );
}











// import React from 'react';
// import './chat.css';


// export function Chat() {
//   // Adjust the webSocket protocol to what is being used for HTTP
//   const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
//   const socket = new WebSocket(`${protocol}://${window.location.host}/ws`);

//   // Display that we have opened the webSocket
//   socket.onopen = (event) => {
//     appendMsg('system', 'websocket', 'connected');
//   };

//   // Display messages we receive from our friends
//   socket.onmessage = async (event) => {
//     const text = await event.data.text();
//     const chat = JSON.parse(text);
//     appendMsg('friend', chat.name, chat.msg);
//   };

//   // If the webSocket is closed then disable the interface
//   socket.onclose = (event) => {
//     appendMsg('system', 'websocket', 'disconnected');
//     document.querySelector('#name-controls').disabled = true;
//     document.querySelector('#chat-controls').disabled = true;
//   };

//   // Send a message over the webSocket
//   function sendMessage() {
//     const msgEl = document.querySelector('#new-msg');
//     const msg = msgEl.value;
//     if (!!msg) {
//       appendMsg('me', 'me', msg);
//       const name = document.querySelector('#my-name').value;
//       console.log('WebSocket readyState:', socket.readyState);
//       socket.send(`{"name":"${name}", "msg":"${msg}"}`);
//       msgEl.value = '';
//     }
//   }

//   // Create one long list of messages
//   function appendMsg(cls, from, msg) {
//     const chatText = document.querySelector('#chat-text');
//     const chatEl = document.createElement('div');
//     chatEl.innerHTML = `<span class="${cls}">${from}</span>: ${msg}</div>`;
//     chatText.prepend(chatEl);
//   }

//   // Send message on enter keystroke
//   document.addEventListener('DOMContentLoaded', () => {
//     const input = document.querySelector('#new-msg');
//     input.addEventListener('keydown', (e) => {
//       if (e.key === 'Enter') {
//         sendMessage();
//       }
//     });
//   });

//   // Disable chat if no name provided
//   document.addEventListener('DOMContentLoaded', () => {
//     const chatControls = document.querySelector('#chat-controls');
//     const myName = document.querySelector('#my-name');
//     myName.addEventListener('keyup', (e) => {
//       chatControls.disabled = myName.value === '';
//     });
//   });

//   return (
//     <main>
//       <div className="name">
//         <fieldset id="name-controls">
//           <legend>My Name</legend>
//           <input id="my-name" type="text" />
//         </fieldset>
//       </div>

//       <fieldset id="chat-controls" enabled="true">
//         <legend>Chat</legend>
//         <input id="new-msg" type="text" />
//         <button onClick={sendMessage}>Send</button>
//       </fieldset>
//       <div id="chat-text"></div>
//     </main>
//     // <script src="chatClient.js"></script>
//   );
// }