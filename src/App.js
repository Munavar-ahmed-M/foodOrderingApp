import react, { createElement } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
import Contact from "./pages/Contact";
import Test from "./Test";
import ResMenu from "./pages/ResMenu";
import Contact from "./pages/Contact";
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
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
  {
    path: "/test",
    element: <Test />,
  },
]);
root.render(<RouterProvider router={route}></RouterProvider>);
