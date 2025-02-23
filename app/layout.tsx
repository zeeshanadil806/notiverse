import type React from "react"
import "./globals.css";
import { Providers } from "./providers"
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <Providers attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

