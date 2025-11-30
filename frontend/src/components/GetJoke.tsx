  // Copyright (C)  2025   Ahum Maitra

  //   This program is free software: you can redistribute it and/or modify
  //   it under the terms of the GNU General Public License as published by
  //   the Free Software Foundation, either version 3 of the License, or
  //   (at your option) any later version.

  //   This program is distributed in the hope that it will be useful,
  //   but WITHOUT ANY WARRANTY; without even the implied warranty of
  //   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  //   GNU General Public License for more details.

  //   You should have received a copy of the GNU General Public License
  //   along with this program.  If not, see <https://www.gnu.org/licenses/>

  
export const dynamic = "force-dynamic";

export default async function JokePage() {
    const api_url = "https://joky.onrender.com/joke";
    const data = await fetch(api_url, {cache: "no-store"});
    const joke = await data.text();

    return (
        <div className=" h-[50vh] flex flex-col items-center justify-center">
            <p className="m-4 text-center font-bold text-green-400 outline-4 outline-green-400 p-5">{joke}</p>
        </div>
    );
}
