// import React from 'react'
import PropTypes from 'prop-types'
import PostBrille from './PostBrille';
import useInView from '../../hooks/useInView';
import getLoadingJSX from '../loading-scaffold/getLoadingJSX';
import React from 'react';

const Post = ({img, index = 1, generalClasses, animateEntrance = false, onClick}) => {
    const FADE_IN_MS = 150;
	const [isInView, elementRef] = useInView({ threshold: 0.2 });
    const showPost = (isInView || !animateEntrance);
    
    

    // Define classes
    let classes = (generalClasses) ? generalClasses.join(' ') : '';
    classes += ' ' + img.extraClasses.join(' ');
    classes = `s6-opacity-0 ${showPost ? "animate" : ""}`;
    const style = { "--item-index": index, "--fade-in-ms": FADE_IN_MS + "ms" };

    // todo: change the `img.path` to a public resource on the server (Firebase? Amplify?) 
    if(!showPost) return (
        <article ref={elementRef} key={index+img.id} >
            {getLoadingJSX()}
        </article>
    );

    return (
        <article ref={elementRef} key={index+img.id} style={style} className={classes} onClick={onClick}>
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