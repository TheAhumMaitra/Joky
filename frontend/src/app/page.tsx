import Footer from "@/components/Footer";
import JokePage from "@/components/GetJoke";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";
import PixelBlast from "@/components/PixelBlast";

export default function Home() {
  return (
    <>
      <div className="sticky top-0 h-2 backdrop-blur-md">
        <Header />
      </div>

      <main>
        <MainContent />
      </main>

      <div className="sticky bottom-0">
        <Footer />
      </div>
    </>
  );
}
