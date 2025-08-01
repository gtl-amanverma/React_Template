import Cookies from "js-cookie";

/**
 * Sets a cookie with the specified name and value.
 * @param name - The name of the cookie.
 * @param value - The value of the cookie.
 * @param options - Additional cookie options (e.g., expires, path).
 */
export const setCookie = (
  name: string,
  value: string,
  options?: Cookies.CookieAttributes
) => {
  Cookies.set(name, value, options);
};

/**
 * Retrieves the value of a cookie by its name.
 * @param name - The name of the cookie to retrieve.
 * @returns The value of the cookie, or undefined if the cookie does not exist.
 */
export const getCookie = (name: string): string | null | undefined => {
  return Cookies.get(name);
};

/**
 * Removes a cookie by its name.
 * @param name - The name of the cookie to remove.
 * @param options - Additional cookie options (e.g., path).
 */
export const removeCookie = (
  name: string,
  options?: Cookies.CookieAttributes
) => {
  Cookies.remove(name, options);
};