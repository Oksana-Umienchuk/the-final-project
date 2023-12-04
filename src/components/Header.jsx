import SearchField from "./SearchField";
import Menu from "./Menu";

import { useMediaQuery } from "@mui/material";
import { FiMenu, FiX } from "react-icons/fi";
import Sidebar from "./SideBar";
import useSidebar from "../hooks/useSideBar";

function Header() {

    const matches = useMediaQuery('(min-width:768px)');
    const [isOpenSidebar, toggleOpenSidebar] = useSidebar();

    return (
        <>
            <header className="m-auto py-1 px-3 border-b flex justify-between fixed z-50 bg-slate-100/75 left-0 right-0 w-screen">
                {
                    matches ?
                        null :
                        <button
                            onClick={toggleOpenSidebar}
                        >
                            <FiMenu size={26} />
                        </button>
                }
                {
                    matches ?
                        <Menu /> :
                        <Sidebar isOpen={isOpenSidebar}
                            closeIcon={< FiX size={26} />}
                            className={'border-r py-4 px-6 bg-slate-100/75 z-50 w-[175px]'}
                            type='left'
                            toggleOpenSidebar={toggleOpenSidebar}
                        >
                            <Menu />
                        </Sidebar>
                }
                <SearchField />
            </header >
        </>
    );
}

export default Header;
