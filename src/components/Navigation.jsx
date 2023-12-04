import { useEffect } from 'react';
import { Link } from 'react-router-dom';
//components
import useWindowSize from './WindowSize';
//flowbite
import { DarkThemeToggle, Sidebar } from 'flowbite-react';
//icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHome,
    faTree,
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

const Navigation = ({ nav, toggleNav }) => {
    const [width, height] = useWindowSize();

    useEffect(() => {
        if (width > 1024) {
            toggleNav(true);
        } else {
            toggleNav(false);
        }
    }, [width, height, toggleNav]);

    const SideBarStyle = {
        height: 'calc(100vh - 2rem)',
        marginLeft: nav ? '0px' : 'calc(-250px - 2rem)',
        transition: 'margin-left 0.123s ease-in-out',
        // Add any other styles you need
    };

    return (
        <Sidebar
            aria-label="sidebar with logo branding example"
            className="fixed w-[16rem] min-w-[250px] overflow-hidden rounded-lg dark:bg-gray-800"
            style={SideBarStyle}
        >
            <Sidebar.Logo
                href="https://adventofcode.com"
                className="flex items-center justify-center rounded-md bg-gray-300 p-4 dark:bg-gray-700 "
            >
                <FontAwesomeIcon icon={faTree} className="mr-2" />
                Advent of Code 2023
            </Sidebar.Logo>

            <Sidebar.Items className="flex-grow overflow-auto p-4">
                <Sidebar.ItemGroup>
                    <Sidebar.Item
                        as={Link}
                        to="/"
                        className="text-gray-900 hover:bg-orange-600 hover:dark:text-white"
                    >
                        <span className="mr-2 space-x-[0.1rem]">
                            <FontAwesomeIcon icon={faHome} />
                        </span>
                        Home
                    </Sidebar.Item>

                    <Sidebar.Item
                        as={Link}
                        to="/01"
                        className="text-gray-900 hover:bg-orange-600 hover:dark:text-white"
                    >
                        <span className="space-x-[0.1rem] ">
                            <FontAwesomeIcon icon={fa0} />
                            <FontAwesomeIcon icon={fa1} />
                        </span>
                        <span className="mx-1">-</span>
                        Trebuchet?!
                    </Sidebar.Item>

                    <Sidebar.Item
                        as={Link}
                        to="/02"
                        className="text-gray-900 hover:bg-orange-600 hover:dark:text-white"
                    >
                        <span className="space-x-[0.1rem]">
                            <FontAwesomeIcon icon={fa0} />
                            <FontAwesomeIcon icon={fa2} />
                        </span>
                        <span className="mx-1">-</span>
                        Cube Conundrum
                    </Sidebar.Item>

                    <Sidebar.Item
                        as={Link}
                        to="/03"
                        className="text-gray-900 hover:bg-orange-600 hover:dark:text-white"
                    >
                        <span className="space-x-[0.1rem]">
                            <FontAwesomeIcon icon={fa0} />
                            <FontAwesomeIcon icon={fa3} />
                        </span>
                        <span className="mx-1">-</span>
                        Gear Ratios
                    </Sidebar.Item>

                    <Sidebar.Item
                        as={Link}
                        to="/04"
                        className="text-gray-900 hover:bg-orange-600 hover:dark:text-white"
                    >
                        <span className="space-x-[0.1rem]">
                            <FontAwesomeIcon icon={fa0} />
                            <FontAwesomeIcon icon={fa4} />
                        </span>
                        <span className="mx-1">-</span>
                        Scratchcards
                    </Sidebar.Item>
                </Sidebar.ItemGroup>
                {/* <Sidebar.ItemGroup>
                    <Sidebar.Item>
                        <DarkThemeToggle />
                    </Sidebar.Item>
                </Sidebar.ItemGroup> */}
            </Sidebar.Items>
        </Sidebar>
    );
};

export default Navigation;
