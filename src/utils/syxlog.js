/**
 * Custom logging class
 * @class syxlog
 * @description Custom logging class
 * @example syxlog.out('kill the machines');
 */
class syxlog {
    // define constant colors for each log type
    static colors = {
        out: 'cyan',
        debug: 'violet',
        warn: 'orange',
        error: 'red'
    };

    static out(...data) {
        // Implement custom logging logic here
        const now = new Date();
        const time = now.toLocaleTimeString();
        const timestamp = `[${time}]`;
        console.log(`%c${timestamp}`, `color: ${syxlog.colors.out}; font-weight: bold;`, ...data);
    }

    static debug(...data) {
        // Implement custom logging logic here
        const now = new Date();
        const time = now.toLocaleTimeString();
        const timestamp = `[${time}]`;
        console.log(`%c${timestamp}`, `color: ${syxlog.colors.debug}; font-weight: bold;`, ...data);
    }

    static warn(...data) {
        const now = new Date();
        const time = now.toLocaleTimeString();
        const timestamp = `[${time}]`;
        console.warn(`%c${timestamp}`, `color: ${syxlog.colors.warn}; font-weight: bold;`, ...data);
    }

    static error(...data) {
        const now = new Date();
        const time = now.toLocaleTimeString();
        const timestamp = `[${time}]`;
        console.error(`%c${timestamp}`, `color: ${syxlog.colors.error}; font-weight: bold;`, ...data);
    }
}

export default syxlog;


/**
 * Had to change it due to errors how react double-invokes methods in strict mode.
 * In the good side, the newer approach follows best practices:
 * @read https://github.com/ryanmcdermott/clean-code-javascript?tab=readme-ov-file#dont-write-to-global-functions
 */
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