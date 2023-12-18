// todo: finish implementation
export default function MainContent(){
	
    return (
		<section class="s6-layout-fluid">
			<section class="row">
				<div class="col text-center">
					<h1>Shop</h1>
					<div class="row justify-content-center">
						<div class="col-12 col-sm-8 col-xl-6 pb-3 pt-3">
	
							<div id="carouselPrimary" class="carousel slide" data-bs-ride="carousel">
								<div class="carousel-inner justify-content-center">
									<div class="carousel-item w-10 active" data-bs-interval="4000">
										<img alt="article image" class="s6-filter-brightness-75 rounded-5"
											src="../assets/images/posts/lost_spirit.png">
									</div>
									<div class="carousel-item w-10" data-bs-interval="4000">
										<img alt="article image" class="s6-filter-brightness-75 rounded-5"
											src="../assets/images/posts/gold_medallion.png">
									</div>
									<div class="carousel-item w-10" data-bs-interval="4000">
										<img alt="article image" class="s6-filter-brightness-75 rounded-5"
											src="../assets/images/posts/flower-front.png">
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="row justify-content-center m-auto">
				<div class="row rounded-3 s6-secondary-content justify-content-center">
					<div class="col-12 p-2">
						<div class="row row-cols-5 g-1 g-sm-3 g-md-5">
							<article class="col">
								<div class="s6-img-container">
									<img alt="article image" src="../assets/images/posts/dandaliens.png" class="s6-filter-brightness-75 rounded-2"/>
								</div>
							</article>
							<article class="col">
								<div class="s6-img-container">
									<img alt="article image" src="../assets/images/posts/flower-front.png" class="s6-filter-brightness-75 rounded-2"/>
								</div>
							</article>
							<article class="col">
								<div class="s6-img-container">
									<img alt="article image" src="../assets/images/posts/flower-side.png" class="s6-filter-brightness-75 rounded-2"/>
								</div>
							</article>
							<article class="col">
								<div class="s6-img-container">
									<img alt="article image" src="../assets/images/posts/cannon-fodder.png" class="s6-filter-brightness-75 rounded-2"/>
								</div>
							</article>
							<article class="col">
								<div class="s6-img-container">
									<img alt="article image" src="../assets/images/posts/tea-fantasy.png" class="s6-filter-brightness-75 rounded-2"/>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>
			<hr>
			<section class="row">
				<div class="col-12 text-center">
					<h2>Merch Vault</h2>
				</div>
				<div class="col-12">
					<div class="row justify-content-center">
						<div class="col-6">
							<div class="row row-cols-1 row-cols-sm-2 row-cols-xxl-4 text-center">
								<article class="col">
									<p class="text-nowrap">[Desk Mats]</p>
									<div>
										<img alt="article image" src="../assets/images/posts/eye.png" class="rounded-circle s6-filter-brightness-75 s6-aspect-ratio-square-1"/>
									</div>
								</article>
								<article class="col">
									<p class="text-nowrap">[Metal Pins]</p>
									<div>
										<img alt="article image" src="../assets/images/posts/eye.png" class="rounded-circle s6-filter-brightness-75 s6-aspect-ratio-square-1"/>
									</div>
								</article>
								<article class="col">
									<p class="text-nowrap">[Prints]</p>
									<div>
										<img alt="article image" src="../assets/images/posts/eye.png" class="rounded-circle s6-filter-brightness-75 s6-aspect-ratio-square-1"/>
									</div>
								</article>
								<article class="col">
									<p class="text-nowrap">[Clothing]</p>
									<div>
										<img alt="article image" src="../assets/images/posts/eye.png" class="rounded-circle s6-filter-brightness-75 s6-aspect-ratio-square-1"/>
									</div>
								</article>
							</div>
						</div>
					</div>
					<div class="row text-center mt-5">
						<p>Ethereal veil lifts slightly, allowing a glimpse.</p>
					</div>
				</div>
			</section>
		</section>
    );
	
}
