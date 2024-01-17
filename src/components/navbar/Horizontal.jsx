import ProfileWidget from '../auth/user/ProfileWidget';
import SearchBar from '../searchbar/Default';

const HorizontalNavBar = () => {
    
    return (
        <section className="row sticky-top section-seachbar s6-no-margin">
            <div className='col-4'><ProfileWidget /></div>
            <div className="col-4"><SearchBar/></div>
            <div className='col-4'></div>
            {/* <hr className='s6-no-margin' /> */}
        </section>
    )
}

export default HorizontalNavBar;