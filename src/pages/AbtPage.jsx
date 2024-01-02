import PageHeader from "../components/page-heading/Default";
import SyxParagraph from "../components/paragraph/SyxParagraph";

export default function MainContent(){
	const title = "About";
	const extraMessage = "Syx6";
    return (
		<section className="s6-layout-fluid">
			<PageHeader title={title} extraMessage={extraMessage} ></PageHeader>
			<div className="row justify-content-center">
				<div className="col-11">
					<q>
						<SyxParagraph text="Syx6 is, in itself, just a recollection of thoughts and traits."></SyxParagraph>
						<SyxParagraph text="A convergence between emotions and code."></SyxParagraph>
						<SyxParagraph text="Additionally, in its flesh, the art from the living, and not."></SyxParagraph>
						
						<SyxParagraph text="... becoming a temple of sorts."></SyxParagraph>
					</q>
				</div>
			</div>
		
		</section>
    );
}
