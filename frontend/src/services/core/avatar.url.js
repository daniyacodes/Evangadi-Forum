// Uploaded avatars belong to the API server, which may use a different port.
export const avatarUrl = value => {
  if (!value || !value.startsWith('/uploads/avatars/')) return value;
  const base = import.meta.env.VITE_API_BASE_URL ;
  return new URL(value, base).href;
};
