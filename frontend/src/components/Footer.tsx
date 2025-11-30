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
