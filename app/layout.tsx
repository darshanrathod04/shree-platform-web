import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: {
    default: "Shree AI OS — In-Process AI Runtime for Java (v1.0.6 Developer Preview)",
    template: "%s | Shree AI OS",
  },
  description:
    "Shree AI OS is an in-process, deterministic AI runtime platform for Java 21 LTS. Featuring a 5-layer architecture, 11-stage cognitive execution pipeline, Hybrid RAG with pgvector RRF, and 10 verified SDK facades.",
  keywords: [
    "Shree AI OS",
    "Java AI Runtime",
    "Java 21 LTS",
    "In-Process AI Runtime",
    "Cognitive Operating System",
    "Hybrid RAG",
    "pgvector",
    "11-Stage Cognitive Pipeline",
    "Fail-Closed Security",
    "Developer Preview v1.0.6",
  ],
  authors: [{ name: "Darshan Rathod", url: "https://github.com/darshanrathod04" }],
  openGraph: {
    title: "Shree AI OS — In-Process AI Runtime for Java",
    description:
      "A deterministic, Java 21 native AI runtime platform bringing intelligent capabilities directly into JVM applications with full observability and privacy-first boundaries.",
    siteName: "Shree AI OS",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shree AI OS — In-Process AI Runtime for Java",
    description:
      "Deterministic runtime, 5-layer architecture, 11-stage cognitive pipeline, and 10 verified SDK facades on Java 21 LTS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" suppressHydrationWarning>
       <body>
         <ThemeProvider>
           <Navbar />
           {children}
         </ThemeProvider>
       </body>
     </html>
   );
 }