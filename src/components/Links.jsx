import { urlDataNavbar } from '/src/data/s6-url-data.js';
import { encapsulator } from '/src/data/s6-styles.js';


/**
 * The links component with all the urls and abbreviations.
 * @returns {string} HTML string
 */
export default function Links() {
    console.log('Links Rendered');

    const getHref = (name) => {
        //example href let href = link.relPath+link.url;
        let href = '';
        urlDataNavbar.forEach(link => {
            if (link.name === name) {
                href = link.relPath+link.url;
            }
        });
        return href;
    }    

    const listItems = urlDataNavbar.map(link => {
        return (
            <li key={link.name}>
                <a href={getHref(link.name)} className={encapsulator}>{link.abbreviation}</a>
            </li>
        );
    });
    
    return (
        <ul>
            {listItems}
        </ul>
    );
}