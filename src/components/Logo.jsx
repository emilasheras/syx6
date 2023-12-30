import { Link } from 'react-router-dom';
import logoImage from '../assets/images/posts/compressed/sigil-clear.png'; // Import the image

/**
 * The logo component. Sometimes it rotates and stuff.
 * @returns {string} HTML string
 */
export default function Logo() {
    console.log('logo Rendered');
    const logoAlt = "syx6 logo image";
    const logoClass = "s6-filter-brightness-75";
    
    return (
        <div className="logo-container">
            <Link to="/">
                <img src={logoImage} alt={logoAlt} className={logoClass} />
            </Link>
        </div>
    );
}