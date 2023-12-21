import { Link } from "react-router-dom";

export default function MainContent(){
	
    return (
		<section className="s6-layout-fluid">
			<section className="row text-center">
				<article className="col-12 s6-link-nexus-container">
					<Link to="https://instagram.com/ttemple_syx6/" target="_blank" className="s6-btn-link s6-encapsulator-double">Instagram</Link>
					<Link to="https://ko-fi.com/ttsyx6" target="_blank" className="s6-btn-link s6-encapsulator-double">Ko-Fi</Link>
					<Link to="https://paypal.com/paypalme/syx6pp" target="_blank" className="s6-btn-link s6-encapsulator-double">PayPal</Link>
					<Link to="https://github.com/emilasheras/" target="_blank" className="s6-btn-link s6-encapsulator-double">GitHub</Link>
					<Link to="https://twitter.com/lhs_emi" target="_blank" className="s6-btn-link s6-encapsulator-double">Twitter</Link>
				</article>
			</section>
		</section>
    ); 
}

// https://printful.com
// https://twitter.com/