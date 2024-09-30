/**
 * Frontend Types
 *
 * @module frontend/src/types
 * @description This module holds all the types used across the application's frontend.
 */

export type Message = {
  role: string;
  content: string;
};
export type MessageSetter = React.Dispatch<React.SetStateAction<Message[]>>;
