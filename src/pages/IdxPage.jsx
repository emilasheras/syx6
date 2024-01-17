import React from 'react';
import useFetchData from '../hooks/useFetchData';
import getLoadingJSX from '../components/loading-scaffold/getLoadingJSX';
import PageHeader from "../components/page-heading/Default";
import SyxHeading from "../components/heading/SyxHeading";
import SyxParagraph from "../components/paragraph/SyxParagraph";
const INDEX_HTML_DATA_PATH = '/public/index-html.json'; //todo: CHANGE FOR API CALL. Currently using a local file instead (this is why there is a `@app/public/public` folder which might seem redundant)


export default function MainContent() {
    // Fetch data from API. 
    const { data, isLoading:loading, error } = useFetchData(INDEX_HTML_DATA_PATH); 

    if(loading) return getLoadingJSX('text');
    if(error) return <p className='s6-error-string'>Error: {error.message}</p>;

    const sectionsToArray = data.sections?Object.values(data.sections):'';
    const sectionSeparator = data.separator??''; //! <- Sanitize this data before using it

    const title = "Index";
    const extraMessage = "I am a prisoner of my own design. I am a prisoner of my own device."
    return (
        <section className='s6-layout-read'>
            <PageHeader title={title} extraMessage={extraMessage}></PageHeader>

            {
                // Check if there are any sections to render
                sectionsToArray &&
                // Iterate over each section and place its contents inside a <section> tag
                sectionsToArray.map((section, index) => {
                    // Check if this is the last section for the final separator to not be rendered
                    const isLastSection = index === sectionsToArray.length - 1;
                    return (
                        <React.Fragment key={index}>
                            <section>
                                <SyxHeading text={section.heading} />
                                {
                                    section.content.map((paragraph, index) => {
                                        return <SyxParagraph key={index} text={paragraph}></SyxParagraph>;
                                    })
                                }
                            </section>
                            {
                                !isLastSection && // <- if not last section
                                <div dangerouslySetInnerHTML={{__html: sectionSeparator}}></div> //! Beware of XSS attacks
                            }
                        </React.Fragment>
                    );
                })
            }
        </section>
    );
}