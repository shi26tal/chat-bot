import { useEffect , useRef } from "react";
import ChatMessage from "./ChatMessage";
import './ChatMessages.css'

function ChatMessages({chatMessages}){
           
            const chatMessagesRef = useRef(null); //useRef = create a reference to an element in the html, we can use this reference to access the element and its properties

            useEffect(()=>{
                const containerElem = chatMessagesRef.current;
                if (containerElem) {
                    containerElem.scrollTop = containerElem.scrollHeight;
                }
            },[chatMessages]); //run this effect when the chatMessages state changes

            if(chatMessages.length === 0){
                return (
                    <div className='chat-messages-container-text' ref={chatMessagesRef}>
                        Welcome to the Chatbot! Send a message using the textbox below.
                    </div>
                )
            }
            

            return (
                <div className='chat-messages-container' ref={chatMessagesRef}>
                    {chatMessages.map((chatMessage)=>{
                            return(
                                <ChatMessage 
                                message={chatMessage.message} 
                                sender={chatMessage.sender}
                                key={chatMessage.id}
                                />
                            )
                        })}
                </div>
        )

        }

export default ChatMessages