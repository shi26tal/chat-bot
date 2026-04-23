import { useState } from "react";
import { Chatbot } from 'supersimpledev';
import './ChatInput.css'


export function ChatInput({chatMessages,setChatMessages}){ //destructuring assignment, same as props

            const [inputText,setInputText]= useState('');
            const [isLoading ,setIsLoading] = useState(false); 
  
            //event.target = gives us the element that we are typing in
            function saveInputText(event) {
                setInputText(event.target.value);
            }

            function handleKeyDown(event){
                if(event.key === 'Enter'){
                    sendMessage();
                }
                if(event.key === 'Escape'){
                    setInputText('');
                }
            }

            async function sendMessage(){

                if(isLoading || inputText === ''){
                    return;

                }

                setIsLoading(true);

                setInputText(''); //clear the input field after sending the message 

                const newChatMessages = [...chatMessages, {
                    message: inputText,
                    sender:'user',
                    id:'id' + Math.random() //generate a random id
                }];

                setChatMessages(newChatMessages);

                setChatMessages([
                    ...newChatMessages, //spread operator, copy all the elements in the array
                    {
                        message: <img src='loading-spinner.gif' alt='loading' className='loading'/>,
                        sender:'robot',
                        id:'id' + Math.random() //generate a random id
                    }
                ]);

                const response = await Chatbot.getResponseAsync(inputText);

                setChatMessages([
                    ...newChatMessages, //spread operator, copy all the elements in the array
                    {
                        message: response,
                        sender:'robot',
                        id:'id' + Math.random() //generate a random id
                    }
                ]);
                
                setIsLoading(false);
            }

            return (
                <div className='chat-input-container'>
                    <input 
                        placeholder="Send a message to Chatbot" 
                        size="30"
                        onChange={saveInputText}
                        onKeyDown={handleKeyDown}
                        value={inputText}
                        /* this is controlled input */
                        className='chat-input'
                    />
                    <button className='send-btn' onClick={sendMessage}>Send</button>
                </div>
            )
        }
