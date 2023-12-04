import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//components
import Navigation from './components/Navigation';
import Toggle from './components/Toggle';
//routes
import Home from './routes/Home';
import Day01 from './routes/days/01/01';

export default function App() {
    return (
        <BrowserRouter basename="/adventofcode/2023/">
            <Content />
        </BrowserRouter>
    );
}

export function Content() {
    const [nav, toggleNav] = useState(false);

    return (
        <main className="flex min-w-screen flex-grow flex-row overflow-x-hidden bg-gray-300 p-4 dark:bg-gray-900 lg:h-screen lg:max-h-screen">
            <Toggle nav={nav} toggleNav={toggleNav} />
            <Navigation nav={nav} toggleNav={toggleNav} />
            <section
                id="content"
                className="flex flex-col space-y-4 overflow-auto rounded-md text-gray-900 dark:text-white lg:flex-row lg:space-x-4 lg:space-y-0"
                // style={ContentStyle}
                data-nav={nav}
            >
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/01" element={<Day01 />} />
                </Routes>
            </section>
        </main>
    );
}
