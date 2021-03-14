import { Message as MessageType } from '../type';
type Props = {
    user: string;
    message: MessageType;
};
const Message = ({ user, message }: Props) => (
    <div
        className={`${
            user === message.user
                ? 'col-start-6 col-end-13 p-3 rounded-lg'
                : 'col-start-1 col-end-8 p-3 rounded-lg'
        }`}
    >
        <div
            className={`${
                user === message.user
                    ? 'flex flex-row items-center flex-row-reverse'
                    : 'flex flex-row items-center'
            }`}
        >
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                {message.user.slice(0, 2).toUpperCase()}
            </div>
            <div
                className={`relative  text-sm ${
                    user === message.user
                        ? 'bg-indigo-100 mr-3'
                        : 'bg-white ml-3'
                } py-2 px-4 shadow rounded-xl`}
            >
                <div>{message.text}</div>
            </div>
        </div>
    </div>
);
export default Message;
