import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toggle } from "@/toggle/toggle"
import { Analytics } from "@vercel/analytics/react"
import Article from "&/article/article"
import Main from "&/main/main"
import { ThemeProvider } from "$/theme/provider"

import "#/global.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://beniscoiffeur.ch"),
  title: {
    default: "Beni's Coiffeur",
    template: "%s · Beni's Coiffeur",
  },
  description: "",
  openGraph: {
    title: "Beni's Coiffeur",
    description: "",
    url: "https://beniscoiffeur.ch",
    siteName: "Beni's Coiffeur",
    locale: "de_CH",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="theme"
          defaultTheme="light"
          enableColorScheme={true}
          enableSystem={true}
        >
          <Main>
            <Article>{children}</Article>
            <Toggle />
          </Main>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
