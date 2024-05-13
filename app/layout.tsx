import { type Metadata } from "next";

import fontawesomeConfig from "@/configs/fontawesome";

import "./global.css";

fontawesomeConfig.setup();

export const metadata: Metadata = {
  title: "Andy - Portfolio",
  openGraph: {
    title: "Andy - Portfolio",
    images: ["/portrait.webp"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
