import "./App.css";
import {
    createBrowserRouter,
    RouterProvider,
    Link,
    Route,
    Routes,
} from "react-router-dom";
//pages
import Home from "./pages/Home";
import Day01 from "./pages/01/01";

// 3️⃣ Router singleton created
const router = createBrowserRouter([{ path: "*", Component: Root }]);

// 4️⃣ RouterProvider added
export default function App() {
    return <RouterProvider router={router} />;
}

export function Root() {
    return (
        <main className="min-w-screen flex min-h-screen flex-grow flex-row">
            <nav className="flex min-h-screen w-[15%] flex-col bg-slate-600">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/01">Day 01</Link>
                    </li>
                    <li>{/* <Link to='/02'>Day 02</Link> */}</li>
                </ul>
            </nav>
            <section className="flex flex-grow flex-col bg-slate-300">
                {/* <header className='flex h-12 bg-orange-300'>
                    <h1>Advent of Code 2023</h1>
                </header> */}
                <article className="margin-4 flex flex-grow">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/01" element={<Day01 />} />
                    </Routes>
                </article>
                {/* <footer className='flex h-12 bg-blue-300'>
                    <p>Created by <a href="lavrenov.io">lavrenov.io</a></p>
                </footer> */}
            </section>
        </main>
    );
}
