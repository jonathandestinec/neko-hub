import { getSession } from "@auth0/nextjs-auth0";

export function signinWithGoogle() {

}

export async function verifySession() {
    const session = await getSession();
    const user = session?.user as User
    
    if (user) {
        return {
            isAuthenticated: true,
            user: user
        }
    } else {
        return {
            isAuthenticated: false,
            user: null
        }
    }

}