import { fetchFromStrapi, getStrapiMedia } from "@/lib/strapi";
import HorizontalScroll from "./horizontalSrcoll";

export default async function HorizontalScrollServer() {
  // Fetch all images, include brand (media) field
  const res = await fetchFromStrapi("/api/images?populate=*&sort[0]=order:asc");

  const items = Array.isArray(res?.data) ? res.data : [];

  const cards = items.map((item: any) => ({
    id: item.id,
    title: item.slug || `Image ${item.id}`,
    url: getStrapiMedia(item.brand?.url) || "",
    order: item.order || 9999,
  }));

  return <HorizontalScroll cards={cards} />;
}