export const isObject = (value: any): boolean => {
    return value && typeof value !== 'string' && typeof value === 'object' && !Array.isArray(value);
}

export const parseJson = (item: any) => {
    try {
        return JSON.parse(item);
    } catch (error) {
        return item;
    }
}

export const stringifyJson = (data: any): string => {
    try {
        if (data) {
            if (typeof data === "string") return data;
            return JSON.stringify(data);
        }
        return "";

    } catch (error) {
        return "";
    }
}