import PageHeader from "../components/page-heading/Default";

export default function MainContent(){
	const title = "About";
	const extraMessage = "Syx6";
    return (
		<section className="s6-layout-fluid">
			<PageHeader title={title} extraMessage={extraMessage} ></PageHeader>
			<div className="row justify-content-center">
				<div className="col-11">
					<q>
						<p>Syx6 is, in itself, just a recollection of thoughts and traits.</p>
						<p>A convergence between emotions and code.</p>
						<p>Additionally, in its flesh, the art from the living, and not.</p>
						
						<p>... becoming a temple of sorts.</p>
						<p></p>
					</q>
				</div>
			</div>
		
		</section>
    );
}
