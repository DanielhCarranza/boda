import fs from 'fs';
import path from 'path';

export const getImages = (dir: string) => {
  const directoryPath = path.join(process.cwd(), 'public', dir);
  const files = fs.readdirSync(directoryPath);
  return files.filter(file => /\.(jpg|jpeg|png|gif)$/.test(file)).map(file => `/${dir}/${file}`);
};