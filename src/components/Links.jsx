import { urlDataNavbar } from '../data/s6-url-data.js';
import { encapsulator, navbarLink, navbarUnorderedList } from '../data/s6-styles.js';


/**
 * The links component with all the urls and abbreviations.
 * @returns {string} HTML string
 */
export default function Links() {
    console.log('Links Rendered');

    const getHref = (name) => {
        //example href let href = link.relPath+link.url;
        let href = '/';
        urlDataNavbar.forEach(link => {
            if (link.name === name) {
                href = link.relPath+link.url;
            }
        });
        return href;
    }    

    const listItems = urlDataNavbar.map(link => {
        return (
            <li key={link.name} className={navbarLink}>
                <a href={getHref(link.name)} className={encapsulator}>{link.abbreviation}</a>
            </li>
        );
    });
    
    return (
        <ul className={navbarUnorderedList}>
            {listItems}
        </ul>
    );
}