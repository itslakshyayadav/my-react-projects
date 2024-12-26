import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/home";
import MyNotes from "./src/pages/my-notes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/my-notes",
        element: <MyNotes />,
      },
      // {
      //   path: "/monitoring",
      //   element: <MonitoringPage />,
      // },
    ],
  },
]);

export default router;
