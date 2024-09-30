import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ConversationTagging from "./features/conversation-tagging";
import LandingPage from "./features/landing";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
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
