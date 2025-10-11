import { Gloock, Plus_Jakarta_Sans, Playwrite_DE_SAS } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";

const fontHeading = Gloock({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const fontBody = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const fontLogo = Playwrite_DE_SAS({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Pacific Holidays",
  description: "Your passport to memorable adventures",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${fontHeading.variable} ${fontBody.variable} ${fontLogo.variable} antialiased`}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
