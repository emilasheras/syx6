
/**
 * The logo component. Sometimes it rotates and stuff.
 * @returns {string} HTML string
 */
export default function Logo() {
    console.log('logo Rendered');

    const logoPath = "/src/assets/images/posts/compressed/sigil-clear.png"; // <- Relative to index.html
    const logoAlt = "syx6 logo image";
    const logoClass = "s6-filter-brightness-75";
    // const logoHref = "./../index.html"; //! old
    const logoHref = "/";
    
    return (
        <div className="logo-container">
            <a href={logoHref}>
                <img src={logoPath} alt={logoAlt} className={logoClass} />
            </a>
        </div>
    );
}