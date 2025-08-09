import { type Metadata } from "next";

import "./global.css";

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
