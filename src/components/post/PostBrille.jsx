// import React from 'react'
import PropTypes from 'prop-types'

/**
 * PostBrille - This component is a placeholder for the `brille` that appears when hovering over a gallery image.
 * @read https://en.wikipedia.org/wiki/Brille
 * @param {object} asset - Currently is the img object from the gallery-image-data.json file.
 * @returns {JSX.Element} - A React component superimposed over the gallery image with essential information about the image.
 */
function PostBrille({asset}) {
    return (
        <div className='s6-post-brille'>
            <div className='status'>{asset.status}</div>
            <div className='categories'>{asset.categories}</div>
            <div className='title'>{asset.title}</div>
            <div className='description'>{asset.description}</div>
        </div>
    );
}

PostBrille.propTypes = {
    asset: PropTypes.object.isRequired,
}

export default PostBrille
