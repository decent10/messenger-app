import { MESSAGES, onMessagesUpdates } from "../../data";


   const  messages = {
      subscribe: (_, args, { pubsub }) => {
        onMessagesUpdates(() =>
          pubsub.publish("ON_MESSAGE", { messages: MESSAGES })
        );
        setTimeout(
          () => pubsub.publish("ON_MESSAGE", { messages: MESSAGES }),
          0
        );
        pubsub.publish("ON_MESSAGE", { messages: MESSAGES });
        return pubsub.asyncIterator("ON_MESSAGE");
      },
    };

export default messages;