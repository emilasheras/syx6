import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import useFetchFirestore from "../hooks/useFetchFirebase";

export const GlrPageContext = createContext();

export const GlrPageProvider = ({ children }) => {
    const defaultFilterValue = "No Selection";
	const [selectedCategory, setSelectedCategory] = useState(defaultFilterValue);
	const [isFilterEnabled, setIsFilterEnabled] = useState(false);
    const {
		data, // <-- the QuerySnapshot
        // setData: setAssets,
		isLoading,
		error,
	} = useFetchFirestore({ collection: "assets" }); //todo: add query for id?

	// Vars
	const assets = data?.docs.map((doc) => {
		return {
			...doc.data(),
			id: doc.id,
		};
	});

    useEffect(() => {
        const updateFilter = () => {
            setIsFilterEnabled(selectedCategory !== defaultFilterValue);
        }
        updateFilter();
    }, [selectedCategory]);



	const generalClasses = ["s6-post-image","s6-filter-brightness-75","rounded-3"];

    const contextVars = {
        assets,
        // setAssets,
        isLoading,
        error,
        generalClasses,
        defaultFilterValue,
        isFilterEnabled,
        selectedCategory,
        setSelectedCategory,
    };
    return (
        <GlrPageContext.Provider value={ contextVars }>
            {children}
        </GlrPageContext.Provider>
    );
}

GlrPageProvider.propTypes = {
    children: PropTypes.node.isRequired,
}