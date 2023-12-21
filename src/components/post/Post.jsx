// import React from 'react'
import PropTypes from 'prop-types'
import { useLayoutEffect, useState } from 'react';
import syxlog from '../../utils/syxlog';

const Post = ({img, index, generalClasses}) => {
    const [fadeIn, setFadeIn] = useState(false);

	// make use of useEffect to call the function
	useLayoutEffect(() => {
		syxlog.debug(`[Call] useLayoutEffect() index: ${index}`); // todo: remove
		const FADE_IN_MS = 250;
        setTimeout(() => {
            setFadeIn(true);
        }, FADE_IN_MS * index);
	}, [index]);


    // Define classes
    let classes = (generalClasses) ? generalClasses.join(' ') : '';
    classes += ' ' + img.extraClasses.join(' ');
    classes += (fadeIn) ? ' s6-fade-in-loaded' : '';

    return <img key={index} alt={img.alt} src={img.path} className={classes}/>
}

Post.propTypes = {
    img: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    generalClasses: PropTypes.array,
}

export default Post