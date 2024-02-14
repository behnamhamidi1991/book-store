import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "کتابفروشی , کتابخانه تیسفون | خوش آمدید",
  description: "بزرگترین هایپرفروشگاه کتاب در ایران دارای شعبه در تمام ",
  icons: {
    icon: ["/bookicon.svg"],
    apple: ["/apple-touch-icon.svg?v=4"],
    shortcut: ["/apple-touch-icon.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl" className="main">
      <body>
        <ThemeContextProvider>
          <ThemeProvider>
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
