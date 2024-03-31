import { useEffect, useState } from "react";
import { parseJson, stringifyJson } from "../utils";

interface UseLocalStorage {
    name: string;
    initialValue?: any
}

const useLocalStorage = ({ name, initialValue }: UseLocalStorage) => {
    const [state, setState] = useState();

    const updateValue = (value: any) => {
        setState(value);
        window.localStorage.setItem(name, JSON.stringify(value));
    }

    useEffect(() => {
        const item: string | null = window.localStorage.getItem(name);
        setState(item ? parseJson(item) : initialValue);
    }, [name, setState]);


    return { value: state, updateValue };
};

export default useLocalStorage;