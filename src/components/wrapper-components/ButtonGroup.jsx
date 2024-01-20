import Proptypes from "prop-types";

const ButtonGroup = ({ children }) => {
	return (
		<div className="s6-wrapper-button-group s6-gap-1 s6-m-top-2">
			{children}
		</div>
	);
};

ButtonGroup.propTypes = {
	children: Proptypes.node.isRequired,
};

export default ButtonGroup;
