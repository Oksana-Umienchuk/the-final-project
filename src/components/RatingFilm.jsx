import { Rating } from '@mui/material';

function RatingFilm({ rating }) {
    const roundRating = Math.round(rating);
    return (
        <Rating name="customized-10" value={rating} max={10} precision={0.1} readOnly size="small" />
    );
}

export default RatingFilm;
