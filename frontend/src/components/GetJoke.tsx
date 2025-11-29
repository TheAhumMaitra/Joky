export default async function JokePage() {
    const api_url = "https://joky.onrender.com/joke";
    const data = await fetch(api_url);
    const joke = await data.text();

    return (
        <div className=" h-[50vh] flex flex-col items-center justify-center">
            <p className="m-4 text-center font-bold text-green-400 outline-4 outline-green-400 p-5">{joke}</p>
        </div>
    );
}
