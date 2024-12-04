import { setupServer } from "msw/node";
import { handlers } from "./handlers";

// Setup server for testing
export const server = setupServer(...handlers);
