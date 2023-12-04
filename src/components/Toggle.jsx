import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Toggle = ({ nav, toggleNav }) => {
    return (
        //  lg:hidden
        <button
            className="fixed bottom-8 right-8 flex items-center justify-center rounded-full bg-orange-500 p-5 hover:bg-orange-300 active:bg-orange-500"
            onClick={() => toggleNav(!nav)}
        >
            <FontAwesomeIcon icon={faBars} />
        </button>
    );
};

export default Toggle;
