import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { TextField } from '@mui/material';

function SearchField() {
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    function searchHandler(e) {
        e.preventDefault();

        navigate(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&include_adult=false&language=en-US&page=1`);
    }

    return (
        <form method="get" onSubmit={searchHandler} action="search">
            <TextField
                size="small"
                label="Search"
                InputProps={{ className: 'overflow-hidden' }}
                value={searchValue}
                onChange={(e) => { setSearchValue(e.target.value); }}
                name="search"
                variant="outlined" />
            <button type="submit" className="p-3 text-sm ml-[-5px] z-1 relative font-medium h-full text-white bg-blue-800 rounded-r-lg border border-bg-blue-800 hover:bg-blue-900 hover:shadow-slate-600 focus:ring-4 focus:outline-none focus:bg-blue-900">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>
    );
}

export default SearchField;
