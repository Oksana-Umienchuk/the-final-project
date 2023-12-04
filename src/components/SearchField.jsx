import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { TextField } from '@mui/material';

function SearchField() {
    const [searchValue, setSearchValue] = useState('');

    const navigate = useNavigate();

    function searchHandler(e) {
        e.preventDefault();

        navigate(`/search?search=${searchValue}`);
    }

    return (
        <form method="get" onSubmit={searchHandler} action="search" className="border-amber-600 flex flex-nowrap">
            <TextField
                size="small"
                label="Search"
                InputProps={{ className: 'overflow-hidden' }}
                value={searchValue}
                onChange={(e) => { setSearchValue(e.target.value); }}
                name="search"
                variant="outlined"
                color="warning"
                InputProps={{
                    className: 'overflow-hidden',
                    inputProps: {
                        autoComplete: 'off' // Добавляем атрибут autocomplete="off" сюда
                    }
                }}
            />
            <button type="submit"
                className="p-3 text-sm z-1 relative font-medium text-cyan-950 rounded-r-lg hover:bg-amber-600 focus:ring-4 focus:outline-none focus:bg-amber-700">
                <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span className="sr-only text-amber-600">Search</span>
            </button>
        </form>
    );
}

export default SearchField;
