import { AboutPage } from "pages/About";
import { HomePage } from "pages/Home";
import { NotFoundPage } from "pages/NotFound";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
];
