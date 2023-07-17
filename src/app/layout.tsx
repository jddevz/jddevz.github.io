import "./globals.css";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono } from "next/font/google";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Divider } from "./components/divider";

const inter = Inter({ subsets: ["latin"] });
const ibmPlexMono = IBM_Plex_Mono({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jddevz",
  description: "personal portfolio for web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-gray-900">
      <body
        className={`min-h-screen ${ibmPlexMono.className} flex flex-col flex-grow container mx-auto max-w-3xl px-4`}
      >
        <Header />
        <main className="flex-grow">
          <Divider />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
