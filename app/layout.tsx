
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { SheetProvider } from "@/providers/SheetProviders";
import StoreProvider from "@/providers/StoreProvider";
import { SessionProvider } from "next-auth/react";


export const metadata: Metadata = {
  title: "Siwar",
  description: "Choco and events sweets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <StoreProvider>
            <SheetProvider />
            <Toaster />
            {children}
          </StoreProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
