const devApiDomain = import.meta.env.VITE_API_DOMAIN?.replace(/\/$/, '');
const localhostApiFallback = 'http://localhost:5000';

export const getApiUrl = (path: string) => {
  if (import.meta.env.DEV && devApiDomain) {
    return `${devApiDomain}${path}`;
  }

  if (
    import.meta.env.DEV &&
    typeof window !== 'undefined' &&
    ['localhost', '127.0.0.1'].includes(window.location.hostname)
  ) {
    return `${localhostApiFallback}${path}`;
  }

  return path;
};
