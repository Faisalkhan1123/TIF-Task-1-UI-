import { Inter } from "@next/font/google";
import "reset-css";
import Footer from "@/components/Footer/Footer";
import FirstSection from "@/components/FirstSection";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <FirstSection />
      <Footer />
    </>
  );
}
