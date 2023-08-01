import countries from './countries';
/**
 * Type representing a country object.
 */
export type Country = typeof countries[number];
/**
 * Returns the country object for a given ISO code.
 * @param {string} code - The ISO code of the country.
 * @returns {Country} The country object.
 */
export declare const getCountryByIso: (code: Country[2]) => Country;
/**
 * Removes all non-digit characters from a string.
 * @param {string} value - The string to remove non-digit characters from.
 * @returns {string} The string with all non-digit characters removed.
 */
export declare const removeMask: (value: string) => string;
/**
 * Returns the digits of a string that match the mask.
 * @param {string} value - The string to extract digits from.
 * @param {string} mask - The mask to match against.
 * @returns {string} The digits of the string that match the mask.
 */
export declare const getMaskDigit: (value: string, mask?: string) => string;
/**
 * Applies a mask to a string.
 * @param {string} value - The string to apply the mask to.
 * @param {string} mask - The mask to apply.
 * @returns {string} The string with the mask applied.
 */
export declare const applyMask: (value?: string, mask?: string) => string;
/**
 * Checks if a phone number is E.164 compliant.
 * @param {string} value - The phone number to check.
 * @returns {boolean} True if the phone number is E.164 compliant, false otherwise.
 */
export declare const isE164Compliant: (value: string) => boolean;
/**
 * Type representing a phone number object.
 */
export interface PhoneNumber {
    raw: string;
    formatted: string;
    country: Country;
}
/**
 * Splits a phone number into its raw, formatted, and country components.
 * @param {string} value - The phone number to split.
 * @returns {PhoneNumber | undefined} The phone number object.
 */
export declare const splitPhoneNumber: (value: string) => PhoneNumber | undefined;
/**
 * Replaces the dial code in a phone number with a given string.
 * @param {string} value - The phone number to replace the dial code in.
 * @param {string} dialCode - The dial code to replace.
 * @param {string} replacer - The string to replace the dial code with.
 * @returns {string} The phone number with the dial code replaced.
 */
export declare const replaceDialCode: (value: string, dialCode: string, replacer: string) => string;
