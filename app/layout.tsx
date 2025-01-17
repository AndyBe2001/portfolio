import { type Metadata } from "next";

import "@fortawesome/fontawesome-svg-core/styles.css";
import "./global.css";

import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

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
