import convict from 'convict';
import dotenv from 'dotenv';
dotenv.config();

const configObject = convict({
  backendPort: {
    doc: 'port of the server',
    format: Number,
    default: 5000,
    env: 'BACKEND_PORT',
  },
  mockData: {
    doc: 'mock data for testing',
    format: Boolean,
    default: false,
    env: 'MOCK_DATA',
  },
  cloudinary: {
    credentials: {
      cloudName: {
        doc: 'cloudinary CLOUD_NAME',
        format: String,
        default: '',
        env: 'CLOUD_NAME',
      },
      apiKey: {
        doc: 'cloudinary CLOUD_API_KEY',
        format: String,
        default: '',
        env: 'CLOUD_API_KEY',
      },
      apiSecret: {
        doc: 'cloudinary CLOUDINARY_API_SECRET',
        format: String,
        default: '',
        env: 'CLOUDINARY_API_SECRET',
      },
    },
    urlPrefix: {
      doc: 'cloudinary public assess URL prefix',
      format: String,
      default: '',
      env: 'CLOUDINARY_URL_PREFIX',
    },
  },
});

export const config = configObject.getProperties();
export type Config = typeof config;
