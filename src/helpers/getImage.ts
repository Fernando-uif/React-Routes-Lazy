export const getImageUrl = (name: string): string => {
  return new URL(`/src/${name}`, import.meta.url).href;
};
