import urlDataNavbar from '../../data/s6-url-data.js';
import { encapsulator, navbarLink, navbarUnorderedList } from '../../data/s6-styles.js';
import { Link } from 'react-router-dom';


/**
 * The links component with all the urls and abbreviations.
 * @returns {string} HTML string
 */
export default function Links() {
    console.log('Links Rendered');

    const getHref = (name) => {
        let href = '/';
        urlDataNavbar.forEach(link => {
            if (link.name === name) {
                href = link.subdirectory+link.path;
            }
        });
        return href;
    }    

    const listItems = urlDataNavbar.map(link => {
        return (
            <li key={link.name} className={navbarLink}>
                <Link to={getHref(link.name)} className={encapsulator}>{link.abbreviation}</Link>
            </li>
        );
    });
    
    return (
        <ul className={navbarUnorderedList}>
            {listItems}
        </ul>
    );
}