import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserDetail from "./pages/UserDetail";
import Breadcrumb from "./components/Breadcrumb";

const router = createBrowserRouter([
  {
    path: "/",
    handle: {
      crumb: () => <Breadcrumb to="/">Home</Breadcrumb>,
    },
    children: [
      { index: true, element: <Home /> },
      {
        path: "/users",
        handle: {
          crumb: () => <Breadcrumb to="/users">Users</Breadcrumb>,
        },
        children: [
          {
            index: true,
            element: <Users />,
          },
          {
            path: ":id",
            element: <UserDetail />,
            handle: {
              crumb: (userName: string) => (
                <Breadcrumb to="/users/:id">{userName}</Breadcrumb>
              ),
            },
          },
        ],
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
