import { Metadata } from "next";

export const DEFAULT_METADATA: Metadata = {
  openGraph: {
    siteName: "Andy Portfolio",
    type: "website",
    images: [
      {
        url: "https://www.andytsai.com/_next/image?url=%2Fopen-graph.jpg&w=1200&q=75",
        width: 1200,
        height: 630,
      },
    ],
  },
};
