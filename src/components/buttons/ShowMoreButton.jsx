import PropTypes from 'prop-types';

function ShowMoreButton({ actorsListTenFirst, countShow, onChangeShow, children }) {
    if (!actorsListTenFirst) return null;

    return (
        <>
            {children}
            <div className="w-full">
                {
                    (actorsListTenFirst.length > countShow) && <button
                        className="mx-auto text-amber-600 hover:text-white underline text-lg block py-2 px-4 rounded text-center"
                        onClick={() => { onChangeShow(); }}>
                        Show More
                    </button>
                }
            </div>
        </>
    );
}

ShowMoreButton.propTypes = {
    actorsListTenFirst: PropTypes.array.isRequired,
    children: PropTypes.node,
    onChangeShow: PropTypes.func.isRequired,
    countShow: PropTypes.number.isRequired,
};
export default ShowMoreButton;
