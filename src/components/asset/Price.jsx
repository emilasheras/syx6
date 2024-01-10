import PropTypes from 'prop-types';

const Price = ({price}) => {
  return (
    <div>
        <p className="s6-p-bold">Price: {price}</p>
    </div>
  )
}

Price.propTypes = {
    price: PropTypes.number.isRequired
};

export default Price