// import React from 'react'
import PropTypes from 'prop-types'
import { useLayoutEffect, useState } from 'react';
import PostBrille from './PostBrille';

const Post = ({img, index, generalClasses, animateEntrance = false}) => {
    const FADE_IN_MS = 150;
    const [fadeIn, setFadeIn] = useState(false);

	// make use of useEffect to call the function
	useLayoutEffect(() => {
        if(animateEntrance) setTimeout(() => setFadeIn(true), FADE_IN_MS * index);
	}, [index, animateEntrance]);


    // Define classes
    let classes = (generalClasses) ? generalClasses.join(' ') : '';
    classes += ' ' + img.extraClasses.join(' ');
    
    if(animateEntrance){
        classes += ' s6-fade-in';
        classes += (fadeIn) ? ' s6-fade-in-loaded' : ''; // <- Fade-in animation
    }

    return (
        <article key={index} className={classes}>
            <img alt={img.alt} src={img.path} />
            <PostBrille asset={img}/>
        </article>
    )
}

Post.propTypes = {
    img: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    generalClasses: PropTypes.array,
    animateEntrance: PropTypes.bool,
}

export default Post