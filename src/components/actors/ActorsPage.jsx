import PropTypes from 'prop-types';
import { urlImageOriginal } from '../../config/config';
import { Link } from 'react-router-dom';

function ActorsPage({ actorsList }) {

    return (
        <>
            <div className="flex flex-wrap items-start relative">
                {actorsList.map(
                    (actor) => {
                        return (
                            <div key={actor.id} className="relative w-1/5 flex justify-center items-center">
                                <Link to={`/actors/${actor.id}`} className="mx-2 my-3">
                                    <h3 className="text-base text-white mb-2 hover:underline truncate">{actor.name}</h3>
                                    <img src={`${urlImageOriginal}${actor.profile_path}`}
                                        alt={`Actor ${actor.name}`}
                                        className="rounded-lg shadow-lg object-cover object-center hover:border-white hover:border-4" />
                                    <h4 className="text-base text-white mb-2 hover:underline">{actor.character}</h4>
                                </Link>
                            </div >
                        );
                    }
                )}
            </div >
        </>
    );
}

ActorsPage.propTypes = { actorsList: PropTypes.array };
export default ActorsPage;
