import { Pagination } from "@mui/material";

function PaginationList() {

    return (
        <Pagination className="flex justify-center" count={totalPages} onChange={(e, newPage) => {
            setPage(newPage);
        }} color="primary" />
    );
}

export default PaginationList;
