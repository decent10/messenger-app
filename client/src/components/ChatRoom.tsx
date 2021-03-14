import { useEffect, useRef } from 'react';
import { Message as MessageType } from '../type';
import Message from './Message';

type Props = {
    messages: MessageType[];
    user: string;
};

const ChatRoom = ({ messages, user }: Props) => {
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = (): void => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    useEffect(() => {
        scrollToBottom();
    }, [messages]);
    return (
        <div className="flex flex-col h-full overflow-x-auto mb-4">
            <div className="flex flex-col h-full">
                <div className="grid grid-cols-12 gap-y-2">
                    {messages?.map((msg) => (
                        <Message user={user} message={msg} />
                    ))}
                    <div ref={messagesEndRef}></div>
                </div>
            </div>
        </div>
    );
};
export default ChatRoom;
