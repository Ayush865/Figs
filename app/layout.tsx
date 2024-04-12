import { Work_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ClerkProvider } from "@clerk/nextjs";

import Room from "./Room";

export const metadata = {
  title: "Figs",
  description:
    "A minimalist Figma clone using fabric.js and Liveblocks for realtime collaboration",
};

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "600", "700"],
});

const RootLayout = ({ children }: { children: React.ReactNode }) => (
  <ClerkProvider>
    <html lang='en'>
      <body className={`${workSans.className} bg-indigo-100`}>
        <Room>
          <TooltipProvider>
            {children}
            <SpeedInsights />
          </TooltipProvider>
        </Room>
      </body>
    </html>
  </ClerkProvider>
);

export default RootLayout;
