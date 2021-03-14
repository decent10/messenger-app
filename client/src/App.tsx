import { useState } from 'react';
import { useSubscription, useMutation } from '@apollo/client';
import GET_MESSAGES from './graphql/subscription/messages';
import SEND_MESSAGE from './graphql/mutation/sendMessage';

import Login from './components/Login';
import ChatRoom from './components/ChatRoom';
import ChatBox from './components/ChatBox';
import { Message } from './type';
type MessageType = {
    messages: Message[];
};

function App() {
    const { data, loading } = useSubscription<MessageType>(GET_MESSAGES);
    const [sendMessage] = useMutation(SEND_MESSAGE);
    const [user, setUser] = useState<string | ''>('');
    const [message, setMessage] = useState<string | ''>('');
    const [isLogin, setIsLogin] = useState<boolean>(false);

    const login = () => {
        if (user) {
            setIsLogin(true);
        }
    };
    const onSendMessage = (): void => {
        if (message.length > 0) {
            sendMessage({
                variables: {
                    user,
                    text: message,
                },
            });
        }
        setMessage('');
    };

    if (loading) {
        return null;
    }
    return (
        <div className="md:container md:mx-auto ">
            <div className="flex h-screen antialiased text-gray-800">
                <div className="flex flex-row h-full w-full overflow-x-hidden">
                    <div className="flex flex-col flex-auto h-full p-6">
                        {!isLogin ? (
                            <Login
                                title="Enter to chat"
                                onLogin={login}
                                value={user}
                                onChange={(e) => {
                                    let ele = e.target as HTMLInputElement;
                                    setUser(ele.value);
                                }}
                            />
                        ) : (
                            <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 h-full p-4">
                                <ChatRoom
                                    user={user}
                                    messages={data!.messages}
                                />
                                <ChatBox
                                    message={message}
                                    onSendMessage={onSendMessage}
                                    onMessageType={(e) => {
                                        let ele = e.target as HTMLInputElement;
                                        setMessage(ele.value);
                                    }}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
