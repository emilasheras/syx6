/**
 * Custom Utilities class
 * @class syxutils
 * @description Custom Utilities class
 */
class syxutils {
    static empty(value) {
        return (
            value === undefined || // `undefined` (typeof undefined)
            value === null || // `null` (typeof null === 'object')
            value === false || // `false` (boolean)
            value === 0 || // `0` (integer)
            value === '' || // `''` (empty string)
            //value === '0' || //! exclusive to php `'0'` (string containing a single zero character)
            (this.isArray(value) && value.length === 0) || // `[]` (empty array)
            (this.isObject(value) && value !== null && Object.keys(value).length === 0) // `{}` (empty object)
        );
    }

    static isArray(value){
        return Array.isArray(value);
    }

    static isObject(value){
        return (typeof value === 'object');
    }

    static getDetailsFromUnixTimestamp(unix_timestamp) {
        // Create a new JavaScript Date object based on the timestamp
        // multiplied by 1000 so that the argument is in milliseconds, not seconds
        var date = new Date(unix_timestamp * 1000);

        // Hours part from the timestamp
        var hours = date.getHours();

        // Minutes part from the timestamp
        var minutes = "0" + date.getMinutes();

        // Seconds part from the timestamp
        var seconds = "0" + date.getSeconds();

        // Will display time in 10:30:23 format
        var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

        return {
            date: date,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
            formattedTime: formattedTime
        };
    }

    
}

export default syxutils;

//context: made in need for a simple way to check if a value is empty like in php.