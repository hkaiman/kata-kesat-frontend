import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { LinkPreview } from "@/components/ui/Link-Preview";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex flex-col items-center justify-center py-3">
              <div className="flex items-center">
                <span className="text-default-600">Inspirasi dari</span>
                &nbsp;
                <LinkPreview
                  url="https://profanity.dev"
                  className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
                >
                  <p className="text-primary">profanity.dev</p>
                </LinkPreview>{" "}
              </div>
              <div>
                © {getCurrentYear()} - Haikal Aiman All Rights Reserved
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
