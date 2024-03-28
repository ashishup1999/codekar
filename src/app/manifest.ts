import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Codekar",
    short_name: "CodeKar",
    description: "Codekar befikr!!!",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/logoWhite.svg",
        sizes: "192x192",
        type: "image/svg+xml",
      },
      {
        src: "/logoWhite.svg",
        sizes: "512x512",
        type: "image/svg+xml",
      },
    ],
  };
}
