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

}

export default syxutils;

//context: made in need for a simple way to check if a value is empty like in php.