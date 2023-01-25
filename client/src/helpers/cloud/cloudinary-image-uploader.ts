import axios from 'axios';

const API_KEY = '929611179597579';
const CLOUD_NAME = 'ddvzzovu9';

type ImageUploadInput = {
  signature: string;
  timestamp: string;
  files: FileList | null;
};

export const cloudinaryImageUploader = async (input: ImageUploadInput) => {
  const { signature, timestamp, files } = input;

  if (files !== null) {
    const data = new FormData();
    data.append('file', files[0]);
    data.append('api_key', API_KEY);
    data.append('signature', signature);
    data.append('timestamp', timestamp);

    const fileName = files?.[0].name;
    const extension = fileName.split('.').pop();

    const cloudinaryResponse = await axios.post(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      data,
      {
        headers: { 'Content-Type': 'multipart/form-data' },
      }
    );

    return {
      public_id: `${cloudinaryResponse.data.public_id}.${extension}`,
      version: cloudinaryResponse.data.version,
      signature: cloudinaryResponse.data.signature,
    };
  }
};
