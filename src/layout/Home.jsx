import { Slider } from "../components/Slider";
import slides from "../swiperList.json";

function Home() {

    return (
        <>
            <h1 className="text-5xl text-zinc-950 py-4">Home</h1>
            <Slider slides={slides} />
        </>
    );
}

export { Home as Component };
export default Home;
