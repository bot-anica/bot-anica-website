export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    return '/backend';
  }

  if (process.env.API_URL) {
    return process.env.API_URL;
  }

  return 'http://localhost:3001/backend';
}