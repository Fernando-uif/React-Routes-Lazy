export const getImageUrl = (name: string): string => {
  console.log(`./src/${name}`, "La ruta completa");
  return new URL(`/src/${name}`, import.meta.url).href;
};
