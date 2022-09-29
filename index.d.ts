/**
 * Validates a json string.
 * Errors are returned
 * @param jsonString
 * @param allowDuplicatedKeys
 * @returns {String} error. undefined if no error
 */
export function validate(jsonString: any, allowDuplicatedKeys: any): string;
/**
 * Parses a json. Errors are thrown if any
 * @param jsonString
 * @param allowDuplicatedKeys
 * @returns {Object}
 */
export function parse(jsonString: any, allowDuplicatedKeys: any): any;
