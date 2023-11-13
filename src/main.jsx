import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
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
            // {
            //     path: '/popularfilms',
            //     lazy: () => import('./layout/PopularFilms.jsx')
            // },
            {
                path: '/search',
                lazy: () => import('./layout/Search.jsx')
            },
        ]
    },
    {
        path: '*',
        element: <NotFoundPage />
        // lazy: () => import('./pages/NotFoundPage.jsx')
    },
    {
        path: '/404',
        lazy: () => import('./pages/ErrorPage.jsx')
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
