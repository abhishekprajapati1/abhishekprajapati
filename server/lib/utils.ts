import * as bcrypt from 'bcrypt';

export const hashString = (str: string): string => {
    return bcrypt.hashSync(str, 10);
}

export const compareString = (str: string, hash: string): boolean => {
    return bcrypt.compareSync(str, hash);
}