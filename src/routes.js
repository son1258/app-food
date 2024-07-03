import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Homepage from "../src/pages/homepage";
import Detail from "./pages/detail";
import Order from "./pages/order";
import Profile from "./pages/profile";
import HeaderLayout from "./components/header/headerLayout";
import Menu from "./pages/menu";
import Chat from "./pages/chat";
import FinishOrder from "./pages/finishedOrder";

const router = createBrowserRouter([
    
    {
        path: '/',
        element: <Homepage />
    },
    {
        element: <HeaderLayout />,
        children: [
            {
                path: '/profile',
                element: <Profile />
            },
            {
                path: '/chat',
                element: <Chat />
            },
            {
                path: '/menu',
                element: <Menu />
            }
        ]
    },
    {
        path: '/detail/:id',
        element: <Detail />
    },
    {
        path: '/order',
        element: <Order />
    },
    {
        path: '/order/finish',
        element: <FinishOrder />
    }
])

export default router;