export default function MainContent(){
	// todo: make everything be inside a single section component
	// todo: change static content to dynamic content

    return (
		<section className="s6-layout-fluid">
			<section className="s6-layout-fluid">
				<div className="row">
					<div className="col-12 text-center">
						<h1>Gallery</h1>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-11 text-center">
						<p>
							I tore myself away from the captivating embrace of heart, heavy with both wonder and
							trepidation. Art and emotion merged. Code dissolved into one enigmatic tapestry
						</p>
					</div>
				</div>

			</section>
			<hr />
			<section>
				{/* <!-- in order: default, small, medium, large, extra-large --> */}
				<div className="gallery">
					<slot />
				</div>
			</section>
		</section>
    );
}
