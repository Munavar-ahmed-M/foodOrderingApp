import react, { createElement } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./pages/Contact";
import ResMenu from "./pages/ResMenu";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      <Outlet />
    </div>
  );
};
const root = createRoot(document.getElementById("root"));

root.render(<AppLayout />);
const route = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Body />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <ResMenu />,
      },
    ],
  },
]);
root.render(<RouterProvider router={route}></RouterProvider>);

