import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hitech-industries-kanpur.best-bay-3257.chatgpt.site"),
  title: "Hi-Tech Industries | Manufacturing & Engineering, Kanpur",
  description: "Chemical manufacturing, industrial machinery, equipment supply and HSE consultancy from Hi-Tech Industries in Kanpur.",
  openGraph: {
    title: "Hi-Tech Industries | Manufacturing & Engineering",
    description: "Chemicals, machinery, industrial equipment and HSE consultancy from one dependable Kanpur team.",
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Hi-Tech Industries manufacturing and engineering" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hi-Tech Industries | Manufacturing & Engineering",
    description: "Chemicals, machinery, industrial equipment and HSE consultancy from one dependable Kanpur team.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
