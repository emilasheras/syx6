import PageHeader from "../components/page-heading/Default";
// todo: finish implementation
export default function MainContent(){
	const title = "Shop";
	const extraMessage = "Digital Assets and Merchandise"
    return (
		<section className="s6-layout-fluid">
			<section className="row">
				<div className="col text-center">
					<PageHeader title={title} extraMessage={extraMessage}/>
					<div className="row justify-content-center">
						<div className="col-12 col-sm-8 col-xl-6 pb-3 pt-3">
	
							<div id="carouselPrimary" className="carousel slide" data-bs-ride="carousel">
								<div className="carousel-inner justify-content-center">
									<div className="carousel-item w-10 active" data-bs-interval="4000">
										<img alt="article image" className="s6-filter-brightness-75 rounded-5"
											src="/src/assets/images/posts/compressed/Syx6Insignia.png" />
									</div>
									<div className="carousel-item w-10" data-bs-interval="4000">
										<img alt="article image" className="s6-filter-brightness-75 rounded-5"
											src="/src/assets/images/posts/compressed/Syx6Insignia.png" />
									</div>
									<div className="carousel-item w-10" data-bs-interval="4000">
										<img alt="article image" className="s6-filter-brightness-75 rounded-5"
											src="/src/assets/images/posts/compressed/Syx6Insignia.png" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="row justify-content-center m-auto">
				<div className="row rounded-3 s6-secondary-content justify-content-center">
					<div className="col-12 p-2">
						<div className="row row-cols-5 g-1 g-sm-3 g-md-5">
							<article className="col">
								<div className="s6-img-container">
									<img alt="article image" src="/src/assets/images/posts/compressed/Syx6Insignia.png" className="s6-filter-brightness-75 rounded-2"/>
								</div>
							</article>
							<article className="col">
								<div className="s6-img-container">
									<img alt="article image" src="/src/assets/images/posts/compressed/Syx6Insignia.png" className="s6-filter-brightness-75 rounded-2"/>
								</div>
							</article>
							<article className="col">
								<div className="s6-img-container">
									<img alt="article image" src="/src/assets/images/posts/compressed/Syx6Insignia.png" className="s6-filter-brightness-75 rounded-2"/>
								</div>
							</article>
							<article className="col">
								<div className="s6-img-container">
									<img alt="article image" src="/src/assets/images/posts/compressed/Syx6Insignia.png" className="s6-filter-brightness-75 rounded-2"/>
								</div>
							</article>
							<article className="col">
								<div className="s6-img-container">
									<img alt="article image" src="/src/assets/images/posts/compressed/Syx6Insignia.png" className="s6-filter-brightness-75 rounded-2"/>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>
			<hr />
			<section className="row">
				<div className="col-12 text-center">
					<h2>Merch Vault</h2>
				</div>
				<div className="col-12">
					<div className="row justify-content-center">
						<div className="col-6">
							<div className="row row-cols-1 row-cols-sm-2 row-cols-xxl-4 text-center">
								<article className="col">
									<p className="text-nowrap">[Desk Mats]</p>
									<div>
										<img alt="article image" src="/src/assets/images/posts/compressed/Syx6Insignia.png" className="rounded-circle s6-filter-brightness-75 s6-aspect-ratio-square-1"/>
									</div>
								</article>
								<article className="col">
									<p className="text-nowrap">[Metal Pins]</p>
									<div>
										<img alt="article image" src="/src/assets/images/posts/compressed/Syx6Insignia.png" className="rounded-circle s6-filter-brightness-75 s6-aspect-ratio-square-1"/>
									</div>
								</article>
								<article className="col">
									<p className="text-nowrap">[Prints]</p>
									<div>
										<img alt="article image" src="/src/assets/images/posts/compressed/Syx6Insignia.png" className="rounded-circle s6-filter-brightness-75 s6-aspect-ratio-square-1"/>
									</div>
								</article>
								<article className="col">
									<p className="text-nowrap">[Clothing]</p>
									<div>
										<img alt="article image" src="/src/assets/images/posts/compressed/Syx6Insignia.png" className="rounded-circle s6-filter-brightness-75 s6-aspect-ratio-square-1"/>
									</div>
								</article>
							</div>
						</div>
					</div>
					<div className="row text-center mt-5">
						<p>Ethereal veil lifts slightly, allowing a glimpse.</p>
					</div>
				</div>
			</section>
		</section>
    );
	
}
