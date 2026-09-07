import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navbar } from "@/components/layout/navbar";

export const metadata: Metadata = {
  title: {
    default: "Shree AI OS",
    template: "%s | Shree AI OS",
  },
  description:
    "Shree AI OS is an AI Operating Platform for building intelligent software systems.",
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