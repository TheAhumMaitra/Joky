export default async function JokePage() {
    const data = await fetch("http://127.0.0.1:8000/joke");
    const joke = await data.text();

    return (
        <div>
            <p>{joke}</p>
        </div>
    );
}
