import { addMessage, MESSAGES, subscribers } from "../../data";
export default (_, args, { pubsub }) => {
  let newMessage = {
    id: MESSAGES.length + 1,
    user: args.user,
    text: args.text,
  };

  pubsub.publish("ON_MESSAGE", {
    messages: [...MESSAGES, newMessage],
  });
  subscribers.forEach((fn) => fn());
  return addMessage(newMessage);
};
