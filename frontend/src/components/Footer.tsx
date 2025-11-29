import Aurora from "./Aurora";

export default function Footer() {
  return (
    <>
      <div>
        <div className="h-[2vh] p-0!">
        <Aurora />
        </div>
        <footer className=" w-full p-2 relative backdrop-blur-md font-bold text-center">
          <p>Made with ❤️ and ☕ by Ahum</p>
        </footer>
      </div>
    </>
  );
}
