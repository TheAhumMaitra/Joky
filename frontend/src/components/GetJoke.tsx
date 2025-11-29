export default async function JokePage() {
    const data = await fetch("https://joky.onrender.com/joke");
    const joke = await data.text();

    return (
        <div className=" h-[40vh] flex flex-col items-center justify-center">
            <p className="m-4 text-center font-bold text-green-500">{joke}</p>
        </div>
    );
}
