import ProfileWidget from '../auth/user/ProfileWidget';
import FlashPipeline from '../message-pipeline/Main';
import SearchBar from '../searchbar/Default';

const HorizontalNavBar = () => {
    
    return (
        <section className="row sticky-top section-searchbar s6-no-margin">
            <div className="col-4 s6-no-padding"><ProfileWidget /></div>
            <div className="col-4 s6-no-padding"><SearchBar/></div>
            <div className="col-4 s6-no-padding"><FlashPipeline/></div>
        </section>
    )
}

export default HorizontalNavBar;