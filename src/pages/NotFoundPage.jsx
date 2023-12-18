export default function MainContent(){
    const code = '404';
    const errorMsg = 'Resource not found';
    
    return (
        <>
            <h1>Error {code}</h1>
            <p>{errorMsg}</p>
        </>
    );
}