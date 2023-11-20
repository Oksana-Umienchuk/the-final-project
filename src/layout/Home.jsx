import Slider from "../components/home/Slider";
import SliderTrending from "../components/home/SliderTrending";

import { urlTrendingDay, urlTrendingWeek } from '../config/config';

function Home() {

    return (
        <div className="pb-5">
            <Slider />
            <div className="container mx-auto py-4">
                <h2 className="text-2xl text-amber-600 py-4 font-bold p-4">The Most Trending A Day</h2>
                <SliderTrending url={urlTrendingDay} />
            </div>
            <div className="container mx-auto">
                <h2 className="text-2xl text-amber-600 py-4 font-bold">The Most Trending A Week</h2>
                <SliderTrending url={urlTrendingWeek} />
            </div>
        </div>
    );
}

export { Home as Component };
export default Home;
