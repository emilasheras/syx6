import { useEffect } from 'react';

/**
 * Triggers the update of the following CSS variables:
 * --body-height
 * --body-width
 * 
 */
const useAdjustBody = () => {
    useEffect(() => {
        const adjustBodyHeight = () => {
            console.log('adjustBodyHeight triggered');

            // Retrieve the value of the custom property
            const scrollbarWidth = getComputedStyle(document.documentElement).getPropertyValue('--webkit-scrollbar-width');
      
            // Check if the full content height is greater than the window height.
            const hasVerticalScrollbar = document.body.scrollHeight > window.innerHeight;
            const hasHorizontalScrollbar = document.body.scrollWidth > window.innerWidth;

            // Define the new height value, adjusting for the scrollbar if present.
            const newBodySize = (hasVerticalScrollbar || hasHorizontalScrollbar) ? `calc(100vh - ${scrollbarWidth})` : '100vh';

            // Update the CSS variable in the :root element.
            document.documentElement.style.setProperty('--body-height', newBodySize);
            document.documentElement.style.setProperty('--body-width', newBodySize);
        };

        // Call the adjustBodyHeight function to set the initial value
        if (document.readyState === 'complete') {
            setTimeout(adjustBodyHeight, 2000);
        } else {
            window.addEventListener('load', adjustBodyHeight);
        }
        // Set up event listeners for when the window is resized
        window.addEventListener('resize', adjustBodyHeight);

        // Clean up event listeners when the component using this hook unmounts
        return () => {
            window.removeEventListener('load', adjustBodyHeight);
            window.removeEventListener('resize', adjustBodyHeight);
        };
    }, []); // The empty dependency array ensures this effect only runs on mount and unmount
};

export default useAdjustBody;
