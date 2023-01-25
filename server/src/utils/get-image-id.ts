export const getImageId = (image: string) => {
  return image.split('/').pop()?.split('.')[0];
};
