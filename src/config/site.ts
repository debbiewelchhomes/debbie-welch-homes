export const DEFAULT_SITE_URL = "https://debbiewelchhomes.com";

const configuredSiteUrl = import.meta.env.VITE_SITE_URL?.trim();

export const SITE_URL = (configuredSiteUrl || DEFAULT_SITE_URL).replace(/\/+$/, "");

export const absoluteUrl = (path = "/") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
};
