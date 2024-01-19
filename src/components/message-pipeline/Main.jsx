import SyxParagraph from "../paragraph/SyxParagraph"
import React, { useContext, useEffect, useRef } from 'react';
import { FlashPipelineContext } from '../../contexts/FlashPipelineContext';

const FlashPipeline = () => {
    const { flash } = useContext(FlashPipelineContext);
    const chatContainerRef = useRef(null);

    useEffect(() => {
        scrollToBottom();
    }, [flash]);

    const scrollToBottom = () => {
        const chatContainer = chatContainerRef.current;
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }

    return (
        <div className='s6-flash-pipeline-container' ref={chatContainerRef}>
            {flash && flash.map((flashItem, index) => {
                return (
                    <React.Fragment key={index}>
                        {/* <SyxParagraph text={flashItem}/> */}
                        <p>[{index}] {flashItem}</p>
                    </React.Fragment>
                );
            })}
        </div>
    )
}

export default FlashPipeline