import type { Metadata } from "next";
import { Darker_Grotesque, Inter, Poppins, Albert_Sans } from "next/font/google";
import "../styles/globals.css";

const darkerGrotesque = Darker_Grotesque({
  subsets: ["latin"],
  variable: "--font-darker-grotesque",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const albertSans = Albert_Sans({
  subsets: ["latin"],
  variable: "--font-albert-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Myles Yeo Tan | Faith & Finance",
  description: "Crypto Trader | Christian Entrepreneur | Public Speaker | Financial Planner | Real Estate Broker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${darkerGrotesque.variable} ${inter.variable} ${poppins.variable} ${albertSans.variable} antialiased bg-[#0f100a] text-white`}
      >
        {children}
      </body>
    </html>
  );
}
