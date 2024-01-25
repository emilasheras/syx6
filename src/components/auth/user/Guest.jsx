import { Link } from 'react-router-dom';
import SyxParagraph from '../../paragraph/SyxParagraph'

const Guest = () => {
    const defaultMessage = 'Guest User'
    return (
        <>
            <SyxParagraph text={defaultMessage}/>
            <Link to='/auth/login'><button>Log In</button></Link>
        </>
    );
}

export default Guest