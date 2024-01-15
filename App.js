import React from "react";
import ReactDOM  from "react-dom/client";
import AppLayout from "./components/AppLayout.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import Body from "./components/Body.js";
import RestaurantMenu from "./components/RestaurantMenu.js";

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