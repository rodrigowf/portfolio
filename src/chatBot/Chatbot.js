import React from 'react';
import { ChatFeed, Message } from 'react-chat-ui';
import SpeechRecog from "./SpeechRecog";
import axios from 'axios';


function Chatbot() {

    const [ is_typing, set_is_typing ] = React.useState(false);
    const [ messages, set_messages ] = React.useState([
        new Message({
            id: 1,
            message: "Olá, permita-me lhe responder...",
        }), // Gray bubble
        // new Message({ id: 0, message: "I'm you -- the blue bubble!" }), // Blue bubble
    ]);

    const audioPlayer = document.getElementById("robotVoicePlayer");

    function add_message(id, message, mssgs = null) {
        if(!mssgs) mssgs = messages;
        let result = mssgs.concat([new Message({id: id, message: message})]);
        set_messages(result);
        return result
    }

    function sendToAssistant(message, mssgs = null) {
        if(!mssgs) mssgs = messages;
        axios.post('http://localhost:5000/hear', {message: message})
            .then( (res) => {
                if(res.data.output.generic[0].text) {
                    add_message(
                        1,
                        res.data.output.generic[0].text,
                        mssgs
                    );
                }
                console.log(res);
            })
    }

    async function onRecog (message) {
        const mssgs = add_message(0, message);
        sendToAssistant(message, await mssgs);
    }

    return (
        <div>
            <ChatFeed
                messages={messages} // Boolean: list of message objects
                isTyping={is_typing} // Boolean: is the recipient typing
                hasInputField={false} // Boolean: use our input, or use your own
                showSenderName // show the name of the user who sent the message
                bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
                // JSON: Custom bubble styles
                bubbleStyles={
                    {
                        text: {
                            fontSize: 16,
                            fontWeight: 500
                        },
                        chatbubble: {
                            borderRadius: 8,
                            padding: 8
                        }
                    }
                }
            />
            <SpeechRecog onRecog={onRecog}/>
            <audio id='robotVoicePlayer'> </audio>
        </div>
    );
}

export default Chatbot;
