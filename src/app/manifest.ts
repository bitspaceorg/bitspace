import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: ":Bitspace",
    short_name: "bitspace",
    description:"Bitspace is a dynamic and innovative organization that provides a platform for young and talented coders to showcase their skills by creating and contributing to open-source projects.",

    start_url: "/",
    display: "standalone",
    background_color: "#010101",
    theme_color: "#9D8AE9",
    icons: [
              {
        src: "icons/bitlogo192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "icons/bitlogo512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "icons/bitlogovec.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },

      {
        src: "icons/bitlogo512m.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    screenshots: [],
  };
}
