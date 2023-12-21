import PageHeader from "../components/page-heading/Default";

export default function MainContent(){
	const title = "Change Log";
	const extraMessage = "Progress";
    return (
		<section className="s6-layout-fluid">
			<PageHeader title={title} extraMessage={extraMessage}/>
			{/* Markdown to HTML module? put tasks here somehow? */}
		</section>
    );
}