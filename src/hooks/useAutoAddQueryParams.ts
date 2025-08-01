// src/hooks/useAutoAddQueryParams.ts
import { useEffect } from "react";
import { setCookie } from "../utils/cookies";

export const useAutoAddQueryParams = (defaults: { [key: string]: string }) => {
  useEffect(() => {
    const location = window.location;
    const url = new URL(location.href);
    const currentParams = url.searchParams;

    let shouldRedirect = false;
    const newParams = new URLSearchParams(location.search);
    const finalValues: { [key: string]: string } = {};

    for (const key in defaults) {
      const value = currentParams.get(key);
      if (!value) {
        newParams.set(key, defaults[key]);
        finalValues[key] = defaults[key];
        shouldRedirect = true;
      } else {
        finalValues[key] = value;
      }
    }

    // ✅ Set cookies before redirect
    Object.entries(finalValues).forEach(([key, value]) => {
      setCookie(key, value);
    });

    if (shouldRedirect) {
      const newUrl = `${location.origin}?${newParams.toString()}`;
      window.location.replace(newUrl);
    }
  }, [defaults]);
};