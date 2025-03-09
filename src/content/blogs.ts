import { Categories, Contents } from "./types";

export const Blogs: Contents[] = [
  {
    id: "1",
    title: "A Trip to Yosemite",
    category: Categories.GALLERY,
    date: "November 15, 2024",
    place: "Yosemite National Park, California",
    content: 'A short trip to view fall and some snow in Yosemite.',
    thumbSrc: "/images/yosemite-1-thumb.jpg",
    images: [
      {
        img: "/images/20241115_091423.jpg",
        title: "Swinging Bridge at Yosemite Valley",
        rows: 2,
        cols: 4,
      },
      {
        img: "/images/yosemite-1.jpg",
        title: "Fall in full bloom at Yosemite Valley view",
        rows: 1,
        cols: 6,
      },
      {
        img: "/images/20241115_082910.jpg",
        title: "El Capitan in full fall bloom",
        rows: 1,
        cols: 6,
      }
    ],
  }
];