import react, { lazy, Suspense, useState } from "react";
import { createRoot } from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Contact from "./pages/Contact";
import Test from "./Test";
import ResMenu from "./pages/ResMenu";
import Contact from "./pages/Contact";
import About from "./pages/About";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./pages/Cart";

const Grocery = lazy(() => {
  return import("./pages/Grocery");
});
console.log(Grocery);
const AppLayout = () => {
  const [userName, setUserName] = useState("Munavar Ahmed");
  return (
    <Provider store={appStore}>
      <UserContext.Provider
        value={{
          loggedInUser: userName,
          setUserName,
        }}
      >
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:id",
        element: <ResMenu />,
      },
      {
        path: "/aboutUs",
        element: <About />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
  {
    path: "/test",
    element: <Test />,
  },
]);
root.render(<RouterProvider router={route}></RouterProvider>);
