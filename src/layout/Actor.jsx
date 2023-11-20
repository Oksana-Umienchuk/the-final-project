

function Actor({ nameActor }) {

    const urlActor = `search/person?query=Jason%20Statham&include_adult=false&language=en-US&page=1`

    return (
        <h1 className="text-5xl text-white py-4">Actor</h1>
    );
}
export { Actor as Component };
export default Actor;
