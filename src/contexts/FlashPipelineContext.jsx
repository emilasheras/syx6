import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

export const FlashPipelineContext = createContext();

const flashReducer = (state, action) => {
	switch (action.type) {
		case "ADD":
			return [...state, action.payload];
		case "CLEAR":
			return [...state.slice(1)];
		default:
			return state;
	}
};

export const FlashPipelineProvider = ({ children }) => {
	const [flash, dispatch] = useReducer(flashReducer, []);
	// const CLEAR_DELAY_SECONDS = 3;
    
    
	useEffect(() => {
        // Clear the flash after a delay
        const clearFlash = () => {
			if (flash.length > 0) {
				// todo: handle better
                // setTimeout(() => {
                //     console.log('clearing flash pipeline');
                //     dispatch({ type: "CLEAR" });
                // }, CLEAR_DELAY_SECONDS * 1000);
            }
        }
        clearFlash();
	}, [flash]);

	const addFlash = (newFlash, prependTimestamp = false) => {
		// Prepend timestamp if requested
        if (prependTimestamp) newFlash = new Date().toLocaleTimeString() + ": " + newFlash;

        // Add the flash to the pipeline
		dispatch({ type: "ADD", payload: newFlash });
	};

	const contextVars = {
		flash,
		setFlash: addFlash,
	};

	return (
		<FlashPipelineContext.Provider value={contextVars}>
			{children}
		</FlashPipelineContext.Provider>
	);
};

FlashPipelineProvider.propTypes = {
	children: PropTypes.node.isRequired,
};
