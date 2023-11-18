import { Rating } from '@mui/material';
import PropTypes from 'prop-types';

function RatingFilm({ rating }) {
    // const roundRating = rating;
    return (
        <div className="flex flex-col items-center">
            <Rating name="customized-10" value={rating} max={10} precision={0.1} readOnly size="small" />
        </div>
    );
}

RatingFilm.propTypes = { rating: PropTypes.number };
export default RatingFilm;
