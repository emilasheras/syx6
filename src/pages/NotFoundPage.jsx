const NotFoundPage = () => {
    const code = '404';
    const errorMsg = 'Resource not found';
    
    return (
        <>
            <h1>Error {code}</h1>
            <p>{errorMsg}</p>
        </>
    );
}

export default NotFoundPage;