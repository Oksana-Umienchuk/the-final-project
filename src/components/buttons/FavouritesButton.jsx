
import { Button } from '@mui/material';
import PropTypes from 'prop-types';

function FavouritesButton({ isFavourite, onClick }) {

    return (
        <Button onClick={onClick}
            className=" hover:amber-400 focus: group rounded-lg bg-concrete-100">
            <svg
                fill={isFavourite ? `gold` : `white`}
                className="h-9 w-9 drop-shadow-md fill-concrete-100 stroke-silver-500 group-hover:stroke-white" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6659 7.53302C25.1074 6.95645 24.4443 6.49907 23.7145 6.18702C22.9846 5.87497 22.2023 5.71436 21.4123 5.71436C20.6223 5.71436 19.84 5.87497 19.1101 6.18702C18.3803 6.49907 17.7172 6.95645 17.1587 7.53302L15.9996 8.72904L14.8405 7.53302C13.7123 6.36893 12.1823 5.71496 10.5868 5.71496C8.99142 5.71496 7.46134 6.36893 6.3332 7.53302C5.20507 8.6971 4.57129 10.2759 4.57129 11.9222C4.57129 13.5685 5.20507 15.1473 6.3332 16.3114L7.49229 17.5074L15.9996 26.2858L24.5068 17.5074L25.6659 16.3114C26.2247 15.7351 26.6679 15.0508 26.9704 14.2977C27.2728 13.5446 27.4284 12.7374 27.4284 11.9222C27.4284 11.107 27.2728 10.2998 26.9704 9.54668C26.6679 8.79357 26.2247 8.10932 25.6659 7.53302V7.53302Z"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke="rgb(217 119 6)"
                >
                </path>
            </svg>
        </Button >
    );
}

FavouritesButton.propTypes = {
    isFavourite: PropTypes.bool,
    onClick: PropTypes.func
};
export default FavouritesButton;
