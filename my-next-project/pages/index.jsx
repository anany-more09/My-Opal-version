
import localFont from "next/font/local";
import Header from "@/components/Header";
import AppBar from "@/components/AppBar";
import Product from "@/components/Product";
import Logo from "@/components/Logo"
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div>
      <Header />
      <AppBar />
      <Product />
      <Logo />
      <Footer />
      {/* I have used Components based design as a professional developer. */}
    </div>
  );
}
