import { useState, useEffect } from 'react';

const useInView = (options) => {
    const [isInView, setIsInView] = useState(false);
    const [elementRef, setElementRef] = useState(null);

    useEffect(() => {
        if (!elementRef) return;

        const observer = new IntersectionObserver(([entry]) => {
            setIsInView(entry.isIntersecting);
            if (entry.isIntersecting) {
                observer.unobserve(elementRef); //? optional: retriggers when element is visible again
            }
        }, options);

        observer.observe(elementRef);

        return () => observer.disconnect();
    }, [elementRef, options]);

    return [isInView, setElementRef];
};

export default useInView;
