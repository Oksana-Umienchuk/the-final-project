import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getData from "../api/getData";
import { urlImage } from "../config/config";
// import ImagesList from "../components/actors/imagesActors/ImagesList";
import useFavorites from "../hooks/useFavorites";
import FilmList from "../components/FilmList";
import SliderActorsImagesList from "../components/Sliders/SliderActorsImagesList";

function Actor() {
    const paramsActorPage = useParams();
    const urlActor = `/person/${paramsActorPage.id}?language=en-US`;
    const urlActorImages = `/person/${paramsActorPage.id}/images`;
    const urlActorFilms = `/person/${paramsActorPage.id}/movie_credits?language=en-US`;

    const [actorFile, setActorFile] = useState({});
    const [actorImage, setActorImage] = useState([]);
    const [actorVideo, setActorVideo] = useState([]);

    useEffect(() => {

        async function getActorFile() {

            const data = await getData(urlActor);

            if (!data) return;
            setActorFile(data);
        }

        getActorFile();

        async function getActorImage() {

            const dataImage = await getData(urlActorImages);

            if (!dataImage) return;
            setActorImage(dataImage.profiles);
        }

        getActorImage();

        async function getActorFilms() {

            const dataFilms = await getData(urlActorFilms);

            if (!dataFilms) return;
            setActorVideo(dataFilms.cast);
        }

        getActorFilms();

    }, [paramsActorPage]);

    const [, favoritesIdList, addToFavorites] = useFavorites();

    return (
        <>
            <h1 className="text-5xl text-cyan-950 py-4">Actor</h1>
            <div className="max-w-[1100px] mx-auto">
                <h2 className="text-4xl py-3 my-2 font-bold text-amber-600 text-left">{actorFile.name}</h2>

                <div
                    className="flex gap-5 bg-gray-900/80 p-5 rounded-md">
                    <img
                        src={`${urlImage}${actorFile.profile_path}`}
                        alt="Poster"
                        className="object-cover rounded-md h-[32rem]" />
                    <div>
                        <p className="text-left text-amber-600 mr-2 font-bold">{'Birthday:' + ' '}
                            <span className="text-white font-normal">{actorFile.birthday}</span>
                        </p>
                        <p className="py-3 my-2 text-left text-amber-600 mr-2 font-bold">{'Place of birth:' + ' '}
                            <span className="text-white font-normal">{actorFile.place_of_birth}</span>
                        </p>
                        <p className="text-left text-white">{actorFile.biography}</p>
                    </div>
                </div>

                <div className="bg-gray-900/80 p-5 rounded-md my-4">
                    <h2
                        className="text-3xl py-3 my-2 font-bold text-amber-600 text-center"
                    >Images</h2>
                    <SliderActorsImagesList actorImage={actorImage} />
                </div>

                <div className="bg-gray-900/80 p-5 rounded-md my-4">
                    <h2 className="text-3xl py-3 my-2 font-bold text-amber-600 text-center">Films</h2>
                    <FilmList filmList={actorVideo}
                        addToFavorites={addToFavorites}
                        favoritesIdList={favoritesIdList} />
                </div>
            </div>
        </>
    );
}
export { Actor as Component };
export default Actor;
