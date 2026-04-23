import React from 'react'
import './ChatMessage.css'

 function ChatMessage({message,sender}){ //destructuring assignment, same as props

            return(
                <div className={`chat-message ${sender === 'robot' ? 'chat-message-robot' : 'chat-message-user'}`}>
                    {sender === 'robot' && <img src='robot.png' alt='robot' className='chat-message-profile'/>}
                    <div className='chat-message-text'>
                        {message} 
                    </div>
                   
                    {sender === 'user' && <img src='user.png' alt='user' className='chat-message-profile'/>} 
                </div>
            )
        }

export default ChatMessage