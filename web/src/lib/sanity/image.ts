import { createImageUrlBuilder } from "@sanity/image-url";
import { client } from "./client";

const builder = createImageUrlBuilder(client);

export function urlFor(source: { asset?: { _id?: string; url?: string } }) {
  return builder.image(source);
}
