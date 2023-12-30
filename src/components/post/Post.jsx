// import React from 'react'
import PropTypes from 'prop-types'
import { useLayoutEffect, useState } from 'react';
import PostBrille from './PostBrille';

const Post = ({img, index = 1, generalClasses, animateEntrance = false, onClick}) => {
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

    
    // todo: add a loading animation for the images

    //! currently doesnt work in production. Vite doesnt translate the paths inside my json files, sadly.
    // todo: change the `img.path` to a public resource on the server (Firebase? Amplify?) 
    return (
        <article key={index+img.id} className={classes} onClick={onClick}>
            <img alt={img.alt} src={img.path} />
            <PostBrille asset={img}/>
        </article>
    )
}

Post.propTypes = {
    img: PropTypes.object.isRequired,
    index: PropTypes.number,
    generalClasses: PropTypes.array,
    animateEntrance: PropTypes.bool,
    onClick: PropTypes.func,
}

export default Post