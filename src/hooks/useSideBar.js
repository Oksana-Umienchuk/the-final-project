import { useState } from "react";

export default function useSidebar(defaultIsOpen = false) {
    const [isOpenSidebar, setIsOpenSidebar] = useState(defaultIsOpen);

    function toggleOpenSidebar() {
        setIsOpenSidebar(!isOpenSidebar);
    }

    return [isOpenSidebar, toggleOpenSidebar];
}
