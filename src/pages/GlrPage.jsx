import { useLayoutEffect } from "react";
import syxlog from "../utils/syxlog";
const IMAGE_DATA_PATH = "/src/data/gallery-image-data.json";

export default function MainContent(){
	
	const galleryFadeIn = () => {
		syxlog.debug(`[Call] galleryFadeIn()`); // todo: remove
		// Get data dynamically
		getImageData(IMAGE_DATA_PATH).then(imageData => {
			syxlog.debug(`imageData:`, imageData); // todo: remove

			// Make sure imageData is defined
			if (!imageData) {
				throw new Error('ImageData is undefined or could not be fetched.');
			}
	
			// Get the predefined `gallery` section
			const htmlElement = document.querySelector('.gallery');
			// Fade in images fetched beforehand
			imageData.images.forEach((img, index) => fadeInImageAsset(img, index, htmlElement, imageData.generalClasses));
		}).catch(error => {
			// Centralized error handling
			console.error('Error in galleryFadeIn:', error);
		});
	}

	// make use of useEffect to call the function
	useLayoutEffect(() => {
		galleryFadeIn();
	}, []);


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

/**
 * @brief Fetches the image data from the given path.
 * @param {String} PATH 
 * @returns {Promise} Promise object represents the image data.
 */
const getImageData = (PATH) => {
	return fetch(PATH)
	.then(response => response.json())
	.catch(error => {
		throw new Error(`HTTP error! status: ${error}`);
	});
}

const fadeInImageAsset = (img, index, htmlElement, generalClasses) => {
	const FADE_IN_MS = 150;

	setTimeout(() => {
		const imageElement = document.createElement('img');
		imageElement.alt = img.alt;
		imageElement.src = img.path;
		imageElement.className = generalClasses.join(' ') + img.extraClasses.join(' ') + ' s6-fade-in';

		htmlElement.appendChild(imageElement);

		imageElement.offsetWidth; // Trigger reflow
		imageElement.classList.add('s6-fade-in-loaded');
	}, FADE_IN_MS * index);
}