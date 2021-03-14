import { MESSAGES } from "../../data";

export default (root, args) => MESSAGES.find((msg) => msg.id === args.id);
