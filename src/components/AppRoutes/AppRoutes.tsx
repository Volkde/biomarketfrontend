import { Route, Routes } from "react-router-dom";
import { routes } from "./data";

function AppRoutes() {
  const elRoutes = routes.map(route => (
    <Route key={route.path} path={route.path} element={route.element} />
  ));

  return <Routes>{elRoutes}</Routes>;
}

export default AppRoutes;
