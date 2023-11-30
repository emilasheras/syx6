import PropTypes from "prop-types";

export default function ItemListContainer({greeting}){
    return (
        <>
        <p>{greeting}</p>           
        </>
    )
}

ItemListContainer.propTypes = {
    greeting: PropTypes.string.isRequired,
};
