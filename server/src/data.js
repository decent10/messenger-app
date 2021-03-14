export const MESSAGES = [];
export const subscribers = [];
const removeItem = (arr, value) => {
  return arr.filter(function (ele) {
    return ele != value;
  });
};

export const onMessagesUpdates = (fn) => subscribers.push(fn);

export const updateMessage = (message) => {
  const msgIndex = MESSAGES.findIndex((msg) => msg.id == message.id);
  let newMessages = [...MESSAGES];
  newMessages[msgIndex] = { ...newMessages[msgIndex], ...message };
  MESSAGES = newMessages;
  return MESSAGES.find((msg) => msg.id == message.id);
};
export const addMessage = (message) => {
  MESSAGES.push(message);
  return MESSAGES.find((msg) => msg.id == message.id);
};
