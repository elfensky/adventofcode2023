import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//flowbite
import { Sidebar } from 'flowbite-react';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
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

const Navigation = ({ nav }) => {
    const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

    // const [navOpen, setNavOpen] = useState(false);

    const SideBarStyle = {
        height: 'calc(100vh - 2rem)',
        marginLeft: nav ? '0px' : 'calc(-250px - 1rem)',
        transition: 'margin-left 0.123s ease-in-out',
        // Add any other styles you need
    };

    return (
        <Sidebar
            aria-label="sidebar with logo branding example"
            className="w-[15%] min-w-[250px] overflow-clip rounded-lg"
            style={SideBarStyle}
        >
            <Sidebar.Logo href="#" img="logo.png" imgAlt="Unicode Xmas Tree">
                Advent of Code 2023
                <br />
                {nav ? 'OPEN' : 'CLOSED'}
            </Sidebar.Logo>
            <Sidebar.Items className="overflow-auto p-4">
                <Sidebar.ItemGroup>
                    <Link to="/">
                        <Sidebar.Item href="#">
                            <span>
                                {/* <FontAwesomeIcon icon={faEnvelope} /> */}
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
    );
};

export default Navigation;
