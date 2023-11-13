import { NavLink } from "react-router-dom";
import SearchField from "./SearchField";

const navClass = "mr-4 font-bold py-2 px-4 rouded";

/*створення функції для визначення класу active
*/
function getNavClasses({ isActive }) {
    return isActive ? `${navClass} nav-active` : navClass;
}

function Header() {
    return (
        <>
            <header className="header container m-auto py-1 border-b flex fixed z-10 bg-white opacity-80">
                <div className="logo p-0 align-middle h-8">
                    <h1 className="header-title text-3xl">FilmsLand</h1>
                </div>
                <nav className="menu flex gap-10 justify-center py-4">
                    <NavLink className={getNavClasses} to="/">Home</NavLink>
                    <NavLink className={getNavClasses} to="/films">Films</NavLink>
                </nav>
                <SearchField />
            </header >
        </>
    );
}

export default Header;
