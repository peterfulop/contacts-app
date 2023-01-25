import { createApolloServer } from './apollo';
import { cloudinaryServiceFactory } from './services/cloudinary.service';

const startServer = async (): Promise<void> => {
  const { url } = await createApolloServer();
  const { generateMockData } = cloudinaryServiceFactory();
  console.log(`🚀 Server ready at ${url}`);
  await generateMockData();
};

startServer();
