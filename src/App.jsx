import './App.css';
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//flowbite
import { Flowbite } from 'flowbite-react';
//components
import Navigation from './components/Navigation';
import Toggle from './components/Toggle';
//routes
import Home from './routes/Home';
import Day01 from './routes/days/01/01';
import Day02 from './routes/days/02/02';
// import Day04 from './routes/days/04/04';

export default function App() {
    return (
        <Flowbite>
            <BrowserRouter basename="/adventofcode/2023/">
                <Content />
            </BrowserRouter>
        </Flowbite>
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
                data-nav={nav}
            >
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/01" element={<Day01 />} />
                    <Route path="/02" element={<Day02 />} />
                    {/* <Route path="/03" element={<Day03 />} /> */}
                    {/* <Route path="/04" element={<Day04 />} /> */}
                </Routes>
            </section>
        </main>
    );
}
