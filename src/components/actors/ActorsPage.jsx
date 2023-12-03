import PropTypes from 'prop-types';
import { urlImageOriginal } from '../../config/config';
import { Link } from 'react-router-dom';

function ActorsPage({ actorsList }) {

    return (
        <>
            <div className="flex flex-wrap items-center relative">
                {actorsList.map(
                    (actor) => {
                        return (
                            <div key={actor.id} className="flex flex-wrap p-5 w-1/2 md:w-1/3 lg:w-1/5 items-center">
                                <Link to={`/actors/${actor.id}`} className="">
                                    <img src={`${urlImageOriginal}${actor.profile_path}`}
                                        alt={`Actor ${actor.name}`}
                                        className="rounded-lg mb-2 shadow-slate-600 shadow-lg aspect-[2/3] object-cover object-center hover:border-white hover:border-4 h-full w-full" />
                                    <h3 className="text-base text-white mb-2 hover:underline truncate">{actor.name}</h3>
                                    <p className="text-white left-0">Rating:&nbsp;
                                        <span>
                                            {Number(actor.popularity).toFixed(0)}
                                        </span>
                                    </p>
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
