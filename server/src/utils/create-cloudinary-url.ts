import { config } from '../config/config';

export const createCloudinaryUrl = (imageId: string, width?: number) => {
  const { urlPrefix } = config.cloudinary;
  const { cloudName } = config.cloudinary.credentials;
  return `${urlPrefix}/${cloudName}/image/upload/w_${
    width || 200
  },c_scale/${imageId}`;
};
