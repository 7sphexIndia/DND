const devApiDomain = import.meta.env.VITE_API_DOMAIN?.replace(/\/$/, '');

export const getApiUrl = (path: string) => {
  if (import.meta.env.DEV && devApiDomain) {
    return `${devApiDomain}${path}`;
  }

  return path;
};
