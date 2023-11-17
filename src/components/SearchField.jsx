import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { TextField } from '@mui/material';

function SearchField() {
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    function searchHandler(e) {
        e.preventDefault();

        navigate(`/search?search=${searchValue}`);
        console.log(`/search?search=${searchValue}`);
    }

    return (
        <form method="get" onSubmit={searchHandler} action="search" className="">
            <TextField
                size="small"
                label="Search"
                InputProps={{ className: 'overflow-hidden' }}
                value={searchValue}
                onChange={(e) => { setSearchValue(e.target.value); }}
                name="search"
                variant="outlined"
                color="warning" />
            <button type="submit" className="p-3 text-sm z-1 relative font-medium text-white  rounded-r-lg hover:bg-amber-400 hover:cyan-950 focus:ring-4 focus:outline-none focus:bg-amber-400">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>
    );
}

export default SearchField;
