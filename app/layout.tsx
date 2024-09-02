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
      <body
        className={`${inter.className} bg-gray-500 text-gray-950 relative pt-28 sm:pt-36 dark:bg-[#080808] dark:text-gray-50 dark:text-opacity-90`}
      >
          <div className="absolute top-0 left-0 right-0 grid grid-cols-7 opacity-20 pointer-events-none mx-auto">
            {Array.from({ length: 49 }).map((_, index) => (
              <div
                key={index}
                className="h-24 min-w-24 border border-gray-600 bg-transparent"
              ></div>
            ))}
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
