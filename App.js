import React from "react";
import ReactDOM  from "react-dom/client";
import AppLayout from "./components/AppLayout.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Error from "./components/Error.js";
import Body from "./components/Body.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import About from "./components/about/About.js";
import Contact from "./components/Contact.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/restaurant/:resID",
                element: <RestaurantMenu />
            }
        ],
        errorElement: <Error />
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={router}/>)