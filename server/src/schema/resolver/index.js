import { PubSub } from "apollo-server-express";

// const onMessagesUpdates = (fn) => subscribers.push(fn);
// import { USERS } from "../../data";
import Query from "../query";
import Mutation from "../mutation";
import Subscription from "../subscription";
import { MESSAGES } from "../../data";

// Resolvers define the technique for fetching the types defined in the
// schema.
const resolvers = {
  Query,
  Mutation,
  // Subscription: {
  //   messages: {
  //     subscribe: (parent, args, { pubsub }) => {
  //       onMessagesUpdates(() =>
  //         pubsub.publish("ON_MESSAGE", { messages: MESSAGES })
  //       );
  //       setTimeout(
  //         () => pubsub.publish("ON_MESSAGE", { messages: MESSAGES }),
  //         0
  //       );
  //       pubsub.publish("ON_MESSAGE", { messages: MESSAGES });
  //       return pubsub.asyncIterator("ON_MESSAGE");
  //     },
  //   },
  // },
  Subscription
};
export default resolvers;
