import * as React from 'react';
import countries from './countries';
import { Country as CountryType, applyMask, getCountryByIso, replaceDialCode, splitPhoneNumber } from './utils';
export interface PhoneProps extends Omit<React.ComponentPropsWithRef<'input'>, 'value' | 'defaultValue'> {
    value?: string;
    defaultValue?: string;
    defaultCountry?: CountryType[2];
}
export declare const _Phone: React.ForwardRefExoticComponent<Omit<PhoneProps, "ref"> & React.RefAttributes<HTMLInputElement>>;
export declare const Phone: React.ForwardRefExoticComponent<Omit<PhoneProps, "ref"> & React.RefAttributes<HTMLInputElement>> & {
    Country: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "ref"> & {
        ref?: ((instance: HTMLSelectElement | null) => void) | React.RefObject<HTMLSelectElement> | null | undefined;
    }, "ref"> & React.RefAttributes<HTMLSelectElement>>;
    Number: React.ForwardRefExoticComponent<Omit<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & {
        ref?: ((instance: HTMLInputElement | null) => void) | React.RefObject<HTMLInputElement> | null | undefined;
    }, "ref"> & React.RefAttributes<HTMLInputElement>>;
};
export { countries, applyMask, getCountryByIso, replaceDialCode, splitPhoneNumber, };
