import JokePage from "@/components/GetJoke";
import Navbar from "@/components/NavBar";
import Aurora from "@/components/Aurora";

export default function Home() {
  return (
    <>
    <div className="m-0">
      <div className="relative top-20">
    <Navbar />
      </div>
    <Aurora />
    </div>
        <JokePage />
    <Aurora />

    <footer className="w-full p-2 h-[9vh] sticky bottom-0 backdrop-blur-md font-bold text-center">
      <p>This full stack application is built using Python, Fast API, Pyjokes! This project is licensed under MIT License. Made with love and Python by Ahum Maitra</p>
    </footer>
    </>
  );
}
