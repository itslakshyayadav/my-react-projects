import { createBrowserRouter } from "react-router-dom";
import Home from "./src/pages/home";
import MyNotes from "./src/pages/my-notes";
import Root from "./src/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
