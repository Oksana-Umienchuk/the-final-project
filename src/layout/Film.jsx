import { useParams } from "react-router-dom";

function Film() {

    const params = useParams();
    console.log(params);

    return (
        <>
            <h1 className="text-5xl text-zinc-950 py-4">Film</h1>
            <p>{params.id}</p>
        </>
    );
}

export { Film as Component };
export default Film;
