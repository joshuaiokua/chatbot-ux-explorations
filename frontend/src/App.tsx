import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Launchpad from "./features/launchpad";
import ConversationTagging from "./features/conversation-tagging";

const router = createBrowserRouter([
  {
    path: "/", // Landing page
    element: <Launchpad />,
  },
  {
    path: "/conversation-tagging",
    element: <ConversationTagging />,
  },
]);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
