// import { useState, useEffect } from 'react';
import useFetchData from '../hooks/useFetchData';

import Footer from "../components/Footer";
import NavBar from "../components/NavBarVertical";
import getLoadingJSX from '../components/LoadingScaffold/getLoadingJSX';


export function HeaderContent() {
    console.log('HeaderContent Rendered');
    return <NavBar/>;
}

export function MainContent() {
    const { data, loading, error } = useFetchData('/src/data/index-html.json');

    if(loading) return getLoadingJSX('text');
    if(error) return <p>Error: {error.message}</p>; //! <- Cant this be shown in a popup modal?

    const sectionsToArray = data.sections?Object.values(data.sections):'';
    const sectionSeparator = data.separator??''; //! <- Sanitize this data before using it

    console.log('MainContent Rendered');
    return (
        <section className='s6-layout-read'>
            {
                // Check if there are any sections to render
                sectionsToArray &&
                // Iterate over each section and place its contents inside a <section> tag
                sectionsToArray.map((section, index) => {
                    // Check if this is the last section for the final separator to not be rendered
                    const isLastSection = index === sectionsToArray.length - 1;
                    return (
                        <>
                            <section key={index}>
                                <h2>{section.heading}</h2>
                                {
                                    // Put each paragraph inside a <p> tag
                                    section.content.map((paragraph, index) => {
                                        return <p key={index}>{paragraph}</p>;
                                    })
                                }
                            </section>
                            {
                                !isLastSection && // <- if not last section
                                <div dangerouslySetInnerHTML={{__html: sectionSeparator}}></div> //! Beware of XSS attacks
                            }
                        </> 
                    );
                })
            }
        </section>
    );
}

/**
 * @component
 * @returns {JSX.Element} - The footer
 */
export function FooterContent() {
    console.log('FooterContent Rendered');
    return <Footer/>;
}