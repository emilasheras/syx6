const getLoadingJSX = (type = 'text') => {
    // todo: change for match or switch statements
    if(type=='text')return <p>Loading...</p>;
    // if(type=='spinner')return <div className="spinner"></div>;
    // if(type=='image-ghost')return <img src="/src/images/ghost.png" alt="loading..."/>;
}
export default getLoadingJSX;