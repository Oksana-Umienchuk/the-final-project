import { NavLink } from "react-router-dom";

const navClass = "mr-4 text-cyan-950 font-bold py-2 px-4 rouded hover:underline";

function getNavClasses({ isActive }) {
    return isActive ? `${navClass} nav-active` : navClass;
}

function Menu() {
    return (
        <>
            <nav className="flex flex-col mt-10 md:flex-row md:m-0">
                <NavLink className={getNavClasses} to="/">Home</NavLink>
                <NavLink className={getNavClasses} to="/films">Films</NavLink>
                <NavLink className={getNavClasses} to="/actors">Actors</NavLink>
                <NavLink className={getNavClasses} to="/favourites">Favourites</NavLink>
            </nav>
        </>
    );
}

export default Menu;
