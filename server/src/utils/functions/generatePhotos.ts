import { createClient } from "pexels";
import { IPhoto } from "../../interfaces/data/photo";

import dotenv from "dotenv";
dotenv.config();

const pexelsClient = createClient(`${process.env.PEXELS_KEY}`);

export default async function generatePhotosFun(
  country: string
): Promise<IPhoto[] | null> {
  const photos = await pexelsClient.photos.search({
    query: country,
    per_page: 10,
  });

  let photosToReturn: IPhoto[] = [];

  if ("photos" in photos) {
    photosToReturn = photos.photos.map((photo) => {
      return { photographer: photo.photographer, url: photo.src.large };
    });
  }

  return photosToReturn;
}
