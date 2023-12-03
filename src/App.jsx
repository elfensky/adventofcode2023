import './App.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//routes
import Home from './routes/Home';
import Day01 from './routes/days/01/01';

export default function App() {
    return (
        <BrowserRouter basename="/adventofcode/2023/">
            <Root />
        </BrowserRouter>
    );
}

export function Root() {
    return (
        <main className="min-w-screen flex min-h-screen flex-grow flex-row">
            <section className="fixed flex min-h-screen min-w-[15%] flex-col bg-slate-600">
                <header className="flex bg-orange-300">
                    <p className="m-4 w-full text-center">
                        Advent of Code 2023
                    </p>
                </header>
                <nav className="m-4 flex flex-grow">
                    <ul>
                        <li className="text-blue-300 hover:text-blue-500">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="text-blue-300 hover:text-blue-500">
                            <Link to="/01">Day 01</Link>
                        </li>
                        <li>{/* <Link to='/02'>Day 02</Link> */}</li>
                    </ul>
                </nav>
                <footer className="flex bg-blue-300">
                    <p className="m-4 w-full text-center">
                        Created by <a href="lavrenov.io">lavrenov.io</a>
                    </p>
                </footer>
            </section>
            <section className="ml-[15%] flex flex-grow flex-col bg-slate-300">
                <article className="mx-auto my-8 flex min-w-[300px] max-w-[500px] flex-grow">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/01" element={<Day01 />} />
                    </Routes>
                </article>
            </section>
        </main>
    );
}
