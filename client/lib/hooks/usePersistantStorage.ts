import { useEffect, useState } from "react";
import { parseJson, stringifyJson } from "../utils";

interface UseBrowser {
    name: string;
    initialValue?: any
}

const useBrowser = ({ name, initialValue }: UseBrowser) => {
    const [state, setState] = useState();

    const updateValue = (value: any) => {
        setState(value);
        window.localStorage.setItem(name, stringifyJson(value));
    }

    useEffect(() => {
        const item: string | null = window.localStorage.getItem(name);
        setState(item ? parseJson(item) : initialValue);
    }, [name, setState]);


    return { value: state, updateValue };
};

export default useBrowser;