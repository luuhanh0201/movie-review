/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const saveToSessionStorage = (token: string, user: any) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("user", JSON.stringify(user));
};
export type TokenString = string | null
export const getToSessionStorage = (() => {
    const tokenString = sessionStorage.getItem("token");
    const userString = sessionStorage.getItem("user");

    if (tokenString !== null && userString !== null) {
        const token = JSON.parse(tokenString);
        const user = JSON.parse(userString);    

        return {
            token: token,
            user: user
        }
    }
    return null;
})();

export const deleteDataSessionStorage = (() => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user");
});