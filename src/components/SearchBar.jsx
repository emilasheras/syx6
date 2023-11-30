
//todo: Finish implementing the searchbar

export default function SearchBar() {
    console.log('SearchBar Rendered');
    return (
        <>
        <section className="row">
            <div className="col-12">
                <div className="section-seachbar">
                    <div className="searchbar-container">
                        <span className="material-symbols-outlined search-icon">Search</span>
                        <input type="text" placeholder="search [title]..." />
                        {/* <!-- here should be a badge that suggest the hotkey for the searchbar --> */}
                        <span className="badge s6-bg-accent">CTRL K</span>
                    </div>
                </div>
            </div>
        </section>
        <hr/>
        </>
    )
}