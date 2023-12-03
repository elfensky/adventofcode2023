import './App.css';
import {
    createBrowserRouter,
    RouterProvider,
    Link,
    Route,
    Routes,
} from 'react-router-dom';
//routes
import Home from './routes/Home';
import Day01 from './routes/01/content';

// 3️⃣ Router singleton created
const router = createBrowserRouter([{ path: '*', Component: Root }]);

// 4️⃣ RouterProvider added
export default function App() {
    return <RouterProvider router={router} />;
}

export function Root() {
    return (
        <main className="min-w-screen flex min-h-screen flex-grow flex-row">
            <section className="flex min-h-screen w-[15%] flex-col bg-slate-600">
                <header className="flex bg-orange-300">
                    <h1 className="m-4 w-full text-center">
                        Advent of Code 2023
                    </h1>
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
                <footer className="flex h-12 bg-blue-300">
                    <p>
                        Created by <a href="lavrenov.io">lavrenov.io</a>
                    </p>
                </footer>
            </section>
            <section className="flex flex-grow flex-col bg-slate-300">
                <article className="m-4 flex  flex-grow">
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/01" element={<Day01 />} />
                    </Routes>
                </article>
            </section>
        </main>
    );
}
