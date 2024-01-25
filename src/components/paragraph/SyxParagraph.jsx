import PropTypes from "prop-types";
import useInView from "../../hooks/useInView";
import syxutils from "../../utils/syxutils";

const SyxParagraph = ({ text }) => {
	const [isInView, elementRef] = useInView({ threshold: 0 });

	// Skip null or empty text
    if(!text) return null;
	// Skip empty arrays
	else if(syxutils.isArray(text) && !syxutils.empty(text)){
		return text.map((t, i) => <SyxParagraph key={i} text={t}/>);
	}
	// Skip if not in view
	else if(!isInView) return <div ref={elementRef}></div>;

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
	text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default SyxParagraph;
