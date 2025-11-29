import Aurora from "./Aurora";
import Navbar from "./NavBar";

export default function Header() {
  return (
    <>
      <div className="sticky top-0 backdrop-blur-md mb-2">
        <div>
          <Aurora />
          <div className="relative bottom-30">
            <div className="sticky top-9">
              <Navbar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
