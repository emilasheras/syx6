import PropTypes from 'prop-types';

//todo: add a cool rating system of 6 `starts` or whatever
//todo: the stars should be clickable and should be able to change the rating (logged users only!)

const Rating = ({rating}) => {
    return (
        <div>
                <p className="s6-p-bold">Rating: {rating}</p>
        </div>
    )
}

Rating.propTypes = {
    rating: PropTypes.number.isRequired
};

export default Rating