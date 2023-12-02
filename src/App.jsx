// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Day01 from './pages/01/01';

function App() {
    // const [count, setCount] = useState(0);

    //   return (
    //     <>
    //       <div>
    //         <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
    //           <img src={viteLogo} className="logo" alt="Vite logo" />
    //         </a>
    //         <a href="https://react.dev" target="_blank" rel="noreferrer">
    //           <img src={reactLogo} className="logo react" alt="React logo" />
    //         </a>
    //       </div>
    //       <h1>Vite + React</h1>
    //       <div className="card">
    //         <button onClick={() => setCount((count) => count + 1)}>
    //           count is {count}
    //         </button>
    //         <p>
    //           Edit <code>src/App.jsx</code> and save to test HMR
    //         </p>
    //       </div>
    //       <p className="read-the-docs">
    //         Click on the Vite and React logos to learn more
    //       </p>
    //     </>
    //   )

    return (
        <BrowserRouter>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/01'>Day 01</Link>
                    </li>
                    <li>
                        <Link to='/02'>Day 02</Link>
                    </li>
                </ul>
            </nav>

            <Routes>
                <Route exact path="/" component={HomePage} />
                <Route path="/01" component={Day01} />
                {/* <Route path="/contact" component={ContactPage} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
