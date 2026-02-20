import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MARTIN LENGA // AI & FULL STACK ENGINEER",
  description: "Data & Machine Learning Graduate. Predictive Analytics Specialist. Bridging the gap between raw data & scalable systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}>
      {/* Added 'cursor-none' right here to hide the default mouse pointer */}
      <body className="bg-void text-stark font-sans antialiased overflow-x-hidden selection:bg-neon selection:text-void cursor-none">
        {children}
      </body>
    </html>
  );
}