import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import { Spotlight } from "@/components/ui/Spotlight";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Federico Campi | Portfolio",
  description: "Full Stack developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <head>
        <link rel="icon" href="/fcIcon.png" sizes="any" />
      </head>
      <body
        className={`${inter.className} bg-gray-400 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#020920] dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden`}
      > 
        <div className="w-full h-full">
              <div className="absolute top-0 left-0 right-0 w-full">
                  <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                  />
                  <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-full"
                    fill="purple"
                  />
                  <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
              </div>
              <div 
               className="fondoGrid absolute top-0 left-0 right-0 w-full h-[90vh] opacity-10 pointer-events-none mx-auto"
              >

              </div>
            </div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            
            <Header />
            {children}
            <Footer />
            <Toaster position="top-right" />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
