import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import getData from '../../api/getData';
import { urlImageOriginal } from '../../config/config';
import { Link } from 'react-router-dom';

import noimage from '../../assets/noimage.jpg';
import ShowMoreButton from '../buttons/ShowMoreButton';

function ActorsList({ filmId }) {
    const urlActors = `/movie/${filmId}/credits?language=en-US`;

    const [actorsList, setActorsList] = useState([]);
    const [countActors, setCountActors] = useState(10);

    useEffect(() => {

        async function getActors() {

            const data = await getData(urlActors);
            setActorsList(data.cast);
        }
        getActors();

    }, [filmId]);

    return (
        <div>
            <h2 className="text-3xl py-3 my-2 font-bold text-amber-600 text-center">Actors</h2>
            <ShowMoreButton
                actorsListTenFirst={actorsList}
                onChangeShow={() => { setCountActors(countActors + 10); }}
                countShow={countActors}
            >
                <div className="flex flex-wrap p-5 justify-center items-start">
                    {
                        actorsList.slice(0, countActors).map(
                            (actor) => {
                                return (
                                    <div key={actor.id} className="flex my-2 w-1/2 xs:w-1/3 sm:w-1/4 md:w-1/5">
                                        <Link to={`/actors/${actor.id}`} className="mx-2 my-2 ">
                                            <img src={(actor.profile_path ? urlImageOriginal + actor.profile_path : noimage)}
                                                alt={`Actors ${actor.name}`}
                                                className="rounded-lg shadow-lg object-cover object-center hover:border-white hover:border-4 h-26 aspect-square" />
                                            <p className="my-1 text-sm md:text-base bold text-amber-600 mb-1 truncate hover:text-clip hover:whitespace-normal text-ellipsis line-clamp-2 whitespace-normal">{actor.character}</p>
                                            <p className="text-sm md:text-sm hover:underline truncate hover:text-clip hover:whitespace-normal text-ellipsis line-clamp-2 whitespace-normal">{actor.name}</p>
                                        </Link>
                                    </div >
                                );
                            }
                        )
                    }
                </div>
            </ShowMoreButton>
        </div>
    );
}

ActorsList.propTypes = {
    filmId: PropTypes.number,
};
export default ActorsList;
