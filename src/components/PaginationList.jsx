import { Pagination } from "@mui/material";
import PropTypes from 'prop-types';

function PaginationList({ totalPages, setPage }) {

    return (
        <Pagination
            className="flex justify-center"
            sx={{
                '.MuiButtonBase-root': {
                    color: 'white',
                    backgroundColor: 'rgba(251 191 36 .4)',
                },
                '.MuiButtonBase-root:hover': {
                    color: 'white',
                    backgroundColor: 'rgba(251 191 36, .2)',
                },
                '.Mui-selected': {
                    backgroundColor: 'rgba(251 191 36, .3) !important',
                    // pointerEvents: 'none',
                    color: 'rgb(8 51 68)',
                },
                '.Mui-selected:hover': {
                    backgroundColor: 'rgb(251 191 36)',
                },
                '.MuiPagination-ul': {
                    gap: '10px'
                }
            }}
            count={totalPages} onChange={(e, newPage) => {
                setPage(newPage);
            }} />
    );

}

PaginationList.propTypes = { totalPages: PropTypes.number, setPage: PropTypes.func };

export default PaginationList;
