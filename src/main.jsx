import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CheckoutPage from './pages/CheckoutPage.jsx';
import Checkout from './layout/Checkout.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                lazy: () => import('./layout/Home.jsx')
            },
            {
                path: '/films',
                lazy: () => import('./layout/Films.jsx')
            },
            {
                path: '/films/:id',
                lazy: () => import('./layout/Film.jsx')
            },
            {
                path: '/popularfilms',
                lazy: () => import('./layout/PopularFilms.jsx')
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
        // lazy: () => import('./pages/NotFoundPage.jsx')
    },
    // {
    //     path: '/checkout',
    //     element: <CheckoutPage />,
    //     children: [
    //         {
    //             path: '/checkout',
    //             element: <Checkout />
    //         }
    //     ]
    // }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
