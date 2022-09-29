/**
 * Validates a json string.
 * Errors are returned
 * @param {string} jsonString
 * @param {boolean | undefined} allowDuplicatedKeys
 * @returns {String} error. undefined if no error
 */
export function validate(jsonString: string, allowDuplicatedKeys: boolean | undefined): string;
/**
 * Parses a json. Errors are thrown if any
 * @param {string} jsonString
 * @param {boolean | undefined} allowDuplicatedKeys
 * @returns {Object}
 */
export function parse(jsonString: string, allowDuplicatedKeys: boolean | undefined): any;
