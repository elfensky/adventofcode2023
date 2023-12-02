// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

import { BrowserRouter,createBrowserRouter, RouterProvider,  Link, Route, Routes } from 'react-router-dom';

import HomePage from './pages/HomePage';
import Day01 from './pages/01/01';

const router = createBrowserRouter([
    { path: "*", Component: Root },
]);
  
export default function App() {
    return <RouterProvider router={router} />;
}

function Root() {
    // const [count, setCount] = useState(0);

    return (
        // <BrowserRouter>
        
        // </BrowserRouter>
    );
}
