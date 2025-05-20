import path from "path";
import fs from "fs";
import { imageSize } from "image-size";

export const getPublicPath = () => process.cwd() + "/public/";

type ImageDimensions = { width: number; height: number };
const validImageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"];
const images: Record<string, ImageDimensions> = {};

const getAllImages = (dirPath: string) => {
  return fs
    .readdirSync(dirPath)
    .reduce((images: string[], currentImage: string): string[] => {
      const fullImagePath = path.join(dirPath, currentImage);
      const stat = fs.statSync(fullImagePath);
      if (stat.isDirectory()) {
        return images.concat(getAllImages(fullImagePath));
      }
      const ext = path.extname(currentImage).toLowerCase();
      return validImageExtensions.includes(ext)
        ? images.concat(fullImagePath)
        : images;
    }, []);
};

const extractImageDimensions = (
  imagePath: string
): { width: number; height: number } => {
  const buffer = fs.readFileSync(imagePath);
  const { width, height } = imageSize(buffer);
  return {
    width,
    height,
  };
};

export const buildImageTable = (): Record<string, ImageDimensions> => {
  if (Object.keys(images).length > 1) return images;
  const publicPath = getPublicPath();
  getAllImages(publicPath).forEach((imagePath) => {
    images[imagePath.replace(publicPath, "/")] =
      extractImageDimensions(imagePath);
  });
  return images;
};

export const getImageDimensions = (
  imagePath: string
): { width: number; height: number } => {
  const images = buildImageTable();
  return images[imagePath] ?? { width: 0, height: 0 };
};
