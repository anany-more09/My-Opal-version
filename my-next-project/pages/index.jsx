
import localFont from "next/font/local";
import Header from "@/Components/Header";
import AppBar from "@/Components/AppBar";
import Product from "@/Components/Product";
import Logo from "@/Components/Logo"
import Footer from "@/Components/Footer";

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
