import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const checkToken = (name?: string): string | undefined => {
    const token = cookies().get(name || "_hact")?.value;
    return token;
}

export const protect = () => {
    const isLoggedIn = checkToken();
    if (!isLoggedIn) redirect("/admin/login");
}