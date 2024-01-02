import PropTypes from "prop-types";
import useInView from "../../hooks/useInView";

const SyxParagraph = ({ text }) => {
	const [isInView, elementRef] = useInView({ threshold: 1 });

    if(!text) return null;

	const characters = text.split("").map((char, index) => ({
		char,
		key: `char_${index}`,
		style: isInView ? { "--char-index": index } : {},
	}));

	return (
		<div ref={elementRef}>
			{characters.map(({ char, style, key }) => (
				<span
					key={key}
					style={style}
					className={`character ${isInView ? "animate" : ""}`}
				>
					{char}
				</span>
			))}
		</div>
	);
};

SyxParagraph.propTypes = {
	text: PropTypes.string.isRequired,
};

export default SyxParagraph;
