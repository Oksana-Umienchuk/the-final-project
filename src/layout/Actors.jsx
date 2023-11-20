import { useEffect, useState } from "react";

// import { urlActorsListPage } from "../config/config";

import ActorsPage from "../components/actors/ActorsPage";
import PaginationList from "../components/PaginationList";

import getData from "../api/getData";

function Actors() {

    const [actorsList, setActorsList] = useState([]);
    const [page, setPage] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const urlActorsListPage = `/person/popular?language=en-US&page=${page}`;

    useEffect(() => {

        async function getActors() {

            const data = await getData(urlActorsListPage);
            if (!data.results) return;

            setActorsList(data.results);
            setTotalPages(Number(data.total_pages) > 500 ? 500 : Number(data.total_pages));
        }

        if (!actorsList.length || page !== currentPage) {
            getActors();
            setCurrentPage(page);
        }

    }, [page, currentPage]);

    return (
        <>
            <h1 className="text-5xl text-white py-4">Actors</h1>
            <ActorsPage actorsList={actorsList} />
            <div>
                <PaginationList totalPages={totalPages} setPage={setPage} />
            </div>
        </>
    );
}
export { Actors as Component };
export default Actors;
