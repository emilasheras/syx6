import PropTypes from "prop-types";
import useInView from "../../hooks/useInView";

const SyxHeading = ({ text }) => {
	const [isInView, elementRef] = useInView({ threshold: 1 });

	return (
		<h2 ref={elementRef} className={`s6-opacity-0 ${isInView ? "animate" : ""}`}>
			{text}
		</h2>
	);
};
// className={`character ${isInView ? "animate" : ""}`}

SyxHeading.propTypes = {
	text: PropTypes.string.isRequired,
};

export default SyxHeading;
