/**
 * Custom logging class
 * @class syxlog
 * @description Custom logging class
 * @example syxlog.out('kill the machines');
 */
class syxlog {
    static out(...data) {
        // Implement custom logging logic here
        const now = new Date();
        const time = now.toLocaleTimeString();
        const timestamp = `[${time}]`;
        console.log(`%c${timestamp}`, 'color: cyan; font-weight: bold;', ...data);
    }

    // todo: Add methods for warn, error, etc. if needed
    static warn(...data) {
        const now = new Date();
        const time = now.toLocaleTimeString();
        const timestamp = `[${time}]`;
        console.warn(`%c${timestamp}`, 'color: orange; font-weight: bold;', ...data);
    }
}

export default syxlog;


/** Original Source Code
const logCopy = console.log.bind(console); // <- Bind to the original console.log() method
export default console.log = (data) => {
    if(!data) return;
    const appendDate = false;
    const now = new Date();
    const date = (appendDate) ? now.toLocaleDateString() : '';
    const time = now.toLocaleTimeString();
    const timestamp = `[${date}${time}]`;
    logCopy(`%c${timestamp}%c`, 'color: cyan; font-weight: bold;', '', data);
}
*/