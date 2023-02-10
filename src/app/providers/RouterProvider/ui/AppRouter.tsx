import React from 'react';
import {Route, Routes, RouteProps} from "react-router-dom";
import {AppRouteConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
  return (
    <Routes>
      {Object.values(AppRouteConfig).map((props: RouteProps) => (
        <Route
          key={props.path}
          path={props.path}
          element={props.element}
        />
      ))}
    </Routes>
  );
};

export default AppRouter;
