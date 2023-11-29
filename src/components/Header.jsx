import { NavLink } from "react-router-dom";
import SearchField from "./SearchField";

const navClass = "mr-4 text-cyan-950 font-bold py-2 px-4 rouded ";

/*створення функції для визначення класу active
*/
function getNavClasses({ isActive }) {
    return isActive ? `${navClass} nav-active` : navClass;
}

function Header() {
    return (
        <>
            <header className="header m-auto py-1 border-b flex fixed z-50 bg-slate-100/75 left-0 right-0 w-screen p-10">
                <div className="flex justify-between items-center w-screen">
                    <nav className="menu flex justify-center py-4 ">
                        <NavLink className={getNavClasses} to="/">Home</NavLink>
                        <NavLink className={getNavClasses} to="/films">Films</NavLink>
                        <NavLink className={getNavClasses} to="/actors">Actors</NavLink>
                        <NavLink className={getNavClasses} to="/favourites">Favourites</NavLink>
                    </nav>
                    <SearchField />
                </div>
            </header >
        </>
    );
}

export default Header;
