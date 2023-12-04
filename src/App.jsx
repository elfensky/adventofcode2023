import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
//flowbite
import { Sidebar } from 'flowbite-react';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    fa0,
    fa1,
    fa2,
    fa3,
    fa4,
    fa5,
    fa6,
    fa7,
    fa8,
    fa9,
} from '@fortawesome/free-solid-svg-icons';
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
    const SideBarStyle = {
        height: 'calc(100vh - 2rem)',
        // Add any other styles you need
    };

    return (
        <main className="min-w-screen flex min-h-screen flex-grow flex-row bg-gray-300 p-4 dark:bg-gray-900 lg:h-screen lg:max-h-screen">
            <Sidebar
                aria-label="sidebar with logo branding example"
                className="overflow-clip rounded-lg"
                style={SideBarStyle}
            >
                <Sidebar.Logo
                    href="#"
                    img="logo.png"
                    imgAlt="Unicode Xmas Tree"
                >
                    Advent of Code 2023
                </Sidebar.Logo>
                <Sidebar.Items className="overflow-auto p-4">
                    <Sidebar.ItemGroup>
                        <Link to="/">
                            <Sidebar.Item href="#">
                                <span>
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </span>
                                Home
                            </Sidebar.Item>
                        </Link>
                        <Link to="/01">
                            <Sidebar.Item href="#">
                                <span className="space-x-[0.1rem]">
                                    <FontAwesomeIcon icon={fa0} />
                                    <FontAwesomeIcon icon={fa1} />
                                </span>
                                <span className="mx-1">-</span>
                                Trebuchet?!
                            </Sidebar.Item>
                        </Link>
                        <Link to="/02">
                            <Sidebar.Item href="#">Day 02</Sidebar.Item>
                        </Link>
                        <Link to="/03">
                            <Sidebar.Item href="#">Day 03</Sidebar.Item>
                        </Link>
                        <Link to="/04">
                            <Sidebar.Item href="#">Day 04</Sidebar.Item>
                        </Link>
                    </Sidebar.ItemGroup>
                </Sidebar.Items>
            </Sidebar>

            <section className="ml-4 flex w-full flex-col space-y-4 overflow-auto rounded-md text-gray-900 dark:text-white lg:flex-row lg:space-x-4 lg:space-y-0">
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="/01" element={<Day01 />} />
                </Routes>
            </section>
        </main>
    );
}
