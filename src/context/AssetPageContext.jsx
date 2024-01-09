import { createContext, useState } from "react";
import PropTypes from 'prop-types';

export const AssetContext = createContext();

export const AssetProvider = ({ children }) => {
    const [asset, setAsset] = useState(null);
    return (
        <AssetContext.Provider value={[asset, setAsset]}>
            {children}
        </AssetContext.Provider>
    );
}

AssetProvider.propTypes = {
    children: PropTypes.node.isRequired,
}