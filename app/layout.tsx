import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { MotionWrapper } from "@/components/motion-wrapper"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Rezwan Sheikh - Software Engineer",
  description: "Full Stack Developer focused on Next.js, NestJS, AI integrations, and scalable product design.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <MotionWrapper>
            <Navbar />
            <main className="pt-16">{children}</main>
          </MotionWrapper>
        </ThemeProvider>
      </body>
    </html>
  )
}
