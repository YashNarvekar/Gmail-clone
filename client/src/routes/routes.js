import { lazy } from "react";
// import Emails from "../components/Emails";
// import Main from "../pages/Main";
const Main = lazy(() => import("../pages/Main"));
const Emails = lazy(() => import("../components/Emails"));
const ViewEmail = lazy(() => import("../components/ViewEmail"));

const routes = {
  main: {
    path: "/",
    element: Main,
  },
  emails: {
    path: "/emails",
    element: Emails,
  },
  invalid: {
    path: "/*",
    element: Emails,
  },
  view: {
    path: "/view",
    element: ViewEmail,
  },
};

export { routes };
