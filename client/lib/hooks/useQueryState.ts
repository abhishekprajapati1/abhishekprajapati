"use client"
import { useState, useEffect, useCallback, FC, SetStateAction } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { isObject, parseJson, stringifyJson } from '../utils';

type QueryStateTypes = {
    name: string,
    initialValue?: any,
    options?: {
        redirectTo?: string,
        removeHistory?: boolean,
    }
}

type UpdateValueParams = {
    value: any;
    behaviour?: "replace" | "push";
}

/* 
    NOTE: intialValue should never be sent as undefined :: undefined is meant to be used by javascript itself
          if you want a falsy value use either null or false.
*/

const useQueryState = ({ name, initialValue, options = {} }: QueryStateTypes) => {
    const { redirectTo, removeHistory = true } = options;
    const router = useRouter();
    const params = useSearchParams();

    const [state, setState] = useState();



    const createQueryString = useCallback((name: string, value: string) => {
        const newParams = new URLSearchParams(params);
        let old_value = parseJson(newParams.get(name));
        let new_value = parseJson(value);

        let finalValue;

        if (isObject(old_value) && isObject(new_value)) {
            if (Object.keys(new_value).length > 0) {
                finalValue = { ...old_value, ...new_value }
            } else {
                finalValue = {}
            }
        }

        if (finalValue) {
            if (isObject(parseJson(finalValue)) && Object.keys(finalValue).length > 0) {
                newParams.set(name, stringifyJson(finalValue));
            }
        } else {
            newParams.set(name, value);
        }

        return newParams.toString();
    }, [params]);



    const updateValue = (data: UpdateValueParams) => {
        const { behaviour = "push" } = data;
        setState(data?.value);
        const valueToSave = stringifyJson(data?.value);

        if (valueToSave) {
            let newQueryString = createQueryString(name, valueToSave);
            let newUrl = redirectTo ? `${redirectTo}?${newQueryString}` : `?${newQueryString}`;

            if (behaviour === "replace") {
                router.replace(newUrl);
            } else {
                router.push(newUrl);
            }
        } else {
            router.back();
        }
    }





    useEffect(() => {
        const item = params.get(name);
        let valueToSave = item || initialValue;

        if (valueToSave) {
            let newQueryString = createQueryString(name, valueToSave);
            let newUrl = redirectTo ? `${redirectTo}?${newQueryString}` : `?${newQueryString}`;

            router.push(newUrl);
        }

        setState(valueToSave);
    }, [name, params, setState]);



    return { value: state, updateValue };
}

export default useQueryState;